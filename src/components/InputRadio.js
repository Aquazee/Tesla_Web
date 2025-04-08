import React from "react";

const InputRadio = ({ label, selected }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name="exampleRadios"
        id={label.toLowerCase()}
        value="option2"
        checked={selected}
        onChange={() => console.log('clicked ' + label)}
      />
      <label className="form-check-label" htmlFor={label.toLowerCase()}>
        {label}
      </label>
    </div>
  );
};

export default InputRadio;
