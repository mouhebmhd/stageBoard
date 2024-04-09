import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import userImage from "../images/fingerprint.png";
import axios from 'axios';
export default function Login(props) {
  const [user, setUser] = useState({});
  const handleInputChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };
  const userConnect = (event) => {
    event.preventDefault();
    if(props.role)
    axios.post("http://localhost:3000/intern/addIntern/",user)
    .then(connectResult=>{
      console.log(connectResult)
    })
    .catch(error=>{
      console.log(error)
    })
  };

    
  return (
    <div className='formContainer m-0 p-0' style={{zIndex:2}}>
      
      <div className='container-fluid d-flex justify-content-center form'>
      
        <form className='col-6'>
          <div className='avatar' style={{ backgroundImage: `url(${userImage})` }}>
          </div>
          <h1 className='h1 specialText pageTitle text-center mt-2'>Créer votre compte en tant que {props.role}</h1>
          <div className='mb-3'>
            <label htmlFor='firstNameInput' className='form-label'>
              Prénom
            </label>
            <input
              type='text'
              className='form-control'
              id='firstNameInput'
              placeholder='Entrez votre prénom'
              onChange={(event) => { handleInputChange('FirstName', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='lastNameInput' className='form-label'>
              Nom de famille
            </label>
            <input
              type='text'
              className='form-control'
              id='lastNameInput'
              placeholder='Entrez votre nom de famille'
              onChange={(event) => { handleInputChange('Name', event.target.value) }}
            />
          </div>
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
              onChange={(event) => { handleInputChange('interEmail', event.target.value) }}
            />
            <div id='emailHelp' className='form-text'>
              Nous ne partagerons jamais votre adresse email avec quelqu'un d'autre.
            </div>
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
              onChange={(event) => { handleInputChange('Password', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='LevelInput' className='form-label'>
              Niveau de stage
            </label>
            <select
              className='form-control'
              id='LevelInput'
              onChange={(event) => { handleInputChange('Level', event.target.value) }}
            >
          <option>Veuillez choisir votre niveau d'études</option>
          <option>Licence</option>
          <option>Master</option>
          <option>Ingénierie</option>
          <option>Autre</option>

              </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='GenderInput' className='form-label'>
              Genre
            </label>
            <select
              className='form-select'
              id='GenderInput'
              onChange={(event) => { handleInputChange('Gender', event.target.value) }}>
              <option value=''>Sélectionnez votre genre</option>
              <option value='male'>Homme</option>
              <option value='female'>Femme</option>
              <option value='other'>Autre</option>
            </select>
          </div>
          <div className='mb-3'>
            <label htmlFor='EstablishmentInput' className='form-label'>
              Établissement
            </label>
            <input
              type='text'
              className='form-control'
              id='EstablishmentInput'
              placeholder='Entrez votre établissement'
              onChange={(event) => { handleInputChange('Establishment', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='PhotoInput' className='form-label'>
              Photo
            </label>
            <input
              type='file'
              className='form-control'
              id='PhotoInput'
              onChange={(event) => { handleInputChange('Photo', event.target.files[0]) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='BirthDateInput' className='form-label'>
              Date de naissance
            </label>
            <input
              type='date'
              className='form-control'
              id='BirthDateInput'
              onChange={(event) => { handleInputChange('BirthDate', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='PhoneInput' className='form-label'>
              Téléphone
            </label>
            <input
              type='tel'
              className='form-control'
              id='PhoneInput'
              placeholder='Entrez votre numéro de téléphone'
              onChange={(event) => { handleInputChange('Phone', event.target.value) }}
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
                Souviens-toi de moi
              </label>
            </div>
            <div className='mb-3 form-check'>
              <label className='form-check-label fw-semibold specialText' htmlFor=''>
                Mot de passe oublié ?
              </label>
            </div>
          </div>
          <button type='button'className='btn btn-primary submitBTN' onClick={(event) => { userConnect(event) }}>
            Se connecter
          </button>
          <p>Pas encore inscrit ? <span className='fw-semibold specialText'> Créer un compte</span> </p>
        </form>
      </div>
    </div>
  )
}
