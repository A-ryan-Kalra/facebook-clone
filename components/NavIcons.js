import React from "react";
import { Icon } from "@iconify/react";

function NavIcons({ icon, id }) {
  //   console.log(`${clicked} 12`);
  return (
    <button
      // onClick={onClick}
      onClick={() => console.log(id)}
      className={` focus:text-[#1876F1] focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2    outline-none rounded-full bg-[#E4E7EA] p-[6px] cursor-pointer active:scale-95`}
    >
      <Icon icon={icon} className="text-[30px] " />
    </button>
  );
}

export default NavIcons;
