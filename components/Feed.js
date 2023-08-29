import React, { useEffect, useState } from "react";
import Input from "./Input";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import Post from "./Post";
import { useRecoilState } from "recoil";
import { postState } from "../atoms/modalAtoms";

function Feed() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPost(snapshot.docs);
      }
    );
  }, [db]);
  // console.log(post[0].data());
  // console.log(Object.keys(post).length);

  return (
    <div className=" sm:ml-[125px] px-2 sm ml-[65px] lg:ml-[460px] flex-grow  max-w-xl  bg-[#F0F2F5]  ">
      <Input />
      {post?.map((post, index) => (
        <Post key={index} id={post.id} post={post.data()} />
      ))}
    </div>
  );
}

export default Feed;
