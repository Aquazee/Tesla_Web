import React from "react";

const AddDelete = (props) => {
  return (
    <div className="mt-5 mb-3">
      {props.showAddButton && (
        <a className="p-1" href="!#" onClick={(e) => e.preventDefault()}>
          <i
            className="tim-icons icon-simple-add"
            aria-hidden="true"
            data-id={props.dataId}
            data-index={props.dataIndex}
            data-nestedid={props.nestedId}
            data-data={props.data}
            data-parentid={props.parentId}
            data-parentIndex={props.parentIndex}
            onClick={props.add}
          />
        </a>
      )}
      {props.isDataAvailable ? (
        <a className="p-1" href="!#" onClick={(e) => e.preventDefault()}>
          <i
            className="tim-icons icon-simple-delete"
            data-id={props.dataId}
            data-index={props.dataIndex}
            data-parentid={props.parentId}
            data-nestedid={props.nestedId}
            data-parentIndex={props.parentIndex}
            onClick={props.delete}
          />
        </a>
      ) : null}
    </div>
  );
};

export default AddDelete;
