import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
import { Icon } from "@iconify/react";
import { sessionState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";

function Sidebar() {
  const [state, setState] = useState(true);
  const [session, setSession] = useRecoilState(sessionState);
  // console.log(session);
  return (
    <div className=" flex flex-col lg:min-w-[360px]  overflow-y-auto max-h-[100vh] py-2  fixed pb-20 ">
      <div className={` w-full`}>
        <div
          tabIndex={0}
          className={`flex items-center focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2  outline-none hover:bg-gray-500   hover:bg-opacity-20 cursor-pointer rounded-l-lg px-2 ml-2 py-2  `}
        >
          <img
            src={session.photoURL ? session?.photoURL : "/facebook.png"}
            className={`p-1 -ml-1 w-11 h-11 rounded-full`}
          />
          <span className=" hidden lg:inline ml-1">
            {session.displayName ? session.displayName : session.email}
          </span>
        </div>
      </div>
      <SidebarLink
        icon={"fa-solid:user-friends"}
        text="Freinds"
        color="#68D7C7"
      />
      <SidebarLink icon={"gg:feed"} text="Feeds" color="#34ABFC" />
      <SidebarLink
        icon={"material-symbols:groups-2"}
        color="#34ABFC"
        text="Groups"
      />
      <SidebarLink
        icon={"healthicons:market-stall-outline"}
        text="Marketplace"
        color={"#5CC8D5"}
      />
      <SidebarLink
        icon={"typcn:video-outline"}
        text="Video"
        color={"#5CC8D5"}
      />
      <SidebarLink
        icon={"ri:memories-line"}
        text="Memories"
        color={`#1B7ADC`}
      />
      <SidebarLink
        icon={"foundation:archive"}
        color={"#C05DC6"}
        state={state}
        text="Saved"
      />
      <SidebarLink
        icon={"ic:twotone-emoji-flags"}
        color={"#EA5A2F"}
        state={state}
        text="Pages"
      />
      <SidebarLink
        icon={"arcticons:ad-free"}
        color={"#48a860"}
        state={state}
        text="Ad Center"
      />
      <SidebarLink
        icon={"foundation:graph-bar"}
        state={state}
        color={"#1E92F9"}
        text="Ads Manager"
      />
      <SidebarLink
        icon={"material-symbols:event"}
        state={state}
        text="Events"
        color={"#E48894"}
      />
      <SidebarLink
        icon={"fluent:games-16-filled"}
        state={state}
        color={"#249DFA"}
        text="Play Games"
      />
      <SidebarLink
        icon={"simple-icons:gameandwatch"}
        state={state}
        text="Gaming Video"
        color={"#a029b2"}
      />
      <SidebarLink
        icon={"material-symbols:live-tv"}
        state={state}
        text="Live videos"
        color={"#EA5875"}
      />
      <SidebarLink
        icon={"fe:messanger"}
        state={state}
        text="Messanger"
        color={"#C462D0"}
      />
      <hr className="border-gray-300 pb-1 w-[94%] mr-1 ml-auto" />
      <div
        className="flex items-center hover:bg-gray-500 focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2    hover:bg-opacity-20 cursor-pointer rounded-lg px-2 ml-2 py-2 outline-none"
        tabIndex={0}
        onClick={() => setState(!state)}
      >
        <Icon
          icon="iconamoon:arrow-down-2"
          vFlip={`${state ? false : true}`}
          className=" bg-[#E4E7EA]  h-9 w-9 p-1 rounded-full"
        />
        <span className="hidden lg:inline ml-3">
          {state ? "See more" : "See less"}
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
