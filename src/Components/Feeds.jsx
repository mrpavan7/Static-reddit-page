import React, { useEffect, useState } from "react";
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
  const filters = ["Hot", "New", "Controversial", "Rising", "Top"];
  const baseUrl = "https://www.reddit.com/";

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
      const response = await axios.get(`${baseUrl}user/${author}/about.json`);
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

  const fetchFeeds = async (subredditName, activeFilter, limit) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await axios.get(
        `${baseUrl}r/${subredditName.toLowerCase()}/${activeFilter.toLowerCase()}.json?limit=${limit}`
      );

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
      console.log("Successfully fetched posts");
      setPosts(formattedPosts);
    } catch (err) {
      console.log("Error while fetching posts");
      console.log(err.message);
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFeeds(subredditName, activeFilter, limit);
  }, [subredditName, activeFilter, limit]);

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
          posts.map((post, index) => {
            return <FeedCard key={index} post={post} />;
          })
        )}
      </div>
    </div>
  );
};

export default Feeds;
