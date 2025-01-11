import React from "react";
import SummerSaleCard from "./SummerSaleCard";
import RedditCard from "./RedditCard";
import Footer from "../Footer/Footer";

const Banners = () => {
  return (
    <div className=" w-[20%] mt-5 px-5 flex flex-col justify-between">
      <div>
        <SummerSaleCard />
        <RedditCard />
      </div>
      <Footer />
    </div>
  );
};

export default Banners;
