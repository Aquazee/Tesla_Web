import { Input, InputBox } from '../../components';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import LoginSchema from '../../schema/login-user.schema'
import UseYupValidationResolver from '../../utils/UseYupValidationResolver';

const PaymentDetailsForm = () => {

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
    <div className='mb-3'>
      <div className="card card-body p-1 ">
        <button className="btn btn-primary bg-transparent text-dark w-100 border-0 text-left bg-white bold" type="button" data-toggle="collapse" data-target="#paymentForm" aria-expanded="false" aria-controls="paymentForm">
          Payment
        </button>
      </div>
      <div className="collapse card card-body" id="paymentForm">
        <div className="d-block my-3">
          <div className="custom-control custom-radio">
            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
            <label className="custom-control-label" htmlFor="credit">Credit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required="" />
            <label className="custom-control-label" htmlFor="debit">Debit card</label>
          </div>
          <div className="custom-control custom-radio">
            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required="" />
            <label className="custom-control-label" htmlFor="paypal">Paypal</label>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-name">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required="" />
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label htmlFor="cc-number">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required="" />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" required="" />
            <div className="invalid-feedback">
              Expiration date required
            </div>
          </div>
          <div className="col-md-3 mb-3">
            <label htmlFor="cc-expiration">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required="" />
            <div className="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetailsForm;