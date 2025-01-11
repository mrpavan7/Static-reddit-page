import React from "react";
import Categories from "../Categories/Categories";
import Feeds from "../Feeds/Feeds";
import Banners from "../Banners/Banners";

const MainPage = () => {
  return (
    <div className="rounded-lg h-[132vh] w-full bg-blue-50 flex">
      <Categories />
      <Feeds />
      <Banners />
    </div>
  );
};

export default MainPage;
