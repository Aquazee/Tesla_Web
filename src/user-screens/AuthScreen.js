import React, { useEffect, useState } from 'react';

import LoginForm from '../domain/AuthForm/LoginForm';
import RegisterForm from '../domain/AuthForm/RegisterForm';

const AuthForm = () => {
  let signUpButton, signInButton, container;

  const [formErrors, setFormErrors] = useState({})
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

  const toggleForm = () => {
    var signUpBth = document.getElementById('sign-up');
    signUpBth.click();
  }

  return (
    <div className="row" id="">
      <div className="col-6 offset-3">
        <div className="authContainer" id="authContainer">
          <RegisterForm toggleForm={toggleForm}/>
          <LoginForm toggleForm={toggleForm}/>
          <OverlayContainer />
        </div>
      </div>
    </div>
  )
}

export default AuthForm;

const OverlayContainer = () => {
  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className="ghost cbutton" id="signIn">Sign In</button>
        </div>
        <div className="overlay-panel overlay-right">
          <h1>Hello!</h1>
          <p>Enter your personal details and start journey with us</p>
          <button className="ghost cbutton" id="signUp">Sign Up</button>
        </div>
      </div>
    </div>
  )
}