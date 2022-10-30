import { Input, InputBox } from '../../components';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import LoginSchema from '../../schema/login-user.schema'
import UseYupValidationResolver from '../../utils/UseYupValidationResolver';

const ContactForm = () => {

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
    <form name="contact" className="needs-validation" noValidate="" >
      <div className='mb-1'>
        <div className="card card-body p-1">
          <button className="btn btn-primary bg-transparent text-dark w-100 border-0 text-left bg-white bold" type="button" data-toggle="collapse" data-target="#contactForm" aria-expanded="false" aria-controls="contactForm">
            Contact Details
          </button>
        </div>
        <div className="collapse card card-body mb-2" id="contactForm">
          <div className="row">
            <InputBox
              className="col-md-6 mb-3"
              label="First Name"
              name="first_name"
              type="text"
              register={register}
              validFeedbackValue={errors.first_name && errors.first_name.type === 'required' ? errors.first_name.message : ''}
              required
            />
            <InputBox
              className="col-md-6 mb-3"
              label="Last Name"
              name="last_name"
              type="text"
              register={register}
              validFeedbackValue={errors.last_name && errors.last_name.type === 'required' ? errors.last_name.message : ''}
              required
            />
            <InputBox
              id='email'
              label="Email"
              className='col-6'
              name='email'
              type='email'
              required
              error={errors.password}
              aria-invalid={errors.password ? "true" : "false"}
              aria-required="true"
              register={register}
              validFeedbackValue={errors.email && errors.email.type === 'required' ? errors.email.message : ''}
            />
            <InputBox
              id='Mobile'
              label="Mobile"
              className='col-6'
              name='mobile'
              type='text'
              required
              error={errors.password}
              aria-invalid={errors.password ? "true" : "false"}
              aria-required="true"
              register={register}
              validFeedbackValue={errors.email && errors.email.type === 'required' ? errors.email.message : ''}
            />
          </div>

        </div>
      </div>
    </form>
  )
}

export default ContactForm;