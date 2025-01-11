import React from "react";
import "../App.css";

const SkeletonCard = () => {
  return (
    <div className="flex justify-center w-full my-5 mt-8">
      <div className="loader h-[20vh] w-full rounded-lg">
        <div className="wrapper ">
          <div className="h-full square aspect-square"></div>
          <div className=" absolute top-0 left-36 h-5 mt-3 w-[30%]"></div>
          <div className=" absolute top-10 left-36 h-5 mt-3 w-[70%]"></div>
          <div className=" absolute top-20 left-36 h-5 mt-3 w-[50%]"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
