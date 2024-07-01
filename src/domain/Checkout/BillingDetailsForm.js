import { Input, InputBox } from '../../components';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import LoginSchema from '../../schema/login-user.schema'
import UseYupValidationResolver from '../../utils/UseYupValidationResolver';

const BillingDetailsForm = () => {

  const { handleSubmit, reset, formState: { errors }, register } = useForm({ resolver: UseYupValidationResolver(LoginSchema) });

  const submitLogin = async (data) => {
    if (data) {
      // const resp = await login(data)
      window.location.href = 'http://localhost:3000'
      // Notification({ notificationAlertRef, ...AppFunctions.getMessage(resp) });
      reset()
    }
  }

  return (
    <div className='card accordion-item mb-1'>
      <div className="card-header p-1" id="billingForm">
        <button className="btn btn-primary bg-transparent text-dark w-100 border-0 text-left bg-white bold" type="button" data-toggle="collapse" data-target="#billingDetailsForm" aria-expanded="false" aria-controls="billingDetailsForm">
          Billing Details
        </button>
      </div>
      <div className="collapse card card-body" id="billingDetailsForm" aria-labelledby='#billingForm' data-parent="#checkout">
        <InputBox
          className="mb-3"
          label="Address Line 1"
          name="line_1"
          type="text"
          register={register}
          validFeedbackValue={errors.line_1 && errors.line_1.type === 'required' ? errors.line_1.message : ''}
          required
        />
        <InputBox
          className="mb-3"
          label="Address Line 2"
          name="line_2"
          type="text"
          register={register}
          validFeedbackValue={errors.line_2 && errors.line_2.type === 'required' ? errors.line_2.message : ''}
          required
        />
        <div className="row">
          <div className="col-md-5 mb-3">
            <label htmlFor="country">Country</label>
            <select className="custom-select d-block w-100" id="country" required="" onChange={() => console.log('selected country')}>
              <option value="Choose">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          {/* <div className="col-md-4 mb-3">
            <label htmlFor="state">State</label>
            <select className="custom-select d-block w-100" id="state" required="" onChange={() => console.log('selected country')}>
              <option value="Choose">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div> */}
          {/* <Dropdown label="Filter By" options={filterOptions} onSelect={onFilterSelect} /> */}
          <InputBox
            className="col-md-4"
            label="Pin Code"
            name="pin_code"
            type="text"
            register={register}
            validFeedbackValue={errors.pin_code && errors.pin_code.type === 'required' ? errors.pin_code.message : ''}
            required
          />
        </div>
        <hr className="mb-4" />
        <div className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" id="same-address" />
          <label className="custom-control-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
        </div>
      </div>
    </div>
  )
}

export default BillingDetailsForm;
