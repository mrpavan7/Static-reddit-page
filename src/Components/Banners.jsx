import React from "react";
import SummerSaleCard from "./SummerSaleCard";
import RedditCard from "./RedditCard";

const Banners = () => {
  return (
    <div className=" w-[20%] mt-5 px-5">
      <SummerSaleCard />
      <RedditCard />
    </div>
  );
};

export default Banners;
