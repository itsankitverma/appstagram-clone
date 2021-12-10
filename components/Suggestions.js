import React from "react";

function Suggestions() {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex justify-between pt-4">
        <p className="text-xs">
          <b>Suggestions For You</b>
        </p>
        <button className="text-xs">See All</button>
      </div>
      <div className="flex gap-12 items-center justify-center">
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
          <div className="flex flex-col gap-[1px]">
            <p className="text-xs cursor-pointer">itsankitverma204</p>
            <p className="text-xs ">Ankit Verma</p>
          </div>
        </div>
        <div>
          <button className="text-xs text-blue-400">Follow</button>
        </div>
      </div>
      <div className="flex gap-12 items-center justify-center">
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
          <div className="flex flex-col gap-[1px]">
            <p className="text-xs cursor-pointer">itsankitverma204</p>
            <p className="text-xs ">Ankit Verma</p>
          </div>
        </div>
        <div>
          <button className="text-xs text-blue-400">Follow</button>
        </div>
      </div>
      <div className="flex gap-12 items-center justify-center">
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
          <div className="flex flex-col gap-[1px]">
            <p className="text-xs cursor-pointer">itsankitverma204</p>
            <p className="text-xs ">Ankit Verma</p>
          </div>
        </div>
        <div>
          <button className="text-xs text-blue-400">Follow</button>
        </div>
      </div>
    </div>
  );
}

export default Suggestions;
