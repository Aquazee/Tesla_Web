import React from "react";

const ErrorText = ({ children }) => {
  return (
    <div className="invalid-feedback d-block" style={styles}>
      {children}
    </div>
  );
};

export default ErrorText;

const styles = {
  fontSize: 10,
  fontWeight: 400
};
