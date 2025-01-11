import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import Category from "./Category";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";

const Categories = () => {
  const content = [
    {
      title: "FAVORITES",
      categories: [
        {
          name: "r/funymore",
          posts: "156",
          img: img1,
        },
        {
          name: "r/breakingnews",
          posts: "12",
          img: img2,
        },
        {
          name: "r/lovestory",
          img: img3,
        },
        {
          name: "r/gamingfun",
          posts: "08",
          img: img4,
        },
      ],
    },
    {
      title: "REDDIT FEEDS",
      categories: [
        {
          name: "r/moview",
          posts: "04",
          img: img5,
        },
        {
          name: "r/gaming",
          img: img6,
        },
        {
          name: "r/pics",
          posts: "32",
          img: img7,
        },
        {
          name: "r/gifs",
          img: img8,
        },
      ],
    },
    {
      title: "COMMUNITY",
      categories: [
        {
          name: "r/funymore",
          img: img9,
        },
        {
          name: "r/breakingnews",
          img: img10,
        },
        {
          name: "r/gaming",
          posts: "43",
          img: img11,
        },
        {
          name: "r/lovestory",
          posts: "12",
          img: img12,
        },
      ],
    },
  ];

  return (
    <div className=" w-[20%] px-5 mt-5">
      <div className="flex items-center justify-between p-2 rounded-lg cursor-pointer bg-white border w-[95%]">
        <p className="font-medium text-gray-500">Filter by</p>
        <IoIosArrowDown className="text-xl text-gray-500" />
      </div>
      {content.map((item, index) => {
        return <Category key={index} content={item} />;
      })}
    </div>
  );
};

export default Categories;
