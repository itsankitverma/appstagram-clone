import React from "react";
import Posts from "./Posts";
import Stories from "./Stories";

function LeftComponent() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Stories />
      <Posts />
    </div>
  );
}

export default LeftComponent;
