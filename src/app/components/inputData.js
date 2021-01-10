import React from "react";

const InputSalud = (props) => {
  return (
    <div id="float-label">
      <input type={props.type} name={props.name} ref={props.refer} readOnly />

      <label className="Active" htmlFor={props.name}>
        {props.placeholder}
      </label>
    </div>
  );
};

export default InputSalud;
