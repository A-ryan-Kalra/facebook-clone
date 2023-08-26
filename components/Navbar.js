import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import NavIcons from "./NavIcons";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { sessionState } from "../atoms/modalAtoms";
import { useRecoilState } from "recoil";
import { getAuth, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { app } from "../firebaseConfig";
function Navbar() {
  const router = useRouter();

  const icons = ["gg:menu-grid-o", "fe:messanger", "solar:bell-bold"];
  let auth = getAuth(app);
  const [clickedStates, setClickedStates] = useState(icons.map(() => false));

  // const checking = (e, id) => {
  //   var arr = [];
  //   clickedStates.map((check, index) => {
  //     if (index === id) {
  //       return (arr[index] = !check);
  //     } else {
  //       return (arr[index] = false);
  //     }
  //   });
  //   setClickedStates(arr);
  // };
  const [session, setSession] = useRecoilState(sessionState);

  return (
    <nav className=" sticky top-0 h-14  bg-[#FFFFFF]  mx-auto shadow-md">
      <div className="flex items-center justify-between">
        <div className="py-2 px-4 flex">
          <Link
            href="/"
            className="focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2   rounded-full outline-none"
          >
            <img src="favicon.ico" className="w-10 h-10 rounded-full" alt="" />
            {/* <Icon icon={"solar:bell-bold"} className="text-[30px] " /> */}
          </Link>
          <div className=" bg-[#F0F3F4]  ml-2 flex items-center rounded-full w-9 sm:w-[240px] p-1  relative">
            <MagnifyingGlassIcon className="h-[18px] ml-1 font-bold  z-50 text-[#3e3f41]" />
            <input
              type="text"
              placeholder="Search Facebook"
              className="placeholder-[#64676A] w-full hidden sm:inline bg-transparent rounded-full absolute font-normal text-sm inset-0 focus:ring-2 focus:ring-offset-1 pl-7 outline-none p-1"
            />
          </div>
        </div>
        <div className="flex  space-x-2 px-2">
          {icons.map((icon, index) => (
            <NavIcons
              key={index}
              // clicked={clickedStates[index]}
              icon={icon}
              id={index}
              // onClick={(e) => checking(e, index)}
            />
          ))}
          {/* <button
            className={` focus:text-[#1876F1] focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2    outline-none rounded-full bg-[#E4E7EA] p-[6px] cursor-pointer active:scale-95`}
          >
            <div className={` w-full`}>
              <div
                tabIndex={0}
                className={`flex items-center focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2  outline-none hover:bg-gray-500  hover:bg-opacity-20 cursor-pointer rounded-l-lg px-2 ml-2 py-2  `}
              >
                <img
                  src={session ? session?.photoURL : "/facebook.png"}
                  className={`p-1 -ml-1 w-11 h-11 rounded-full`}
                />
              </div>
            </div>
          </button> */}
          <button
            className=" rounded-full focus-visible:ring-[#1876F1] focus-visible:ring-2 focus-visible:ring-offset-2  outline-none "
            tabIndex={0}
            onClick={() => {
              // signOut(auth).then((response) => console.log(response));
              sessionStorage.removeItem("Token");
              // router.push("/login");

              router.reload();
              // console.log("asasd");
            }}
          >
            <img
              src={` ${session.photoURL ? session?.photoURL : "/facebook.png"}`}
              className="h-10 rounded-full"
              alt=""
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
