import React from "react";
import defaultImg from "../assets/defaultImg.png";

const Section = ({ category }) => {
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <img
          src={category.img ? category.img : defaultImg}
          alt=""
          className="h-8 aspect-square rounded-full"
        />
        <p className="text-gray-600 font-semibold">{category.name}</p>
      </div>
      {category.posts ? (
        <p className="text-[12px] w-9 text-center font-semibold text-gray-700 bg-gray-200 h-fit py-[2px] px-[8px] rounded-full">
          {category.posts}
        </p>
      ) : null}
    </div>
  );
};

const Category = ({ content }) => {
  return (
    <div
      className={`w-full px-5 pb-5 mt-5 flex flex-col gap-5 ${
        content.title === "COMMUNITY" ? null : "border-b-2 border-gray-200"
      }`}
    >
      <div className="flex w-full justify-between">
        <h1 className="font-bold text-sm text-gray-700">{content.title}</h1>
        <p className="text-sm font-medium text-gray-500">All</p>
      </div>
      {content.categories.map((category, index) => {
        return <Section key={index} category={category} />;
      })}
    </div>
  );
};

export default Category;
