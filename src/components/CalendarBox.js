import React from 'react';

import { FieldLabel, ErrorText, Input } from '../components';

const CalendarBox = React.forwardRef((props, ref) => (
  <div className={`mt-3 mb-3 ${props.className}`}>
    <FieldLabel id={props.id} label={props.label} isRequired={props.isRequired} />
    <Input
      ref={ref}
      id={props.id}
      min={props.min}
      name={props.name}
      value={props.value}
      type={props.type || 'date'}
      onChange={props.onChange}
      required={props.required}
      data-id={props.dataId}
      className={`form-control ${props.validFeedbackValue ? 'is-invalid' : 'border border-light'}`}
      style={{ backgroundImage: 'none' }}
    />
    {props.validFeedbackValue && <ErrorText>{props.validFeedbackValue}</ErrorText>}
  </div>
));

export default CalendarBox;
