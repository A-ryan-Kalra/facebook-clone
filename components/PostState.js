import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { postState } from "../atoms/modalAtoms";
import Post from "./Post";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Picker from "emoji-picker-react";

export default function PostState({ id }) {
  const [postStated, setPostStated] = useRecoilState(postState);
  const [post, setPost] = useState([]);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");

  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snapshot) => {
        // console.log(snapshot);
        setPost(snapshot.data());
        // key = post.id;
      }),
    [db]
  );
  console.log(input);
  return (
    <div
      className="inset-0 bottom-0 fixed bg-white/70"
      onClick={() => {
        document.body.style.overflow = "auto";
        setPostStated(!postState);
        setShowEmojis(!showEmojis);
      }}
    >
      <div
        className="relative top-[50%] translate-y-[-50%] max-w-[700px] max-h-[600px] m-auto rounded-lg border-2 shadow-lg  overflow-y-auto"
        onClick={(e) => {
          e.stopPropagation();
          setShowEmojis(false);
        }}
      >
        <div className="bg-[#FEFEFF] sticky top-0 h-16 text-center text-xl flex items-center justify-center font-semibold border-b-2 ">
          {post.username} Post's
        </div>
        <div className="-my-[10px]">{<Post post={post} id={id} />}</div>
        <div className="bg-[#FEFEFF] sticky -bottom-1  h-16  text-xl flex items-center justify-between font-semibold ">
          <div className="py-2 px-2 rounded-full  ">
            <img
              src={post.userimage}
              className="rounded-full w-11 h-10 object-cover"
              alt=""
            />
          </div>
          <div
            className="w-full rounded-full py-2 "
            onClick={(e) => e.stopPropagation()}
          >
            <input
              type="text"
              className="bg-[#F1F3F5] w-full h-10 rounded-full p-2 placeholder:text-sm font-normal placeholder:text-[#64666B] outline-none text-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write a comment"
            />
          </div>
          <div className="flex p-1 items-center justify-between">
            <FaceSmileIcon
              className="h-7 text-[#91959A] cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setShowEmojis(!showEmojis);
              }}
            />
          </div>
        </div>
        {showEmojis && (
          <div
            className={`absolute  top-[200px]  right-[30px] `}
            onClick={(e) => e.stopPropagation()}
          >
            <Picker
              onEmojiClick={(e) => setInput(input + e.emoji)}
              theme="dark"
              emojiStyle="google"
              height={360}
            />
          </div>
        )}
      </div>
    </div>
  );
}
