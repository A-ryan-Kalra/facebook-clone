import React from "react";
import { Icon } from "@iconify/react";

function SidebarLink({ icon, color, state, text }) {
  //   console.log(state);
  return (
    <div className={`${state && "hidden"} w-full`}>
      <div
        tabIndex={0}
        className={`flex items-center focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2  outline-none hover:bg-gray-500  hover:bg-opacity-20 cursor-pointer rounded-l-lg px-2 ml-2 py-2  `}
      >
        <Icon
          icon={icon}
          style={{ color: color }}
          // width={40}
          // height={40}
          className={`p-1 w-10 h-10 `}
        />
        <span className=" hidden lg:inline ml-2">{text}</span>
      </div>
    </div>
  );
}

export default SidebarLink;
