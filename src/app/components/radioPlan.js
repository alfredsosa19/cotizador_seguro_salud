import React from "react";

export const RadioPlan = (props) => {
  return (
    <label htmlFor={props.plan} id="id-checkplan" className="pointer">
      <input
        id={props.plan}
        name={props.name}
        value={props.plan}
        className="pointer"
        type="radio"
        ref={props.refer}
      />
      <p className="plan pointer">{props.plan}</p>
      <span className="pointer">S/</span>
      <span className="precioPlan pointer">{props.precioPlan}</span>
      <p className="plan pointer">{props.typePlan}</p>
    </label>
  );
};

export default RadioPlan;
