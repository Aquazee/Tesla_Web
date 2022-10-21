import React from 'react';
import { Input, FieldLabel, ErrorText } from '../components';

const InputBox = React.forwardRef(
  (
    {
      className,
      id,
      isRequired,
      label,
      type,
      validFeedbackValue,
      name,
      placeholder,
      value,
      onChange,
      dataId,
      nestedId,
      parentId,
      nestedIndex,
      parentIndex,
      grandId,
      instruction
    },
    ref
  ) => {
    const [show, setShow] = React.useState(false);
    return (
      <div className={`mt-3 mb-3 has-validated ${className}`}>
        <FieldLabel id={id} isRequired={isRequired} label={label} />
        <Input
          className={`form-control ${validFeedbackValue ? ' is-invalid' : 'border border-light'}`}
          type={type === 'password' && show ? 'text' : type}
          id={id}
          label={label}
          name={name}
          placeholder={placeholder}
          value={value}
          ref={ref}
          onChange={onChange}
          required={isRequired}
          step="1"
          pattern={/^[0-9]*$/}
          style={{ backgroundImage: 'none' }}
          dataId={dataId}
          nestedId={nestedId}
          nestedIndex={nestedIndex}
          parentId={parentId}
          parentIndex={parentIndex}
          validFeedbackValue={validFeedbackValue}
          grandId={grandId}
        />
        {instruction && (
          <small className="form-text mt-1" style={styles.smallText}>
            Required comma saparated values.
          </small>
        )}
        {Boolean(validFeedbackValue) && <ErrorText>{validFeedbackValue}</ErrorText>}
      </div>
    );
  }
);

export default InputBox;

const styles = {
  smallText: {
    fontSize: 10,
    fontWeight: 300,
    color: '#000'
  }
};
