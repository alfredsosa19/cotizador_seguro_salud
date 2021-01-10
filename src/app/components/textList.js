import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextList = (props) => {
  return (
    <div className="text_list">
      <FontAwesomeIcon className="icon" icon={props.icon} color="#ffffff" />
      <p>{props.text}</p>
    </div>
  );
};

export default TextList;
