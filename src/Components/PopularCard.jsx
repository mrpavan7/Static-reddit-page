import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { FiMessageSquare } from "react-icons/fi";
import { GoShareAndroid } from "react-icons/go";
import { MdOutlineMoreHoriz } from "react-icons/md";
import img1 from "../assets/img1.jpg";

const PopularCard = () => {
  return (
    <div className="w-full h-[21vh] border flex rounded-lg mt-5">
      <div className="w-[92%] p-3 flex gap-5">
        <div className="h-full p-3 bg-red-300 border rounded-md aspect-square"></div>
        <div className="h-full w-[60%] px-3 flex flex-col justify-between">
          <p className="text-lg font-semibold cursor-pointer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit,
            sapiente voluptas.
          </p>
          <div className="flex justify-between w-full">
            <div className="flex gap-3 text-sm font-semibold text-gray-600">
              <p>Posted by</p>
              <img
                src={img1}
                className="h-5 rounded-full cursor-pointer aspect-square"
                alt=""
              />
              <p>Claire cooper</p>
            </div>
            <div className="flex text-sm font-semibold text-gray-600">
              <p>July 15, 2012</p>
              <p>9:43 PM</p>
            </div>
          </div>
        </div>
        <div className="h-full w-[20%] pl-4 justify-evenly flex flex-col">
          <div className="flex gap-2 text-sm font-semibold text-gray-600 cursor-pointer">
            <FiMessageSquare className="text-xl" />
            <p>716</p>
            <p>Comments</p>
          </div>
          <div className="flex gap-2 text-sm font-semibold text-gray-600 cursor-pointer">
            <GoShareAndroid className="text-xl" />
            <p>364</p>
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
        <div className="font-semibold text-gray-700">182K</div>
        <div className=" bg-[#ff44001c] px-3 py-1 rounded-md cursor-pointer">
          <IoIosArrowDown className="text-[#ff4500] text-xl" />
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
