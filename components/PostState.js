import React, { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { postState, sessionState } from "../atoms/modalAtoms";
import Post from "./Post";
import {
  addDoc,
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import { FaceSmileIcon } from "@heroicons/react/24/outline";
import Picker from "emoji-picker-react";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Comments from "./Comments";

export default function PostState({ id }) {
  const [postStated, setPostStated] = useRecoilState(postState);
  const [post, setPost] = useState([]);
  const [showEmojis, setShowEmojis] = useState(false);
  const [input, setInput] = useState("");
  const textInput = useRef();
  const [placeholder, setPlaceHolder] = useState(true);
  const [session, setSession] = useRecoilState(sessionState);
  const [comments, setComments] = useState([]);
  useEffect(
    () =>
      onSnapshot(doc(db, "posts", id), (snapshot) => {
        // console.log(snapshot);
        setPost(snapshot.data());
        // key = post.id;
      }),
    [db]
  );

  async function sendComment() {
    await addDoc(collection(db, "posts", id, "comments"), {
      username: session?.displayName ? session?.displayName : session.email,
      usermail: session.email,
      userimage: session?.photoURL ? session?.photoURL : "/facebook.png",
      text: input,
      timestamp: serverTimestamp(),
    });
  }

  useEffect(() => {
    onSnapshot(
      query(
        collection(db, "posts", id, "comments"),
        orderBy("timestamp", "asc")
      ),
      (snapshot) => {
        setComments(snapshot.docs);
      }
    );
  }, [db]);

  // console.log(session);
  // console.log(comments[0]?.data());
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
        className="relative top-[50%] translate-y-[-50%] max-w-[700px] max-h-[600px] m-auto rounded-lg border-2 shadow-lg bg-white overflow-y-auto"
        onClick={(e) => {
          e.stopPropagation();
          setShowEmojis(false);
        }}
      >
        <div className="bg-[#FEFEFF] sticky top-0 h-16 text-center text-xl flex items-center justify-center font-semibold border-b-2 ">
          {post.username}'s Post
        </div>

        <div className="-my-[10px] ">{<Post post={post} id={id} />}</div>
        {comments.length > 0 &&
          comments?.map((comment, index) => (
            <Comments comment={comment.data()} key={index} />
          ))}
        <div className="bg-[#FEFEFF] sticky bottom-0   break-words  text   p-2 max-h-[300px] outline-none text-sm  flex items-center justify-between font-semibold overflow-hidden">
          <div className="py-2 px-2 rounded-full  ">
            <img
              src={session.photoURL ? session.photoURL : "/facebook.png"}
              className="rounded-full w-11 h-10 object-cover"
              alt=""
            />
          </div>

          <div className="w-full max-w-full max-h-[300px] break-words flex-col justify-between rounded-t-lg p-2  outline-none text-sm overflow-y-auto  py-2">
            <div
              className="bg-[#F1F3F5] relative font-normal break-words  rounded-t-lg p-2  outline-none text-sm "
              contentEditable="true"
              ref={textInput}
              onInput={(e) => {
                setInput(e.target.textContent);
              }}
              onFocus={() => setPlaceHolder(false)}
              onBlur={() => setPlaceHolder(input.trim() === "")}
            >
              {placeholder && (
                <p className="bg-black absolute top-2 left-1 outline-none h-0 text-start text-[16px] font-normal text-[#64666B]">
                  Write a comment...
                </p>
              )}
            </div>
            <div
              className="bg-[#F1F3F5] h-10 rounded-b-lg  "
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-2  items-end flex justify-between h-full ">
                <FaceSmileIcon
                  className="h-6 text-[#91959A] cursor-pointer"
                  onClick={(e) => {
                    setShowEmojis(!showEmojis);
                  }}
                />
                <button
                  disabled={!input.trim()}
                  className=" text-[#0E87EB] active:scale-90 disabled:text-[#91959A] cursor-pointer"
                  onClick={() => {
                    sendComment();
                    // setPostStated(!postStated);
                    textInput.current.textContent = "";
                    setPlaceHolder(true);
                    setInput("");
                  }}
                >
                  <PaperAirplaneIcon className="h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {showEmojis && (
          <div
            className={`absolute  top-[200px]  right-[30px] `}
            onClick={(e) => e.stopPropagation()}
          >
            <Picker
              onEmojiClick={(e) => {
                setInput(input + e.emoji);
                textInput.current.textContent = input + e.emoji;
              }}
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
