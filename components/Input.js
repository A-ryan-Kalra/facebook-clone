import React, { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { XMarkIcon } from "@heroicons/react/24/solid";

function Input() {
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [takeInput, setTakeInput] = useState(false);
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  return (
    <div className=" mt-1 shadow-lg rounded-lg border-2 bg-[#FEFEFF] ">
      <div className="flex flex-col mx-auto w-11/12">
        <div className=" flex items-center w-full   justify-start border-b border-gray-300  py-3">
          <img
            src="/facebook.png"
            className="w-10 h-10 cursor-pointer"
            alt=""
          />
          <div className="flex items-center w-11/12 ml-2 rounded-full">
            <input
              type="text"
              placeholder="What's on your mind?"
              onClick={() => setTakeInput(true)}
              className="w-full min-h-[40px] rounded-full bg-gray-200/60 hover:bg-gray-300/60 p-2 placeholder-[#696A6E] cursor-pointer"
              id=""
            />
            {takeInput && (
              <div
                className="fixed inset-0 bg-white bg-opacity-70"
                onClick={() => setTakeInput(null)}
              >
                <div
                  className="relative w-[350px] lg:w-[500px] rounded-lg h-[430px] top-[50%] mx-auto z-50 translate-y-[-50%] bg-[#FEFEFF] shadow-lg  "
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="absolute right-1 top-1 flex items-center justify-center cursor-pointer h-8 w-8 ">
                    <XMarkIcon className="h-7  bg-gray-400 rounded-full" />
                  </div>
                  <div className="text-center">Create post</div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex  items-center justify-between py-3">
          <div className="flex justify-center items-center  cursor-pointer w-full p-2 rounded-lg  hover:bg-gray-400/20 space-x-2">
            <Icon
              icon="ri:live-fill"
              className="text-[#EB4947] w-7 h-7 inline-block"
            />
            <span className="text-sm font-bold text-[#65666A] whitespace-nowrap">
              Live video
            </span>
          </div>
          <div
            className="flex justify-center items-center  cursor-pointer w-full p-2 rounded-lg  hover:bg-gray-400/20 space-x-2"
            onClick={() => filePickerRef.current.click()}
          >
            <Icon
              icon="fa-solid:photo-video"
              className="w-7 h-7 text-[#64BF62] inline-block"
            />
            <input
              type="file"
              onChange={(e) => addImageToPost(e)}
              hidden
              ref={filePickerRef}
            />
            <span className="text-sm font-bold text-[#65666A] ">
              Photo/video
            </span>
          </div>

          <div className=" cursor-pointer w-full  justify-center hidden lg:flex p-2 rounded-lg  hover:bg-gray-400/20 items-center space-x-2">
            <Icon
              icon="pajamas:smiley"
              className="text-[#F7B828] w-7 h-7 inline-block"
            />
            <span className="text-sm font-bold text-[#65666A]">
              Feeling/activity
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
