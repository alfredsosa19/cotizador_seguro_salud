import React from "react";

const InputText = (props) => {
  return (
    <div id="float-label">
      <input
        type={props.type}
        name={props.name}
        ref={props.refer}
        autoComplete="off"
      />
      <label className={props.valid ? "Active" : ""} htmlFor={props.name}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default InputText;
