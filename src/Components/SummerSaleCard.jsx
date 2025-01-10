import React from "react";
import flower from "../assets/flower.png";

const SummerSaleCard = () => {
  return (
    <div className="h-72 relative w-full bg-white flex items-center justify-center rounded-lg overflow-hidden">
      <img
        src={flower}
        alt=""
        className="h-[65%] opacity-85 absolute top-0 rotate-90 left-0"
      />
      <img
        src={flower}
        alt=""
        className="h-[65%] absolute bottom-0 -rotate-90 right-0"
      />
      <p className="absolute top-5 text-lg font-semibold">SUMMER BIG</p>
      <div className="h-[50%] w-[75%] border-[11px] z-10 bg-white shadow-2xl flex flex-col relative items-center border-yellow-300">
        <p className="text-6xl font-black relative bottom-12">SALE</p>
        <p className="font-semibold mb-2 relative bottom-10">summer offer</p>
        <p className="text-[10px] border-y-2 relative bottom-10 border-red-500 py-2 font-semibold">
          Limited Time Discount! Max $100
        </p>
        <p className="font-bold text-xl absolute bottom-1 left-4">
          <span className=" relative z-10">$300</span>
          <span
            className="absolute bg-red-500 h-[3px] w-[115%] z-10 top-[50%] -left-[3px]"
            style={{ transform: "translateY(-50%)" }}
          ></span>
        </p>
        <p className="text-green-800 text-lg font-semibold absolute bottom-1 right-2">
          $29 Only
        </p>
      </div>
    </div>
  );
};

export default SummerSaleCard;
