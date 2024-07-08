import { Input } from '../../components';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import RegisterSchema from '../../schema/register-user.schema'
import { AppFunctions, Constants } from '../../utils'
import SocialLoginList from './SocialLoginList';
import UseYupValidationResolver from '../../utils/UseYupValidationResolver';
import './style.css'
import { useAuth } from '../../contexts';
import Form from '../../components/Form';
import { useTheme } from 'contexts/ThemeProvider';

const RegisterForm = ({ toggleForm }) => {
  const { signup } = useAuth();
  const { theme } = useTheme();
  const { handleSubmit, register, formState: { errors }, clearErrors } = useForm({ resolver: UseYupValidationResolver(RegisterSchema) });

  const submitRegister = (data) => {
    if (data) {
      delete data['cpassword'];
      const resp = signup(data);
      toggleForm()
    }
  }

  return (
    <div className="form-container sign-up-container">
      <form className='cform' name='register' onSubmit={handleSubmit((data) => submitRegister(data))}>
        <h2 style={{color: theme.primary}}>Create Account</h2>
        <SocialLoginList />
        <h5 style={{ color: '#cedde9' }}>OR</h5>
        <div className='row'>
          <div className='col-6'>
            <Input
              id='first_name'
              name="first_name"
              type="text"
              placeholder="First Name"
              className='cinput'
              error={errors.first_name}
              aria-invalid={errors.first_name ? "true" : "false"}
              aria-required="true"
              register={register}
            />
            {
              errors.first_name && errors.last_name.type === "required" && <span className='float-left text-danger'>{errors.first_name.message}</span>
            }
          </div>
          <div className='col-6'>
            <Input
              id='last_name'
              name="last_name"
              type="text"
              placeholder="Last Name"
              className='cinput'
              error={errors.last_name}
              aria-invalid={errors.last_name ? "true" : "false"}
              aria-required="true"
              register={register}
            />
            {errors.last_name && errors.last_name.type === "required" && <span className='float-left text-danger'>{errors.last_name.message}</span>}
          </div>
        </div>
        <Input
          id='email'
          className='cinput'
          name='email'
          type='email'
          placeholder="Email"
          error={errors.email}
          aria-invalid={errors.email ? "true" : "false"}
          aria-required="true"
          register={register}
        />
        {errors.email && errors.email.type === "required" && <span className='float-left text-danger'>{errors.email.message}</span>}
        <Input
          id='password'
          className='cinput'
          name='password'
          type='password'
          error={errors.password}
          aria-invalid={errors.password ? "true" : "false"}
          aria-required="true"
          placeholder="Password"
          register={register}
        />
        {errors.password && errors.password.type === "required" && <span className='float-left text-danger'>{errors.password.message}</span>}
        <Input
          id='cpassword'
          className='cinput'
          name='cpassword'
          type='password'
          error={errors.cpassword}
          aria-invalid={errors.cpassword ? "true" : "false"}
          aria-required="true"
          placeholder="Confirm Password"
          register={register}
        />
        {errors.cpassword && errors.cpassword.type === "required" && <span className='float-left text-danger'>{errors.cpassword.message}</span>}
        <button className='mt-3 cbutton' id="sign-up" type='submit' style={{
          border: `1px solid ${theme.secondary}`,
          backgroundColor: theme.primary,
        }}>Sign Up</button>
      </form>
    </div>
  )
}

export default RegisterForm;