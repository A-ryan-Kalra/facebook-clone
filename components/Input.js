import React, { useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { FaceSmileIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Picker from "emoji-picker-react";

function Input() {
  const filePickerRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [takeInput, setTakeInput] = useState(false);
  const textInputRef = useRef();
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  const inputFunc = () => {
    setTakeInput(true);
    document.body.style.overflow = "hidden";
    // document.activeElement?.blur();
    setTimeout(() => {
      // console.log(textInputRef);
      textInputRef.current.focus();
    }, 100);
  };
  function addEmoji(e) {
    setInput(input + e.emoji);
  }

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
              onClick={inputFunc}
              className="w-full min-h-[40px] rounded-full bg-gray-200/60 hover:bg-gray-300/60 p-2 placeholder-[#696A6E] cursor-pointer"
              id=""
            />
            {takeInput && (
              <div
                className="fixed inset-0 bg-white bg-opacity-70"
                onClick={() => {
                  setTakeInput(null);
                  document.body.style.overflow = "auto";
                  setShowEmojis(false);
                }}
              >
                <div
                  className="relative w-[350px] lg:w-[500px] rounded-lg h-[430px] top-[50%] mx-auto z-50 translate-y-[-50%] bg-[#FEFFFE] shadow-lg  "
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowEmojis(false);
                  }}
                >
                  <div
                    className="absolute right-4 flex items-center  rounded-full top-3 justify-center cursor-pointer h-9 w-9 "
                    onClick={() => {
                      setTakeInput(null);
                      document.body.style.overflow = "auto";
                    }}
                  >
                    <XMarkIcon className="h-9  bg-[#E5E6EA] p-1 rounded-full hover:bg-gray-300 text-[#616971]" />
                  </div>
                  <div className="text-center flex justify-center items-center text-xl font-semibold  border-b border-b-gray-300 pt-1 h-14">
                    Create post
                  </div>
                  <div className="flex items-center space-x-3 px-2 py-2 ">
                    <img
                      src="/favicon.ico"
                      className="cursor-pointer  hover:opacity-80   rounded-full ml-2 mt-2 h-10 w-10"
                      alt=""
                    />
                    <span className="flex-col flex mt-1 space-y-1 ">
                      <span className="text-sm font-bold">Username</span>
                      <span className="h-[22px] flex items-center  cursor-pointer justify-between p-1 w-20 rounded-md bg-[#E5E6EA]">
                        <Icon
                          icon="fa-solid:globe-americas"
                          className="w-[11px] font-bold h-[11px]"
                        />
                        <span className="text-xs font-bold">Public</span>
                        <Icon
                          icon="eva:arrow-down-fill"
                          className="h-[14px] w-[14px]"
                        />
                      </span>
                    </span>
                  </div>
                  <div className="flex-col flex px-1">
                    <textarea
                      className="p-3 min-h-[128px] placeholder:text-2xl placeholder:text-[#65676B] outline-none  text-2xl  max-h-[129px] overflow-auto"
                      placeholder="What's on your mind?"
                      ref={textInputRef}
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    ></textarea>
                    {!selectedFile && (
                      <div>
                        <div className="overflow-y-scroll max-h-40 ">
                          <img
                            src={selectedFile}
                            className=" overflow-hidden object-cover "
                            alt=""
                          />
                        </div>
                      </div>
                    )}
                    <div className="flex p-1 px-2 items-center justify-between">
                      <img src="/color.png" className="h-10" alt="" />
                      <FaceSmileIcon
                        className="h-7 text-[#91959A] cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowEmojis(!showEmojis);
                        }}
                      />
                      {showEmojis && (
                        <div
                          className={`left-[10px] absolute lg:top-[-100px] top-[288px] lg:left-[400px] `}
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Picker
                            onEmojiClick={(e) => addEmoji(e)}
                            theme="dark"
                            emojiStyle="google"
                            height={360}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between border-2 h-[60px] rounded-lg m-2">
                      <span className="cursor-pointer font-semibold px-4  -py-1 text-sm">
                        Add to your post
                      </span>
                      <div className="flex items-center gap-1 lg:w-[50%] justify-between">
                        <div
                          className="icon"
                          onClick={() => filePickerRef.current.click()}
                        >
                          <Icon
                            icon="fa-solid:photo-video"
                            className="lg:w-7 lg:h-7 w-4 h-4 text-[#64BF62] inline-block "
                          />
                        </div>
                        <div className="icon">
                          <Icon
                            icon="fa-solid:user-tag"
                            className="lg:w-7 lg:h-7 w-4 h-4 text-[#1677F3] inline-block"
                          />
                        </div>
                        <div
                          className="icon"
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowEmojis(!showEmojis);
                          }}
                        >
                          <Icon
                            icon="pajamas:smiley"
                            className="text-[#F7B828] lg:w-7 lg:h-7 w-4 h-4 inline-block"
                          />
                        </div>
                        <div className="icon">
                          <Icon
                            icon="mdi:location"
                            className="lg:w-7 lg:h-7 w-4 h-4 text-[#EB503A] inline-block"
                          />
                        </div>
                        <div className="icon">
                          <Icon
                            icon="ph:gif-fill"
                            className="lg:w-7 lg:h-7 w-4 h-4 text-[#5DBCA6] inline-block"
                          />
                        </div>
                        <div className="icon">
                          <Icon
                            icon="ic:baseline-more-horiz"
                            className="lg:w-7 lg:h-7 w-4 h-4 text-[#616771] inline-block"
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      className="bg-[#1B74E4] text-[#FEFFFE] h-9 rounded-lg font-semibold m-2 hover:bg-[#1A6FD8] disabled:cursor-not-allowed disabled:bg-[#E5E6EA]"
                      disabled={!selectedFile && !input.trim()}
                    >
                      Post
                    </button>
                  </div>
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
