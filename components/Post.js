import React from "react";
import { useRecoilState } from "recoil";
import { postState, sessionState } from "../atoms/modalAtoms";
import Moment from "react-moment";
import { Icon } from "@iconify/react";

function Post({ post }) {
  //   const [session, setSession] = useRecoilState(sessionState);

  console.log(post);
  return (
    <div className="flex-col flex bg-[#FEFEFF] shadow-lg rounded-lg overflow-hidden my-2 ">
      <div className="flex justify-between items-center">
        <div className="flex p-3">
          <img src={post.userimage} className="h-11 rounded-full" alt="" />

          <div className="flex-col flex ml-2 -mt-[1px]  ">
            <span className="hover:underline cursor-pointer inline-block -mb-[3px] font-semibold">
              {post.username}
            </span>
            <div className="flex items-center  gap-1 text-[#757578]">
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
        <p className="px-3  -mt-1 py-2">{post.text}</p>
        <img
          src={post.img}
          className="max-h-[400px]  w-full object-cover"
          alt=""
        />
      </div>
    </div>
  );
}

export default Post;