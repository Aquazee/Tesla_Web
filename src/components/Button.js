import React from "react";
import { useTheme } from "contexts/ThemeProvider";

const Button = ({
  value,
  className,
  type = "button",
  style,
  children,
  ...rest
}) => {
  const { theme } = useTheme();
 
  return (
    <button
      aria-label={value}
      type={type}
      className={`btn ${className}`}
      style={{
        color: theme.primary,
        borderColor: theme.primary,
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

const styles = {
  link: {},
  outlined: {
    padding: "8px 20px",
  }
};

export default Button;
