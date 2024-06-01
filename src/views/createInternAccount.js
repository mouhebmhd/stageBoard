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
    if (props.role === "stagiaire") {
      axios.post("http://localhost:3030/intern/addIntern/", user)
        .then(connectResult => {
          if (connectResult.data.status === "success") {
            document.getElementById("successMessage").classList.remove("d-none");
            document.getElementById("errorMessage").classList.add("d-none");
            setTimeout(() => {
              window.location.assign("/")
            }, 5000);
          } else {
            document.getElementById("errorMessage").classList.remove("d-none");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }

    if (props.role === "encadrant") {
      const data = {
        supervisorName: user.Name,
        supervisorFirstName: user.FirstName,
        supervisorEmail: user.Email,
        supervisorPassword: user.Password,
        supervisorLevel: user.Level,
        supervisorGender: user.Gender,
        supervisorEstablishment: user.Establishment,
        supervisorPhoto: 'Null', // You might need to add logic to handle supervisorPhoto
        supervisorBirthDate: user.BirthDate,
        supervisorPhone: user.Phone
      };
      axios.post("http://localhost:3030/supervisor/addSupervisor/", data)
        .then(connectResult => {
          if (connectResult.data.status === "success") {
            document.getElementById("successMessage").classList.remove("d-none");
            document.getElementById("errorMessage").classList.add("d-none");
            setTimeout(() => {
              window.location.assign("/")
            }, 5000);
          } else {
            document.getElementById("errorMessage").classList.remove("d-none");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div className='formContainer m-0 p-0' style={{ zIndex: 2 }}>
      <div className='container-fluid d-flex justify-content-center form'>
        <form className='col-6'>
          <div className='avatar' style={{ backgroundImage: `url(${userImage})` }}>
          </div>
          <h1 className='h1 specialText pageTitle text-center mt-2'>Créer votre compte</h1>
          <h1 className="text-success d-none" id="successMessage">Votre compte a été créé avec succès. Votre statut restera gelé jusqu'à ce que l'administrateur active votre compte.</h1>
          <h1 className='text-danger d-none' id="errorMessage">Nous vous informons que la création de votre compte a échoué. Veuillez réessayer ultérieurement. </h1>
          <div className="row mt-5">
            <div className='mb-3 col-md-6'>
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
            <div className='mb-3 col-md-6'>
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
          </div>
          <div className="row">
            <div className='mb-3 col-md-6'>
              <label htmlFor='emailInput' className='form-label'>
                Adresse email
              </label>
              <input
                type='email'
                className='form-control'
                id='emailInput'
                aria-describedby='emailHelp'
                placeholder='Entrez votre adresse email'
                onChange={(event) => { handleInputChange('Email', event.target.value) }}
              />
             
            </div>
            <div className='mb-3 col-md-6'>
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
          </div>
          <div className="row">
            <div className='mb-3 col-md-6'>
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
            <div className='mb-3 col-md-6'>
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
          </div>
          <div className="row">
            <div className='mb-3 col-md-6'>
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
            <div className='mb-3 col-md-6'>
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
          </div>
          <div className="row">
            <div className='mb-3 col-md-6'>
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
            <div className='mb-3 col-md-6'>
              <label htmlFor='PhoneInput' className='form-label'>
                Role
              </label>
              <br />
              <input
                type='radio'
                className='me-2'
                name="role"
                id='PhoneInput'
                value={'intern'}
                onChange={(event) => { handleInputChange('role', event.target.value) }}
              />
              Stagiaire
              <br />
              <input
                type='radio'
                className='me-2'
                name="role"
                id='PhoneInput'
                value={'intern'}
                onChange={(event) => { handleInputChange('role', event.target.value) }}
              />
              Encadrant
            </div>
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
          <button type='button' className='btn btn-primary submitBTN' onClick={(event) => { userConnect(event) }}>
            Se connecter
          </button>
          <p>Pas encore inscrit ? <span className='fw-semibold specialText'> Créer un compte</span> </p>
        </form>
      </div>
    </div>
  )
}
