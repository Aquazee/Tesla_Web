import React from 'react';
import { FormGroup, CustomInput, Label, FormText } from 'reactstrap';
import { FieldLabel } from '.';
import { AWS_URL } from '../config';

function AddAttachPreview(props) {
  const { click, index, onChange, attachments, errors } = props;

  return (
    <div className="mt-3 mb-3 col-12">
      <FormGroup>
        <FieldLabel id="attachments" isRequired={false} label="Add Attachments" />
        <CustomInput
          type="file"
          id={`attachments-${index}`}
          name="customFile"
          onChange={onChange}
          label="choose an image file"
          data-id="attachments"
          data-index={index}
          data-parentid="tasks"
          multiple
        />
      </FormGroup>
      {/*  <div className="input-group">
          <div className="custom-file">
            <input
              type="file"
              className="custom-file-input"
              id={`attachments-${index}`}
              aria-describedby="inputGroupFileAddon01"
              onChange={onChange}
              multiple
              data-id='attachments'
              data-index={index}
            />
            <label
              className="custom-file-label row m-0"
              htmlFor="inputGroupFile01"
            ></label>
          </div>
        </div> */}
      {errors[`attachments-${index}`]?.type === 'format' && (
        <small className="form-text text-danger">{errors[`attachments-${index}`].message}</small>
      )}
      <div className="col-12 m-0 p-0 mt-3 mb-3">
        
      </div>
    </div>
  );
}

export default AddAttachPreview;
