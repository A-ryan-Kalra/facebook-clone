import React from "react";
import Moment from "react-moment";

function Comments({ comment }) {
  // console.log(comment);
  return (
    <div className="p-3 flex items-center">
      <div className="cursor-pointer ">
        <img src={comment.userimage} className="h-11 rounded-full" alt="" />
      </div>

      <div className="flex flex-col text-sm ml-2 ">
        <div className="flex-col flex bg-[#F1F2F4] rounded-xl p-2  ">
          <p className="font-semibold hover:underline cursor-pointer">
            {comment.username}
          </p>
          <p>{comment.text}</p>
        </div>
        <div className="flex w-[110px] items-center justify-between">
          <p className="text-[11px] hover:underline cursor-pointer">Like</p>
          <p className="text-[11px] hover:underline cursor-pointer">Reply</p>

          <p className=" hover:underline cursor-pointer">
            <Moment className="text-[11px] flex" format="h:mm A">
              {comment?.timestamp?.toDate()}
            </Moment>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comments;
