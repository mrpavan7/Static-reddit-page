import React from "react";
import Categories from "./Categories";
import Popular from "./Popular";
import Banners from "./Banners";

const MainPage = () => {
  return (
    <div className="rounded-lg h-[132vh] w-full bg-blue-50 flex">
      <Categories />
      <Popular />
      <Banners />
    </div>
  );
};

export default MainPage;
