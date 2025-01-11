import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineMoreHoriz } from "react-icons/md";
import defaultImage from "../assets/defaultImg.png";
import defaultThumbnail from "../assets/defaultThumbnail.jpg";

const FeedCard = ({ post }) => {
  const handleProfileImageError = (e) => {
    e.target.src = defaultImage;
  };
  const handleThumbnailError = (e) => {
    e.target.src = defaultThumbnail;
  };

  return (
    <div className="w-full h-[21vh] border flex rounded-lg mt-5">
      <div className="w-[92%] p-3 flex gap-5">
        <div className="h-full bg-red-300 border rounded-md aspect-square">
          <img
            src={post.thumbnail ? post.thumbnail : defaultThumbnail}
            alt=""
            className="w-full h-full rounded-md"
            onError={handleThumbnailError}
          />
        </div>
        <div className="h-full w-[60%] px-3 flex flex-col justify-between">
          <p className="text-lg font-semibold cursor-pointer">{post.title}</p>
          <div className="flex justify-between w-full">
            <div className="flex gap-3 text-sm font-semibold text-gray-600">
              <p>Posted by</p>
              <img
                src={post.profileImage ? post.profileImage : defaultImage}
                className="h-5 rounded-full cursor-pointer aspect-square"
                alt=""
                onError={handleProfileImageError}
              />
              <p>{post.author}</p>
            </div>
            <div className="flex text-sm font-semibold text-gray-600">
              <p>{post.createdAt}</p>
            </div>
          </div>
        </div>
        <div className="h-full w-[20%] pl-4 justify-evenly flex flex-col">
          <div className="flex gap-2 text-sm font-semibold text-gray-600 cursor-pointer">
            <FiMessageSquare className="text-xl" />
            <p>{post.numComments}</p>
            <p>Comments</p>
          </div>
          <div className="flex gap-2 text-sm font-semibold text-gray-600 cursor-pointer">
            <a href={post.shareUrl}>
              <GoShareAndroid className="text-xl" />
            </a>
            <p>{post.numShares}</p>
            <p>Share</p>
          </div>
          <div className="flex gap-2 text-sm font-semibold text-gray-600 cursor-pointer">
            <MdOutlineMoreHoriz className="text-xl" />
            <p>More</p>
          </div>
        </div>
      </div>
      <div className="w-[8%] border-l flex flex-col items-center justify-evenly">
        <div className=" bg-[#ff44001c] px-3 py-1 rounded-md cursor-pointer">
          <IoIosArrowUp className="text-[#ff4500] text-xl" />
        </div>
        <div className="font-semibold text-gray-700">{post.score}</div>
        <div className=" bg-[#ff44001c] px-3 py-1 rounded-md cursor-pointer">
          <IoIosArrowDown className="text-[#ff4500] text-xl" />
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
