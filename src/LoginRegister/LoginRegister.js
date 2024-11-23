import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {

  const [isActive, setIsActive] = useState(false);

  const handleRegisterClick = () => setIsActive(true);
  const handleLoginClick = () => setIsActive(false);

  // const SwitchContent = () => {
  //   setIsActive(!isActive);
  // }

  
  return (
    <div>
      <h1 className='hero justify-content-center align-items-center d-flex text-white' id='hero'>Welcome to Travex</h1>
      <div className={`content justify-content-center align-items-center d-flex shadow-lg ${isActive ? 'active' : ''}`} id='content'>

        {/*---------Register Form---------*/}
        <div className={`col-md-6 d-flex justify-content-center ${isActive ? 'hidden' : ''}`}>
          <form>
            <div className='header-text mb-4'>
              <h3>Create Account</h3>
            </div>
            <div className='input-group mb-3'>
              <input
                type='text'
                placeholder='Name'
                className='form-control bg-light fs-6 default input example'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='email'
                placeholder='Email'
                className='form-control bg-light fs-6 default input example'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='password'
                placeholder='Password'
                className='form-control bg-light fs-6 default input example'
              />
            </div>
            <div className='input-group mb-3 justify-content-center'>
              <button className="btn border-white text-white w-50 fs-6">Register</button>
            </div>
          </form>
        </div>

        {/*---------Login Form---------*/}
        <div className={`col-md-6 right-box ${isActive ? '' : 'hidden'}`}>
          <form>
            <div className='header-text mb-4 text-white'>
              <h3>Sign In</h3>
            </div>
            <div className='input-group mb-3'>
              <input
                type='email'
                placeholder='Email'
                className='form-control bg-light fs-6 default input example'
              />
            </div>
            <div className='input-group mb-3'>
              <input
                type='password'
                placeholder='Password'
                className='form-control bg-light fs-6 default input example'
              />
            </div>
            <div className='input-group mb-5 d-flex justify-content-between'>
              <div className='form-check'>
                <input type='checkbox' className='form-check-input' />
                <label
                  htmlFor='formcheck'
                  className='form-check-label text-secondary'
                >
                  <small>Remember me</small>
                </label>
              </div>
              <div className='forgot'>
                <small>
                  <a href='forgetPassword'>Forgot Password?</a>
                </small>
              </div>
            </div>
            <div className='input-group mb-3 justify-content-center'>
              <button className="btn border-white text-white w-50 fs-6">Login</button>
            </div>
          </form>
        </div>
      </div>

      {/*---------Switch content---------*/}

      <div className='switch-content'>
        <div className='switch'>
          <div className='switch-panel switch-left'>
            <h3>Hello, Again</h3>
            <p>We are happy to see you back</p>
            <button className='hidden btn text-white w-50 fs-6' id='login' onClick={handleLoginClick}>Login</button>
          </div>
          <div className='switch-panel switch-right'>
            <h3>Welcome</h3>
            <p>Join to Travex, Explore a New Experience</p>
            <button className='hidden btn border-white text-white w-50 fs-6' id='register' onClick={handleRegisterClick}>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;