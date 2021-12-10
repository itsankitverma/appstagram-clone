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

function Posts() {
  return (
    <div className="relative left-5 md:left-0 px-2">
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 bg-gray-700 rounded-full"></div>
            <p className="text-xs">itsankitverma</p>
          </div>
          <div>
            <DotsHorizontalIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="w-96 h-full flex flex-col gap-1">
          <Image src={ImageOne} alt="" />
          <div className="flex justify-between p-1">
            <div className="flex gap-1">
              <HeartIcon className="h-6 w-6 cursor-pointer" />
              <ChatAlt2Icon className="h-6 w-6 cursor-pointer" />
              <ShareIcon className="h-6 w-6 cursor-pointer" />
            </div>
            <div>
              <BookmarkIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
          <p className="text-xs">12,846 likes</p>
          <p className="text-xs">
            <b>itsankitverma</b> Follow @stockmarket.edges to learn and earn
            from stock market . Ms Priya help people to achieve their dream you
            must... more
          </p>
          <p className="text-xs">3h ago</p>
          <div className="flex items-center gap-3">
            <div>
              <EmojiHappyIcon className="h-5 w-5 ic cursor-pointer" />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name=""
                id=""
                className="w-80 p-2 text-xs"
                placeholder="add a comment"
              />
              <button className="text-xs">Post</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 bg-gray-700 rounded-full"></div>
            <p className="text-xs">itsankitverma</p>
          </div>
          <div>
            <DotsHorizontalIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="w-96 h-full flex flex-col gap-1">
          <Image src={ImageOne} alt="" />
          <div className="flex justify-between p-1">
            <div className="flex gap-1">
              <HeartIcon className="h-6 w-6 cursor-pointer" />
              <ChatAlt2Icon className="h-6 w-6 cursor-pointer" />
              <ShareIcon className="h-6 w-6 cursor-pointer" />
            </div>
            <div>
              <BookmarkIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
          <p className="text-xs">12,846 likes</p>
          <p className="text-xs">
            <b>itsankitverma</b> Follow @stockmarket.edges to learn and earn
            from stock market . Ms Priya help people to achieve their dream you
            must... more
          </p>
          <p className="text-xs">3h ago</p>
          <div className="flex items-center gap-3">
            <div>
              <EmojiHappyIcon className="h-5 w-5 ic cursor-pointer" />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name=""
                id=""
                className="w-80 p-2 text-xs"
                placeholder="add a comment"
              />
              <button className="text-xs">Post</button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 bg-gray-700 rounded-full"></div>
            <p className="text-xs">itsankitverma</p>
          </div>
          <div>
            <DotsHorizontalIcon className="h-4 w-4 text-gray-500" />
          </div>
        </div>
        <div className="w-96 h-full flex flex-col gap-1">
          <Image src={ImageOne} alt="" />
          <div className="flex justify-between p-1">
            <div className="flex gap-1">
              <HeartIcon className="h-6 w-6 cursor-pointer" />
              <ChatAlt2Icon className="h-6 w-6 cursor-pointer" />
              <ShareIcon className="h-6 w-6 cursor-pointer" />
            </div>
            <div>
              <BookmarkIcon className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
          <p className="text-xs">12,846 likes</p>
          <p className="text-xs">
            <b>itsankitverma</b> Follow @stockmarket.edges to learn and earn
            from stock market . Ms Priya help people to achieve their dream you
            must... more
          </p>
          <p className="text-xs">3h ago</p>
          <div className="flex items-center gap-3">
            <div>
              <EmojiHappyIcon className="h-5 w-5 ic cursor-pointer" />
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                name=""
                id=""
                className="w-80 p-2 text-xs"
                placeholder="add a comment"
              />
              <button className="text-xs">Post</button>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Posts;
