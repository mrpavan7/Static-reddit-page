import React, { useState } from "react";
import PopularCard from "./PopularCard";
import "../App.css";

const Popular = () => {
  const [activeFilter, setActiveFilter] = useState("Hot");
  const filters = ["Hot", "New", "Controversial", "Rising", "Top"];

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <div className="bg-white rounded-lg px-5 w-[60%] mt-5">
      <div className="flex justify-between px-2 mt-5">
        <p className="text-xl font-semibold">Popular</p>
        <div className="flex transition-all ease-in-out gap-7">
          {filters.map((filter, index) => {
            return (
              <button
                className={`${
                  activeFilter === filter
                    ? "bg-gray-200 rounded-lg px-3 text-black"
                    : " text-gray-600"
                } font-semibold`}
                key={index}
                onClick={() => handleFilter(filter)}
              >
                {filter}
              </button>
            );
          })}
        </div>
      </div>
      <div className="no-scrollbar h-[122vh] pb-5 overflow-y-scroll">
        <PopularCard />
      </div>
    </div>
  );
};

export default Popular;
