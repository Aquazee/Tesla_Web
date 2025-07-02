import React from "react";
import InputRadio from "./InputRadio";
import './components.css'

const InputRadioGroup = ({
  label,
  name,
  register,
  options = [],
  className = ""
}) => {
  return (
    <div className={"mb-3 col-6 " + `radio-group-${label.split(' ').join('-').toLowerCase()} ` + className}>
      <label>{label}</label>
      <div className="d-flex justify-content-between mt-2">
        {options.map((option, index) => (
          <InputRadio key={option.label + index.toString()} {...option} name={name} register={register}/>
        ))}
      </div>
    </div>
  );
};

export default InputRadioGroup;
