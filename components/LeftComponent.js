import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

function LeftComponent(props) {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Stories />
      <Posts details={props.details}/>
    </div>
  );
}

export default LeftComponent;
