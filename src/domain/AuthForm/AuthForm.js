import { Input } from '../../components';
import React, { useEffect } from 'react';

import { AppFunctions, Constants } from '../../utils'
import SocialLoginList from './SocialLoginList';
import './style.css'



const AuthForm = ({ onSubmitRegisterForm, onSubmitLoginForm }) => {
  let signUpButton, signInButton, container;
  const removeListener = event => {
    console.log('Removing listener');
  };

  useEffect(() => {
    pageLoad();
    return cleanUp();
  })

  const pageLoad = () => {
    toggleForms();
  }

  const cleanUp = () => {
    return [
      signUpButton.removeEventListener('click', removeListener),
      signInButton.removeEventListener('click', removeListener)
    ]
  }

  const toggleForms = () => {
    signUpButton = document.getElementById('signUp');
    signInButton = document.getElementById('signIn');
    container = document.getElementById('authContainer');
    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
  }

  const register = (event) => {
    const registerFormData = AppFunctions.getFormValues(event)
    onSubmitRegisterForm(registerFormData);
  }

  const login = (event) => {
    const loginFormData = AppFunctions.getFormValues(event)
    onSubmitLoginForm(loginFormData);
  }

  return (
    <div className="authContainer" id="authContainer">
      <div className="form-container sign-up-container">
        <form name='register' className='cform' action="#" onSubmit={register}>
          <h2>Create Account</h2>
          <SocialLoginList />
          <h5 style={{ color: '#cedde9' }}>OR</h5>
          <div className='row'>
            <div className='col-6'>
              <Input name="first_name" type="text" placeholder="First Name" />
            </div>
            <div className='col-6'>
              <Input name="last_name" type="text" placeholder="Last Name" />
            </div>
          </div>
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Input name="cpassword" type="password" placeholder="Confirm Password" />
          <button className='mt-3 cbutton' type='submit'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form name='login' className='cform' action="#" onSubmit={login}>
          <h1>Sign in</h1>
          <SocialLoginList />
          <h5 style={{ color: '#cedde9' }}>OR</h5>
          <div className='row'>
            <input className='cinput' name="email" type="email" placeholder="Email" />
            <input className='cinput' name="password" type="password" placeholder="Password" />
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button className='mt-3 cbutton' type='submit'>Sign In</button>
        </form>
      </div>
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className="ghost cbutton" id="signIn">Sign In</button>
          </div>
          <div className="overlay-panel overlay-right">
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className="ghost cbutton" id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm;
