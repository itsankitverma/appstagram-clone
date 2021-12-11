import React from "react";
import NameComponent from "./NameComponent";
import Suggestions from "./Suggestions";

function RightComponent(props) {
  return (
    <div className="hidden md:block">
      <NameComponent details={props.details}/>
      <Suggestions />
    </div>
  );
}

export default RightComponent;
