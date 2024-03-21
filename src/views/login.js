import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import userImage from "../images/fingerprint.png";

export default function Login() {
  const [user, setUser] = useState({});

  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const userConnect = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div className='formContainer m-0 p-0'>
      <div className='container-fluid d-flex justify-content-center form'>
        <form className='col-6'>
          <div className='avatar' style={{ backgroundImage: `url(${userImage})` }}>
          </div>
          <div className='mb-3'>
            <label htmlFor='emailInput' className='form-label'>
              Email address
            </label>
            <input
              type='email'
              className='form-control'
              id='emailInput'
              aria-describedby='emailHelp'
              placeholder='Enter your email'
              onChange={(event) => { handleInputChange('email', event.target.value) }}
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='passwordInput' className='form-label'>
              Password
            </label>
            <input
              type='password'
              className='form-control'
              id='passwordInput'
              placeholder='Enter your password'
              onChange={(event) => { handleInputChange('password', event.target.value) }}
            />
          </div>
          <div className="d-flex justify-content-between">
            <div className='mb-3 form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                id='exampleCheck1'
              />
              <label className='form-check-label' htmlFor='exampleCheck1'>
                Check me out
              </label>
            </div>
            <div className='mb-3 form-check'>
              <label className='form-check-label fw-semibold specialText' htmlFor=''>
                Forgot Password ?
              </label>
            </div>
          </div>
          <button type='submit' className='btn btn-primary submitBTN' onClick={(event) => { userConnect(event) }}>
            Sign In
          </button>
          <p>Not registered yet ? <span className='fw-semibold specialText'> Create account</span> </p>
        </form>
      </div>
    </div>
  )
}
