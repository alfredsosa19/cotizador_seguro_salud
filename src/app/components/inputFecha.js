import React, { useState, useEffect } from "react";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const InputFecha = (props) => {
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(moment(new Date()).format("yyyy-MM-DD"));
  const [date, setDate] = useState("");

  useEffect(() => {
    if (value !== "") {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [value]);

  const onChange = (data) => {
    setDate(data);
    setValue(moment(data).format("yyyy-MM-DD"));
  };

  return (
    <div id="float-label">
      <input
        type={props.type}
        name={props.name}
        ref={props.refer}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        autoComplete="off"
      />
      {isOpen ? (
        <Calendar
          className="type_calendar"
          onChange={(date) => onChange(date)}
          value={date}
        />
      ) : null}

      <label className={isActive ? "Active" : ""} htmlFor={props.name}>
        {props.placeholder}
      </label>
      {props.name === "fechaNac" ? (
        <FontAwesomeIcon
          onClick={() => setIsOpen(!isOpen)}
          className="icon_calendar pointer"
          icon={faCalendarAlt}
          color="#2f80ed"
        />
      ) : null}
    </div>
  );
};

export default InputFecha;
