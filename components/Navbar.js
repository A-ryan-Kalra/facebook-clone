import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import NavIcons from "./NavIcons";
import { Icon } from "@iconify/react";

function Navbar() {
  const icons = [
    "gg:menu-grid-o",
    "jam:messages-f",
    "solar:bell-bold",
    "solar:bell-bold",
  ];

  const [clickedStates, setClickedStates] = useState(icons.map(() => false));

  const checking = (id) => {
    var arr = [];
    clickedStates.map((check, index) => {
      if (index === id) {
        return (arr[index] = !check);
      } else {
        return (arr[index] = false);
      }
    });
    setClickedStates(arr);
    console.log(clickedStates);
  };

  return (
    <nav className=" sticky top-0 h-14 bg-[#FFFFFF]  shadow-md">
      <div className="flex items-center justify-between">
        <div className="py-2 px-4 flex">
          <img src="/facebook.png" className="w-10 h-10" alt="" />
          <div className=" bg-[#F0F3F4]  ml-2 flex items-center rounded-full w-9 sm:w-[240px] p-1  relative">
            <MagnifyingGlassIcon className="h-[18px] ml-1 font-bold  z-50 text-[#3e3f41]" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="placeholder-[#64676A] w-full hidden sm:inline bg-transparent rounded-full absolute font-normal text-sm inset-0 focus:ring-2 focus:ring-offset-1 pl-7 outline-none p-1"
            />
          </div>
        </div>
        <div className="flex space-x-2 px-2">
          {icons.map((icon, index) => (
            <NavIcons
              key={index}
              clicked={clickedStates[index]}
              icon={icon}
              onClick={() => checking(index)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
