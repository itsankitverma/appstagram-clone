import {
  ShareIcon,
  DotsHorizontalIcon,
  HeartIcon,
  ChatAlt2Icon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import ImageOne from "../assets/image1.png";
import ImageTwo from "../assets/image2.png";
import ImageThree from "../assets/image3.png";

function Posts(props) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="mt-5 flex flex-col gap-3 w-full">
        <div className="flex justify-between items-center px-4 ">
          <div className="flex items-center gap-2 ">
            <div className="h-10 w-10 bg-gray-700 rounded-full"></div>
            <p className="text-md md:text-xs">{props.details.username}</p>
          </div>
          <div>
            <DotsHorizontalIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="w-96 h-full flex flex-col gap-1">
          <Image src={ImageThree} alt="" />
          <div className="flex justify-between p-1 px-4">
            <div className="flex gap-2">
              <HeartIcon className="h-7 w-7 cursor-pointer" />
              <ChatAlt2Icon className="h-7 w-7 cursor-pointer" />
              <ShareIcon className="h-7 w-7 cursor-pointer" />
            </div>
            <div>
              <BookmarkIcon className="h-7 w-7 cursor-pointer" />
            </div>
          </div>
          <p className="text-md md:text-xs px-4">12,846 likes</p>
          <p className="text-md md:text-xs px-4">
            <b>{props.details.username}</b> Follow @stockmarket.edges to learn
            and earn from stock market . Ms Priya help people to achieve their
            dream you must... more
          </p>
          <p className="text-md md:text-xs px-4">
            <b>3h ago</b>
          </p>
          <div className="flex items-center gap-3 px-4">
            <div>
              <EmojiHappyIcon className="h-5 w-5 ic cursor-pointer" />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name=""
                id=""
                className="w-72 p-2 text-md md:text-xs"
                placeholder="add a comment"
              />
              <button className="text-md md:text-xs">Post</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
