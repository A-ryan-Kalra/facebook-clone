import React from "react";
import { Icon } from "@iconify/react";

function NavIcons({ icon, clicked, onClick }) {
  //   console.log(`${clicked} 12`);
  return (
    <div
      onClick={onClick}
      className={`${
        clicked && "text-[#1876F1] bg-[#E6F3FF]"
      } rounded-full bg-[#E4E7EA] p-[6px] cursor-pointer active:scale-95`}
    >
      <Icon icon={icon} className="text-[30px] " />
    </div>
  );
}

export default NavIcons;
// "bg-[#1876F1]" : "bg-[#E4E7EA]"
