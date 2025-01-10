import React from "react";
import { LuSun } from "react-icons/lu";
import RedditLogo from "../assets/RedditLogo.svg";
import { HiOutlineHome, HiOutlineTrendingUp } from "react-icons/hi";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { MdOutlineMarkChatUnread, MdOutlineMailOutline } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import ProfileImg from "../assets/ProfileImg.jpg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between w-full px-5 mt-3 bg-white h-14">
      <div className="flex items-center h-full gap-3">
        <LuSun className="text-2xl cursor-pointer" />
        <img src={RedditLogo} alt="" className="w-auto h-20" />
      </div>
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2 cursor-pointer">
          <HiOutlineHome className="text-2xl" />
          <p className="mt-1 text-lg font-semibold text-gray-700">Home</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <HiOutlineTrendingUp className="text-2xl" />
          <p className="mt-1 text-lg font-semibold text-gray-700">Popular</p>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <FaArrowUpWideShort className="text-2xl" />
          <p className="mt-1 text-lg font-semibold text-gray-700">All</p>
        </div>
        <div className="flex items-center h-10 bg-gray-100 w-[25vw] px-3 gap-3 rounded-lg">
          <LuSearch className="text-xl text-gray-500 cursor-pointer" />
          <input
            type="text"
            className="text-base font-semibold bg-gray-100 focus:outline-none"
            placeholder="Find comunity or post"
          />
        </div>
        <button className="bg-[#ff4500] text-lg font-semibold text-white p-2 px-7 rounded-lg">
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
