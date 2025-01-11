import React from "react";

const Footer = () => {
  const items = [
    "About",
    "Advertise",
    "Reddit App",
    "Carrers",
    "Help",
    "Reddit Gold",
    "Press",
    "Blog",
    "Reddit Hits",
  ];
  return (
    <footer className=" w-full h-[17%]">
      <div className="h-[70%] w-full border-t-2 border-gray-200 grid grid-cols-3">
        {items.map((item, index) => {
          return (
            <p className="flex items-center text-sm font-semibold text-gray-500 ">
              <span className="mr-[4px] text-xl text-gray-400">•</span>
              {item}
            </p>
          );
        })}
      </div>
      <div className="h-[30%] text-gray-500 font-semibold text-sm w-full border-t-2 border-gray-200 flex justify-between items-center">
        <div>
          <p>
            <span className="mr-2">©</span>2020
          </p>
        </div>
        <div className="flex gap-5">
          <p>Privacy</p>
          <p>Terms</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
