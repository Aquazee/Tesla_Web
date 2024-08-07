import { Input } from '../../components';
import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";

import SocialLoginList from './SocialLoginList';
import LoginSchema from '../../schema/login-user.schema'
import UseYupValidationResolver from '../../utils/UseYupValidationResolver';
import { useAuth } from '../../contexts';
import './style.css';
import { useTheme } from 'contexts/ThemeProvider';

const LoginForm = ({ }) => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const { handleSubmit, reset, formState: { errors }, register } = useForm({ resolver: UseYupValidationResolver(LoginSchema) });

  const submitLogin = async (data) => {
    if (data) {
      const resp = await login(data)
      // window.location.href = 'http://localhost:3000'
      // Notification({ notificationAlertRef, ...AppFunctions.getMessage(resp) });
      reset();
      window.location.href = '/'
    }
  }

  useEffect(() => {
    load()
  })

  const load = () => {

  }

  return (
    <div className="form-container sign-in-container">
      <form name='login' className='cform needs-validation' onSubmit={handleSubmit((data) => submitLogin(data))} noValidate>
        <h1 style={{ color: theme.primary }}>Sign in</h1>
        <SocialLoginList />
        <h5 style={{ color: '#cedde9' }}>OR</h5>
        <div className=''>
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
            showError={errors.email && errors.email.type === "required"}
            errorMessage={errors?.email?.message}
          />
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
            showError={errors.password && errors.password.type === "required"}
            errorMessage={errors?.password?.message}
          />
          <a className='float-left' href="/forgot-password">Forgot password?</a>
        </div>
        <button className='mt-3 cbutton' style={{
          border: `1px solid ${theme.secondary}`,
          backgroundColor: theme.primary
        }} type='submit'>Sign In</button>
      </form>
    </div>
  )
}

export default LoginForm;