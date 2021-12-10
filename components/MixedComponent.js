import React from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

function MixedComponent() {
  return (
    <div className="flex  justify-center gap-16 pt-28 ">
      <LeftComponent />
      <RightComponent />
    </div>
  );
}

export default MixedComponent;
