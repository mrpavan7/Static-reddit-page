import React, { useEffect, useState, useCallback } from "react";
import FeedCard from "./FeedCard";
import "../App.css";
import axios from "axios";
import SkeletonCard from "./SkeletonCard";

const Feeds = () => {
  const [activeFilter, setActiveFilter] = useState("Hot");
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [error, setError] = useState(null);
  const [subredditName, setSubredditName] = useState("popular");
  const [isLoading, setIsLoading] = useState(false);
  const [after, setAfter] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [rateLimitRemaining, setRateLimitRemaining] = useState(60);
  const [lastRequestTime, setLastRequestTime] = useState(0);
  const filters = ["Hot", "New", "Controversial", "Rising", "Top"];
  const baseUrl = import.meta.env.VITE_REDDIT_API_BASE_URL;

  const formatRedditDate = (utcSeconds) => {
    const date = new Date(utcSeconds * 1000);

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  const generateRandomShareNumber = () => {
    return Math.floor(Math.random() * 900) + 100;
  };

  const fetchProfileImage = async (author) => {
    try {
      const response = await axios.get(`${baseUrl}/user/${author}/about.json`);
      return response.data.data.icon_img;
    } catch (error) {
      throw error("Failed to fetch profile image", error.message);
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num.toString();
  };

  const checkRateLimit = () => {
    const now = Date.now();
    if (now - lastRequestTime < 1000) {
      throw new Error("Rate limit exceeded. Please wait.");
    }
    if (rateLimitRemaining <= 0) {
      throw new Error("Reddit API rate limit reached. Please try again later.");
    }
    setLastRequestTime(now);
  };

  const fetchFeeds = async (
    subredditName,
    activeFilter,
    limit,
    afterParam = null
  ) => {
    try {
      checkRateLimit();
      setIsLoading(!afterParam);
      if (afterParam) setIsLoadingMore(true);

      const response = await axios.get(
        `${baseUrl}/r/${subredditName.toLowerCase()}/${activeFilter.toLowerCase()}.json`,
        {
          params: {
            limit,
            after: afterParam,
          },
        }
      );

      // Update rate limit info from headers
      const remaining = response.headers["x-ratelimit-remaining"];
      if (remaining) setRateLimitRemaining(parseInt(remaining));

      const formattedPosts = await Promise.all(
        response.data.data.children.map(async (post) => {
          const {
            id,
            title,
            author,
            thumbnail,
            num_comments,
            created_utc,
            score,
            thumbnail_height,
            thumbnail_width,
          } = post.data;

          const numComments = formatNumber(num_comments);
          const formattedScore = formatNumber(score);

          const profileImage = await fetchProfileImage(author);

          return {
            id,
            title,
            author,
            profileImage,
            thumbnail:
              thumbnail && !["self", "default", "nsfw"].includes(thumbnail)
                ? thumbnail
                : null,
            thumbnailHeight: thumbnail_height || null,
            thumbnailWidth: thumbnail_width || null,
            numComments: numComments,
            createdAt: formatRedditDate(created_utc),
            score: formattedScore,
            shareUrl: `https://reddit.com${post.data.permalink}`,
            numShares: generateRandomShareNumber(),
          };
        })
      );

      setPosts((prev) =>
        afterParam ? [...prev, ...formattedPosts] : formattedPosts
      );
      setAfter(response.data.data.after);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
      setIsLoadingMore(false);
    }
  };

  const loadMore = useCallback(() => {
    if (!isLoadingMore && after) {
      fetchFeeds(subredditName, activeFilter, limit, after);
    }
  }, [after, isLoadingMore, subredditName, activeFilter, limit]);

  // Add scroll listener for infinite scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const scrollThreshold = document.documentElement.scrollHeight - 800;

      if (scrollPosition > scrollThreshold) {
        loadMore();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMore]);

  // Reset pagination when filter or subreddit changes
  useEffect(() => {
    setAfter(null);
    setPosts([]);
    fetchFeeds(subredditName, activeFilter, limit);
  }, [subredditName, activeFilter]);

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  console.log(posts);

  return (
    <div className="bg-white rounded-lg px-5 w-[60%] mt-5">
      <div className="flex justify-between px-2 mt-5">
        <p className="text-xl font-semibold">Popular</p>
        <div className="flex transition-all ease-in-out gap-7">
          {filters.map((filter, index) => {
            return (
              <button
                className={`${
                  activeFilter === filter
                    ? "bg-gray-200 rounded-lg px-3 text-black"
                    : " text-gray-600"
                } font-semibold`}
                key={index}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
      <div className="no-scrollbar h-[122vh] pb-5 overflow-y-scroll">
        {isLoading ? (
          <div>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </div>
        ) : (
          <>
            {posts.map((post, index) => (
              <FeedCard key={`${post.id}-${index}`} post={post} />
            ))}
            {isLoadingMore && (
              <div className="flex justify-center p-4">
                <div className="w-8 h-8 border-4 border-gray-300 border-t-[#ff4500] rounded-full animate-spin"></div>
              </div>
            )}
            {error && (
              <div className="p-4 text-center text-red-500">{error}</div>
            )}
            {!isLoadingMore && after && (
              <button
                onClick={loadMore}
                className="w-full p-3 mt-4 text-gray-600 rounded-lg hover:bg-gray-100"
              >
                Load More
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Feeds;
