import React from "react";

const InputRadio = ({ label, name, selected, value, register }) => {
  return (
    <div className="form-check">
      <input
        className="form-check-input"
        type="radio"
        name={name}
        {...register(name)}
        id={label.toLowerCase()}
        value={value}
        // checked={value==}
        // onChange={() => console.log('clicked ' + label)}
      />
      <label className="form-check-label" htmlFor={label.toLowerCase()}>
        {label}
      </label>
    </div>
  );
};

export default InputRadio;
