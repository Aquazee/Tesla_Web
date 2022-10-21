import React from "react";
import BaseSelect from 'react-select';

import { ErrorText, FieldLabel, FixedRequiredSelect } from '../components';

function Select(props) {
  return (
    <FixedRequiredSelect {...props} SelectComponent={BaseSelect} options={props.options || []} />
  );
}

function SelectBox(props) {
  const styles = {
    control: (base, state) => ({
      ...base,
      fontSize: 12,
      borderColor: props.validFeedbackValue ? 'red' : base.borderColor,
      boxShadow:
        state.isFocused && props.validFeedbackValue ? '0 0 2px 2px rgb(220 53 69 / 25%)' : '0',
      '&:hover': {
        borderColor: '0 !important',
        boxShadow:
          props.validFeedbackValue && state.isFocused
            ? '0 0 2px 2px rgb(220 53 69 / 25%)'
            : base.boxShadow
      }
    }),
    menu: (base) => ({
      ...base,
      fontSize: 12
    })
  };
  let val = '--';
  if (props.value) {
    if (Array.isArray(props.value)) {
      if (props.value.length) {
        const filterVal = props.value?.filter((o) => o.label !== '').map((o) => o.label);
        val = filterVal.length ? filterVal.join(', ') : '--';
      }
    } else {
      val = props.value.label || '--';
    }
  }

  return (
    <div className={`mt-3 col-3 ${props.className}`}>
      <FieldLabel id={props.id} label={props.label} isRequired={props.isRequired} />
      <div className="input-group">
        {props.previewMode ? (
          <strong style={{ fontSize: '14px' }}>{val}</strong>
        ) : (
          <Select
            inputId={props.id}
            onChange={props.onChange}
            options={props.options}
            value={props.value}
            isDisabled={props.isDisabled}
            styles={styles}
            isMulti={props.isMulti}
            required
          />
        )}
      </div>
      {Boolean(props.validFeedbackValue) && <ErrorText>{props.validFeedbackValue}</ErrorText>}
    </div>
  );
}

export default SelectBox;
