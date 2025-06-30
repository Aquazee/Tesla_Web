import React from "react";
import { Input, FieldLabel, ErrorText } from "../components";

const InputBox = React.forwardRef(
  (
    {
      register,
      className,
      id,
      required,
      label,
      type,
      name,
      validFeedbackValue,
      ...rest
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    return (
      <div className={`mt-3 mb-3 has-validated ${className}`}>
        <FieldLabel id={id} isRequired={required} label={label} />
        <Input
          register={register}
          className={`form-control ${
            validFeedbackValue ? " is-invalid" : "border"
          }`}
          type={type === "password" && show ? "text" : type}
          id={id}
          label={label}
          name={name}
          aria-invalid={validFeedbackValue !== "" ? "true" : "false"}
          aria-required={required}
          required={required}
          {...rest}
        />
        {Boolean(validFeedbackValue) && (
          <ErrorText>{validFeedbackValue}</ErrorText>
        )}
      </div>
    );
  }
);

export default InputBox;

const styles = {
  smallText: {
    fontSize: 10,
    fontWeight: 300,
    color: "#000",
  },
};
