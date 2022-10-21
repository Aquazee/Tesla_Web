import React, { useEffect } from 'react';
import './style.css'

const AuthForm = () => {
  const removeListener = event => {
    console.log('Removing listener');
  };

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('authContainer');

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });
    return [
      signUpButton.removeEventListener('click', removeListener),
      signInButton.removeEventListener('click', removeListener)
    ]
  })

  return (

    <div className="authContainer" id="authContainer">
      <div className="form-container sign-up-container">
        <form action="#">
          <h2>Create Account</h2>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <h5 style={{color: '#cedde9'}}>OR</h5>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button className='mt-3 cbutton'>Sign Up</button>
        </form>
      </div>
      <div className="form-container sign-in-container">
        <form action="#">
          <h1>Sign in</h1>
          <div className="social-container">
            <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
          </div>
          <h5 style={{color: '#cedde9'}}>OR</h5>
          <div className='row'>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="/forgot-password">Forgot password?</a>
          </div>
          <button className='mt-4 cbutton'>Sign In</button>
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