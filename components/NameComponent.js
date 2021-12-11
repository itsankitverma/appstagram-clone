import React from "react";

function NameComponent(props) {
  console.log(props);
  return (
    <div>
      <div className="flex gap-12 items-center justify-center">
        <div className="flex items-center gap-5">
          <div className="h-12 w-12 bg-gray-700 rounded-full"></div>
          <div className="flex flex-col gap-[1px]">
            <p className="text-xs cursor-pointer">{props.details.username}</p>
            <p className="text-xs ">{props.details.name}</p>
          </div>
        </div>
        <div>
          <button className="text-xs text-blue-400">Switch</button>
        </div>
      </div>
    </div>
  );
}

export default NameComponent;
