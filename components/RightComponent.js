import React from "react";
import NameComponent from "./NameComponent";
import Suggestions from "./Suggestions";

function RightComponent() {
  return (
    <div className="hidden md:block">
      <NameComponent />
      <Suggestions />
    </div>
  );
}

export default RightComponent;
