import React from "react";
import { Icon } from "@iconify/react";

function Input() {
  return (
    <div className=" mt-1 shadow-lg rounded-lg border-2 bg-[#FEFEFF ">
      <div className="flex flex-col mx-auto w-11/12">
        <div className="flex items-center w-full   justify-start border-b border-gray-300  py-3">
          <img
            src="/facebook.png"
            className="w-10 h-10 cursor-pointer"
            alt=""
          />
          <div className="flex items-center w-11/12 ml-2 rounded-full">
            <input
              type="text"
              placeholder="What's on your mind?"
              className="w-full min-h-[40px] rounded-full bg-gray-200/60 hover:bg-gray-300 p-2 placeholder-[#696A6E] cursor-pointer"
              id=""
            />
          </div>
        </div>
        <div className="flex  items-center justify-between py-3">
          <div className="flex justify-center items-center  cursor-pointer w-full p-2 rounded-lg  hover:bg-gray-400/20 space-x-2">
            <Icon icon="ri:live-fill" className="w-7 h-7 inline-block" />
            <span className="text-sm font-semibold whitespace-nowrap">
              Live video
            </span>
          </div>
          <div className="flex justify-center items-center  cursor-pointer w-full p-2 rounded-lg  hover:bg-gray-400/20 space-x-2">
            <Icon
              icon="fa-solid:photo-video"
              className="w-7 h-7 inline-block"
            />
            <span className="text-sm font-semibold ">Photo/video</span>
          </div>

          <div className=" cursor-pointer w-full  justify-center hidden lg:flex p-2 rounded-lg  hover:bg-gray-400/20 items-center space-x-2">
            <Icon icon="pajamas:smiley" className="w-7 h-7 inline-block" />
            <span className="text-sm font-semibold">Feeling/activity</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
