import React from "react";
import InputRadio from "./InputRadio";
import './components.css'

const InputRadioGroup = ({
  label,
  options = [],
  className = ""
}) => {
  return (
    <div className={"mb-3 col-6 " + `radio-group-${label.split(' ').join('-').toLowerCase()} ` + className}>
      <label>{label}</label>
      <div className="d-flex">
        {options.map((option, index) => (
          <InputRadio key={option.label + index.toString()} {...option} />
        ))}
      </div>
    </div>
  );
};

export default InputRadioGroup;
