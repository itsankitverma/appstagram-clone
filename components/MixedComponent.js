import React from "react";
import LeftComponent from "./LeftComponent";
import RightComponent from "./RightComponent";

function MixedComponent(props) {
  return (
    <div className="flex justify-center md:gap-16 md:pt-28 pt-20">
      <LeftComponent details={props.details}/>
      <RightComponent details={props.details}/>
    </div>
  );
}

export default MixedComponent;
