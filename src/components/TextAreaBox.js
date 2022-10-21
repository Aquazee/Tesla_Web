import React, { forwardRef } from 'react';
import { FieldLabel, ErrorText, TextArea } from '../components';

const TextAreaBox = forwardRef((props, ref) => (
  <div className={`mt-3 mb-3 ${props.className}`}>
    <FieldLabel id={props.id} isRequired={props.isRequired} label={props.label} />
    <TextArea
      className={`form-control ${props.validFeedbackValue ? 'is-invalid' : 'border border-light'}`}
      id={props.id}
      name={props.id}
      value={props.value}
      ref={ref}
      onChange={props.onChange}
      required={props.required}
      rows={props.rows}
      maxLength={props.maxLength}
      dataId={props.dataId}
      parentId={props.parentId}
      parentIndex={props.parentIndex}
      nestedId={props.nestedId}
    />
    {Boolean(props.validFeedbackValue) && <ErrorText>{props.validFeedbackValue}</ErrorText>}
  </div>
));

export default TextAreaBox;
