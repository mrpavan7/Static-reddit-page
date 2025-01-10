import React from "react";
import SummerSaleCard from "./SummerSaleCard";
import RedditCard from "./RedditCard";

const Banners = () => {
  return (
    <div className=" h-full  w-[20%] pt-5 px-5">
      <SummerSaleCard />
      <RedditCard />
    </div>
  );
};

export default Banners;
