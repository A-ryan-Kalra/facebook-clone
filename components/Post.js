import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { sessionState, postState, postStateId } from "../atoms/modalAtoms";
import Moment from "react-moment";
import { Icon } from "@iconify/react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import PostState from "./PostState";

function Post({ post, id }) {
  const [session, setSession] = useRecoilState(sessionState);

  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [postStated, setPostStated] = useRecoilState(postState);
  const [key, setKey] = useRecoilState(postState);
  const [keyId, setKeyId] = useRecoilState(postStateId);
  useEffect(
    () =>
      onSnapshot(collection(db, "posts", id, "likes"), (snapshot) => {
        setLikes(snapshot.docs);
        // console.log(likes);
      }),
    [db, id]
  );
  // console.log(likes.length);

  useEffect(
    () => setLiked(likes.findIndex((like) => like.id === session.uid) !== -1),
    [likes]
  );
  // console.log(liked);
  async function likePost() {
    if (liked) {
      await deleteDoc(doc(db, "posts", id, "likes", session.uid));
    } else {
      await setDoc(doc(db, "posts", id, "likes", session.uid), {
        username: session.displayName,
        usermail: session.email,
      });
    }
  }
  return (
    <div className="flex-col flex bg-[#FEFEFF] shadow-lg rounded-lg overflow-hidden my-2 ">
      <div className="flex justify-between items-center">
        <div className="flex p-3">
          <img
            src={post?.userimage}
            className="h-11 rounded-full cursor-pointer"
            alt=""
          />

          <div className="flex-col flex ml-2 -mt-[1px]  ">
            <span className="hover:underline cursor-pointer inline-block -mb-[3px] font-semibold">
              {post?.username}
            </span>
            <div className="flex items-center cursor-default gap-1 text-[#757578]">
              <Moment
                fromNow
                //   format="hh:mm"
                className="text-xs  hover:underline  inline-block "
              >
                {post?.timestamp?.toDate()}
              </Moment>
              {" · "}
              <Icon
                icon="fa-solid:globe-americas"
                className="w-[12px] font-bold h-[12px]"
              />
            </div>
          </div>
        </div>

        <div className="icon m-2">
          <Icon
            icon="ic:baseline-more-horiz"
            className="lg:w-7 lg:h-7 w-4 h-4 text-[#616771] inline-block"
          />
        </div>
      </div>
      <div>
        <p className="px-3  -mt-1 py-2">{post?.text}</p>
        <img
          src={post?.img}
          className="max-h-[400px]  w-full object-cover"
          alt=""
        />
      </div>
      <div className="p-2 flex items-center justify-between">
        <div className="flex  items-center icon">
          <div
            onClick={() => {
              setLiked(!liked);
              likePost();
            }}
            className="px-2 cursor-pointer active:scale-90   active:skew-x-12"
          >
            {liked ? (
              <Icon
                icon="solar:chat-round-like-bold"
                className="text-fuchsia-500"
                height={25}
              />
            ) : (
              <Icon
                icon="solar:chat-round-like-linear"
                className="text-fuchsia-500"
                height={25}
              />
            )}
          </div>
          {likes.length > 0 && (
            <div className=" text-[#65666A]  hover:underline cursor-pointer">
              {likes.length}
            </div>
          )}
        </div>
        <div
          className="cursor-pointer p-1 hover:bg-[#EA4947] hover:bg-opacity-30 rounded-full "
          onClick={() => setDeleted(!deleted)}
        >
          {deleted ? (
            <Icon
              icon="mdi:delete-empty"
              height={25}
              className=" text-[#EA4947] rounded-full "
            />
          ) : (
            <Icon
              icon="mdi:delete-empty-outline"
              height={25}
              className="  rounded-full "
            />
          )}
        </div>
        <div
          className="flex items-center icon"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setPostStated(!postStated);
            setKey(id);
            setKeyId(id);
            // console.log(id);
          }}
        >
          <Icon
            icon="mingcute:comment-fill"
            className="text-[#0F87EB]"
            height={25}
          />
          {!comments.length > 0 && (
            <div className="px-2 text-[#65666A] hover:underline cursor-pointer">
              {comments.length}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Post;
