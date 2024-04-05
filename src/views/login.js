import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import userImage from "../images/fingerprint.png";
import axios from 'axios';
import { result } from 'lodash';

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (field, value) => {
    setLoginData({ ...loginData, [field]: value });
  };

  const userLogin = (event) => {
    event.preventDefault();
    axios.post("http://localhost:3030/authentification/login/", loginData)
    .then(loginResult => {
      if(loginResult.data.status=="success")
      {
        window.location="/"
      }
      // Handle successful login, e.g., redirect the user
    })
    .catch(error => {
      console.log(error);
      // Handle login error, e.g., display error message to the user
    });
  };

  return (
    <div className='formContainer m-0 p-0 mt-5 py-5'>
      <div className='container-fluid d-flex justify-content-center form'>
        <form className='col-6'>
          <div className='avatar' style={{ backgroundImage: `url(${userImage})` }}>
          </div>
          <h1 className='h1 specialText pageTitle text-center mt-2'>Connectez-vous  ! </h1>
          <div className='mb-3'>
            <label htmlFor='emailInput' className='form-label'>
              Adresse email
            </label>
            <input
              type='email'
              className='form-control'
              id='emailInput'
              aria-describedby='emailHelp'
              placeholder='Entrez votre adresse email'
              onChange={(event) => { handleInputChange('email', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='passwordInput' className='form-label'>
              Mot de passe
            </label>
            <input
              type='password'
              className='form-control'
              id='passwordInput'
              placeholder='Entrez votre mot de passe'
              onChange={(event) => { handleInputChange('password', event.target.value) }}
            />
          </div>
          <button type='button' className='btn btn-primary submitBTN' onClick={(event) => { userLogin(event) }}>
            Se connecter
          </button>
          <p>Pas encore inscrit ? <span className='fw-semibold specialText'> Créer un compte</span> </p>
        </form>
      </div>
    </div>
  )
}
