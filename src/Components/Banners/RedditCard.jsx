import React from "react";
import RedditLogo from "../../assets/RedditLogo.svg";

const RedditCard = () => {
  return (
    <div className="relative flex flex-col items-center w-full mt-10 overflow-hidden bg-white rounded-lg h-60">
      <div className="border-[8px] border-gray-200 rounded-full absolute -top-16 -right-16 h-32 aspect-square"></div>
      <div className="absolute grid grid-cols-3 gap-3 top-3 left-3">
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
      </div>
      <img src={RedditLogo} alt="Reddit Logo" className="w-[60%] mt-5" />
      <p className="relative text-lg font-semibold text-gray-700 bottom-5">
        Advertise on Reddit
      </p>
      <button className=" border-[3px] rounded-md font-bold py-3 text-sm px-14 text-[#ff4500] border-[#ff4500]">
        GET STARTED
      </button>
    </div>
  );
};

export default RedditCard;
