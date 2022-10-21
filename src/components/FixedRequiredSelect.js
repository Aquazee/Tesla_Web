import React, { useRef, useState } from 'react';

const noop = () => {};

function FixRequiredSelect({ SelectComponent, required, isDisabled, ...props }) {
  const selectRef = useRef(null).current;
  const [value, setValue] = useState(props.value || '');

  const onChange = (value, actionMeta) => {
    if (props.onChange) {
      props.onChange(value, actionMeta);
      setValue(value);
    }
  };

  const getValue = () => {
    if (props.value !== undefined) return props.value;
    return value || '';
  };
  const enableRequired = !isDisabled;
  return (
    <div className="w-100">
      <SelectComponent {...props} ref={selectRef} onChange={onChange} />
      {enableRequired && (
        <input
          className={`${props.inputClassName}`}
          tabIndex={-1}
          autoComplete="off"
          style={{
            opacity: 0,
            width: '100%',
            height: 0,
            position: 'absolute',
            outline: 'none'
          }}
          value={getValue()}
          onChange={noop}
          onFocus={() => selectRef?.focus()}
          required={required}
        />
      )}
    </div>
  );
}

export default FixRequiredSelect;
