import React from "react";

function TextArea(props) {
  return (
    <textarea
      id={props.id}
      placeholder={props.placeholder}
      className={`form-control ${props.className}`}
      value={props.value}
      onChange={props.onChange}
      rows={props.rows}
      maxLength={props.maxLength}
      data-id={props.dataId}
      data-nestedid={props.nestedId}
      data-parentid={props.parentId}
      data-parentindex={props.parentIndex}
    />
  );
}

export default TextArea;
