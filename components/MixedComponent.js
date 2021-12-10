import React from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

function MixedComponent() {
  return (
    <div className="flex justify-center md:gap-16 md:pt-28 pt-20">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default MixedComponent;
