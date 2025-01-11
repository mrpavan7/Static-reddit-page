import React from "react";
import flower from "../../assets/flower.png";

const SummerSaleCard = () => {
  return (
    <div className="relative flex items-center justify-center w-full overflow-hidden bg-white rounded-lg h-72">
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
      <p className="absolute text-lg font-semibold top-5">SUMMER BIG</p>
      <div className="h-[50%] w-[75%] border-[11px] z-10 bg-white shadow-2xl flex flex-col relative items-center border-yellow-300">
        <p className="relative text-6xl font-black bottom-12">SALE</p>
        <p className="relative mb-2 font-semibold bottom-10">summer offer</p>
        <p className="text-[10px] border-y-2 relative bottom-10 border-red-500 py-2 font-semibold">
          Limited Time Discount! Max $100
        </p>
        <p className="absolute text-xl font-bold bottom-1 left-4">
          <span className="relative z-10 ">$300</span>
          <span
            className="absolute bg-red-500 h-[3px] w-[115%] z-10 top-[50%] -left-[3px]"
            style={{ transform: "translateY(-50%)" }}
          ></span>
        </p>
        <p className="absolute text-lg font-semibold text-green-800 bottom-1 right-2">
          $29 Only
        </p>
      </div>
    </div>
  );
};

export default SummerSaleCard;
