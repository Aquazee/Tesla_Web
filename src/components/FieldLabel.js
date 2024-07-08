import React from "react";
import { RequiredField } from '../components';

function FieldLabel(props) {
  return (
    <label htmlFor={props.id} className={`form-label ${props.className}`} onClick={props.onClick}>
      {props.label}
      {props.isRequired && <RequiredField />}
    </label>
  );
}

export default React.memo(FieldLabel);
