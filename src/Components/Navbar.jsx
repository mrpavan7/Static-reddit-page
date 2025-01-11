import React, { useState, useEffect, useRef } from "react";
import { LuSun } from "react-icons/lu";
import RedditLogo from "../assets/RedditLogo.svg";
import { HiOutlineHome, HiOutlineTrendingUp } from "react-icons/hi";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { MdOutlineMarkChatUnread, MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import ProfileImg from "../assets/ProfileImg.jpg";
import axios from "axios";
import "../App.css";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [rateLimitRemaining, setRateLimitRemaining] = useState(60);
  const [lastSearchTime, setLastSearchTime] = useState(0);
  const [isActive, setIsActive] = useState("Popular");
  const [clicking, setClicking] = useState(false);
  const searchRef = useRef(null);

  const checkRateLimit = () => {
    const now = Date.now();
    if (now - lastSearchTime < 1000) {
      // 1 second cooldown
      throw new Error("Please wait before searching again");
    }
    if (rateLimitRemaining <= 0) {
      throw new Error("Search limit reached. Please try again later.");
    }
    setLastSearchTime(now);
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);
    try {
      checkRateLimit();
      const response = await axios.get(
        `${import.meta.env.VITE_REDDIT_API_BASE_URL}/search.json`,
        {
          params: {
            q: query,
            limit: 5,
          },
        }
      );

      // Update rate limit info from headers
      const remaining = response.headers["x-ratelimit-remaining"];
      if (remaining) setRateLimitRemaining(parseInt(remaining));

      setSearchResults(response.data.data.children);
    } catch (error) {
      console.error("Search error:", error.message);
      // Show error in dropdown
      setSearchResults([]);
      setShowDropdown(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center justify-between w-full px-5 mt-3 bg-white h-14">
      <div className="flex items-center h-full gap-3">
        <LuSun className="text-2xl cursor-pointer" />
        <img src={RedditLogo} alt="" className="w-auto h-20" />
      </div>
      <div className="flex items-center gap-10">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsActive("Home")}
        >
          <HiOutlineHome
            className={`text-2xl ${
              isActive === "Home" ? "text-[#ff4500]" : "text-gray-700"
            }`}
          />
          <p
            className={`mt-1 text-lg font-semibold ${
              isActive === "Home" ? "text-[#ff4500]" : "text-gray-700"
            }`}
          >
            Home
          </p>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsActive("Popular")}
        >
          <HiOutlineTrendingUp
            className={`text-2xl ${
              isActive === "Popular" ? "text-[#ff4500]" : "text-gray-700"
            }`}
          />
          <p
            className={`mt-1 text-lg font-semibold ${
              isActive === "Popular" ? "text-[#ff4500]" : "text-gray-700"
            }`}
          >
            Popular
          </p>
        </div>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setIsActive("All")}
        >
          <FaArrowUpWideShort
            className={`text-2xl ${
              isActive === "All" ? "text-[#ff4500]" : "text-gray-700"
            }`}
          />
          <p
            className={`mt-1 text-lg font-semibold ${
              isActive === "All" ? "text-[#ff4500]" : "text-gray-700"
            }`}
          >
            All
          </p>
        </div>
        <div className="relative" ref={searchRef}>
          <div className="flex items-center h-10 bg-gray-100 w-[25vw] px-3 gap-3 rounded-lg">
            <LuSearch className="text-xl text-gray-500 cursor-pointer" />
            <input
              type="text"
              className="w-full text-base font-semibold bg-gray-100 focus:outline-none"
              placeholder="Find community or post"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowDropdown(true);
              }}
              onFocus={() => setShowDropdown(true)}
            />
            {isLoading && (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-[#ff4500] rounded-full animate-spin"></div>
            )}
          </div>
          {showDropdown && searchResults.length > 0 && (
            <div className="no-scrollbar absolute w-full mt-2 bg-white rounded-lg shadow-lg max-h-[60vh] overflow-y-auto z-50">
              {searchResults.map((result) => (
                <a
                  key={result.data.id}
                  href={`https://reddit.com${result.data.permalink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-3 hover:bg-gray-100"
                >
                  <div className="flex flex-col">
                    <span className="font-semibold">{result.data.title}</span>
                    <span className="text-sm text-gray-500">
                      r/{result.data.subreddit}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
        <button
          className={`${
            clicking ? "bg-[#cc3700]" : "bg-[#ff4500]"
          } text-lg font-semibold text-white p-2 px-7 rounded-lg`}
          onMouseDown={() => setClicking(true)}
          onMouseUp={() => setClicking(false)}
        >
          Create Post
        </button>
      </div>
      <div className="flex items-center h-full gap-5">
        <MdOutlineMarkChatUnread className="text-2xl text-gray-600" />
        <MdOutlineMailOutline className="text-2xl text-gray-600" />
        <div className="flex items-center gap-2 ">
          <div className="bg-[#ff4500] h-10 aspect-square rounded-full">
            <img src={ProfileImg} alt="" className="rounded-full" />
          </div>
          <IoIosArrowDown className="text-2xl text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
