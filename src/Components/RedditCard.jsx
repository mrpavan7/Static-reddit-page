import React from "react";
import RedditLogo from "../assets/RedditLogo.svg";

const RedditCard = () => {
  return (
    <div className="w-full h-60 bg-white mt-10 flex relative overflow-hidden flex-col items-center rounded-lg">
      <div className="border-[8px] border-gray-200 rounded-full absolute -top-16 -right-16 h-32 aspect-square"></div>
      <div class="grid absolute grid-cols-3 gap-3 top-3 left-3">
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-200 rounded-full"></div>
      </div>
      <img src={RedditLogo} alt="" className="w-[60%] mt-5" />
      <p className=" relative bottom-5 text-lg font-semibold text-gray-700">
        Advertise on Reddit
      </p>
      <button className=" border-[3px] rounded-md font-bold py-3 text-sm px-14 text-[#ff4500] border-[#ff4500]">
        GET STARTED
      </button>
    </div>
  );
};

export default RedditCard;
