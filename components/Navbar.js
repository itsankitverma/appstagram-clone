import React from "react";
import AppstagramLogo from "../assets/appstagram.jpg";
import Image from "next/image";
import { HomeIcon } from "@heroicons/react/solid";
import {
  ChatAlt2Icon,
  PlusCircleIcon,
  ExternalLinkIcon,
  HeartIcon,
} from "@heroicons/react/outline";
import ProfilePicture from "../assets/profile.jpeg";

function Navbar() {
  return (
    <div className="fixed w-full bg-gray-50 z-10">
      <div className="flex items-center md:justify-evenly md:px-10 py-5 gap-1 md:gap-0 justify-between px-4">
        <Image
          src={AppstagramLogo}
          alt="Appstagram"
          width={120}
          height={30}
          className="cursor-pointer"
        />
        <div>
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className="px-3 py-1 border-[1px] border-gray-500 rounded-lg hidden md:block"
          />
        </div>
        <div className="flex gap-3 items-center">
          <HomeIcon className="w-6 cursor-pointer" />
          <ChatAlt2Icon className="w-6 cursor-pointer" />
          <PlusCircleIcon className="w-6 cursor-pointer" />
          <ExternalLinkIcon className="w-6 cursor-pointer" />
          <HeartIcon className="w-6 cursor-pointer" />
          <div className="h-6 w-6">
            <Image
              className="w-5 h-5 bg-slate-900 rounded-full"
              src={ProfilePicture}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
