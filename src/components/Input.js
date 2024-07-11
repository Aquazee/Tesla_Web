import React from "react";

const Input = ({ register, className, style, name, error, showError, errorMessage, ...rest }) => {
  return (
    <>
      <input
        {...register(name)}
        {...rest}
        className={`${className}${error ? ' border border-danger' : ''}`}
        autoComplete="off"
        style={{ ...styles, style }}
      />
      {showError && <span className='float-left text-danger text-align-left'>{errorMessage}</span>}
    </>
  );
}

const styles = {
  borderRadius: '6px !important',
  width: '100%'
  /*  border: "1px solid #cad1d7" */
};

export default Input;
