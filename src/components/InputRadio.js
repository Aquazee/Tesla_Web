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
        value={label}
        // checked={value==}
        // onChange={() => console.log('clicked ' + label)}
      />
      <label className="form-check-label ps-1" htmlFor={label.toLowerCase()}>
        {label}
      </label>
    </div>
  );
};

export default InputRadio;
