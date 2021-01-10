import React from "react";

export const CheckBox = (props) => {
  
  return (
    <div id="id-checkbox">
      <input
        id={props.check}
        name={props.name}
        className="pointer"
        type="checkbox"
        ref={props.refer}
      />
      <label htmlFor={props.check} className="terminos pointer">
        {props.label}
      </label>
    </div>
  );
};

export default CheckBox;
