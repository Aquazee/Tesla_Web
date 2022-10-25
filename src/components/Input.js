import React from "react";

function Input({ register, ...props }) {
  return (
    <input
      id={props.id}
      type={props.type || 'text'}
      placeholder={props.placeholder}
      className={`cinput ${props.className}`}
      onChange={props.onChange}
      required={props.required}
      autoComplete="off"
      value={props.value}
      min={props.min}
      data-id={props.dataId}
      pattern={props.pattern}
      maxLength={props.maxLength}
      style={{ ...props.style, ...styles }}
    />
  );
}

const styles = {
  borderRadius: '6px !important',
  width: '100%'
  /*  border: "1px solid #cad1d7" */
};

export default Input;
