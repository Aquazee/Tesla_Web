import { Input, InputBox } from '../../components';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import LoginSchema from '../../schema/login-user.schema'
import UseYupValidationResolver from '../../utils/UseYupValidationResolver';

const RedeemForm = () => {

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
    <form className="">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Promo code" />
        <div className="input-group-append">
          <button type="submit" className="btn btn-secondary">Redeem</button>
        </div>
      </div>
    </form>
  )
}

export default RedeemForm