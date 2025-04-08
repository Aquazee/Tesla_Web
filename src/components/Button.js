import React from "react";

const Button = ({ value, className, type = "button", style, ...rest }) => {
  let tempStyle = {};
  if (className === "btn-link") {
    tempStyle = styles.link;
  }
  return (
    <button
      {...rest}
      aria-label={value}
      type={type}
      className={`btn ${className}`}
      autoComplete="off"
      style={{ ...styles, style }}
    >
      <span>{value}</span>
    </button>
  );
};

const styles = {
  link: {},
};

export default Button;
