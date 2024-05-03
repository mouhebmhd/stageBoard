import React, { useEffect, useState } from 'react'
import '../styles/manageProfil.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import avatar from '../../src/images/avatar.png'
import Navbar from '../components/navbar'
function Profil () {
  const userID = useParams().id
  const [userData, setUserData] = useState({
    userFirstName: '',
    userEmail: '',
    hashedPassword: '',
    userLevel: '',
    userGender: '',
    userEstablishment: '',
    userPhoto: '',
    userBirthDate: '',
    userPhone: ''
  })
  const addEducation=()=>{
    const educationStep=(document.getElementsByClassName("educationStep")[0]).cloneNode(true)
    const educations=(document.getElementsByClassName("educations")[0])
    educations.appendChild(educationStep)
  }
  const addExperience=()=>{
    const experienceStep=(document.getElementsByClassName("experienceStep")[0]).cloneNode(true)
    const experiences=(document.getElementsByClassName("experiences")[0])
    experiences.appendChild(experienceStep)
  }

  useEffect(() => {
    axios
      .get(`http://localhost:3030/user/getProfileInfo/${userID}`)
      .then(response => {
        setUserData(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [userID])

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    level: '',
    gender: '',
    establishment: '',
    birthDate: '',
    phone: ''
  })

  const handleInputChange = (field, value) => {
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }))
  }

  function updateProfile () {
    // Define an array to hold error messages for empty fields
    const errors = []

    // Check each field and add an error message if it's empty
    if (!user.firstName.trim()) {
      errors.push('First Name is required')
    }

    if (!user.email.trim()) {
      errors.push('Email is required')
    }

    if (!user.phone.trim()) {
      errors.push('Phone Number is required')
    }

    // Check if there are any errors
    if (errors.length > 0) {
      // Display error messages or handle them as needed
      for (const error of errors) {
        console.error(error)
      }
    } else {
      // If there are no errors, you can proceed with the update
      axios
        .put('http://localhost:3030/user/updateProfile/', user)
        .then(response => {
          console.log(response)
          window.location.reload()
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <>
      <Navbar></Navbar>
      <div className='container profilUpdateContainer'>
        <div className='row d-flex flex-column'>
          <h1 className='text-center pageTitle'>Mettre à jour votre profil</h1>
          <div className='col d-flex justify-content-center flex-column p-2 align-items-center'>
            <div
              className='profilPhotoContainer'
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <h1 className='specialText h1 sectionTitle'>Informations Personnelles </h1>
            <div className='col-12 mt-2'>
              <form className='col-12'>
                <div className='row justify-content-between'>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='firstNameInput' className='form-label'>
                      Prénom
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='firstNameInput'
                      placeholder='Entrez votre prénom'
                      onChange={event => {
                        handleInputChange('firstName', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='lastNameInput' className='form-label'>
                      Nom de famille
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='lastNameInput'
                      placeholder='Entrez votre nom de famille'
                      onChange={event => {
                        handleInputChange('lastName', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='emailInput' className='form-label'>
                      Adresse email
                    </label>
                    <input
                      type='email'
                      className='form-control'
                      id='emailInput'
                      aria-describedby='emailHelp'
                      placeholder='Entrez votre adresse email'
                      onChange={event => {
                        handleInputChange('email', event.target.value)
                      }}
                    />
                    <div id='emailHelp' className='form-text'>
                      Nous ne partagerons jamais votre adresse email avec
                      quelqu'un d'autre.
                    </div>
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='passwordInput' className='form-label'>
                      Mot de passe
                    </label>
                    <input
                      type='password'
                      className='form-control'
                      id='passwordInput'
                      placeholder='Entrez votre mot de passe'
                      onChange={event => {
                        handleInputChange('password', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='LevelInput' className='form-label'>
                      Niveau de stage
                    </label>
                    <select
                      className='form-control'
                      id='LevelInput'
                      onChange={event => {
                        handleInputChange('level', event.target.value)
                      }}
                    >
                      <option>Veuillez choisir votre niveau d'études</option>
                      <option>Licence</option>
                      <option>Master</option>
                      <option>Ingénierie</option>
                      <option>Autre</option>
                    </select>
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='GenderInput' className='form-label'>
                      Genre
                    </label>
                    <select
                      className='form-select'
                      id='GenderInput'
                      onChange={event => {
                        handleInputChange('gender', event.target.value)
                      }}
                    >
                      <option value=''>Sélectionnez votre genre</option>
                      <option value='male'>Homme</option>
                      <option value='female'>Femme</option>
                      <option value='other'>Autre</option>
                    </select>
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='EstablishmentInput' className='form-label'>
                      Établissement
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='EstablishmentInput'
                      placeholder='Entrez votre établissement'
                      onChange={event => {
                        handleInputChange('establishment', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='BirthDateInput' className='form-label'>
                      Date de naissance
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='BirthDateInput'
                      onChange={event => {
                        handleInputChange('birthDate', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='PhoneInput' className='form-label'>
                      Téléphone
                    </label>
                    <input
                      type='tel'
                      className='form-control'
                      id='PhoneInput'
                      placeholder='Entrez votre numéro de téléphone'
                      onChange={event => {
                        handleInputChange('phone', event.target.value)
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className='col d-flex justify-content-center flex-column p-2 align-items-center'>
            <h1 className='specialText sectionTitle'>Parcours Academique </h1>
            <div className='col-12 mt-2 '>
              <form className='col-12 educations'>
                <div className='row justify-content-between educationStep'>
                  <h1 className="specialText my-2">Education Step</h1>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='educationLevelInput' className='form-label'>
                      Niveau d'éducation
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='educationLevelInput'
                      placeholder="Entrez votre niveau d\'éducation"
                      onChange={event => {
                        handleInputChange('educationLevel', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label
                      htmlFor='educationInstitutionInput'
                      className='form-label'
                    >
                      Établissement d'éducation
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='educationInstitutionInput'
                      placeholder="Entrez votre établissement d'éducation"
                      onChange={event => {
                        handleInputChange(
                          'educationInstitution',
                          event.target.value
                        )
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label
                      htmlFor='educationStartDateInput'
                      className='form-label'
                    >
                      Date de début d'éducation
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='educationStartDateInput'
                      onChange={event => {
                        handleInputChange(
                          'educationStartDate',
                          event.target.value
                        )
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label
                      htmlFor='educationEndDateInput'
                      className='form-label'
                    >
                      Date de fin d'éducation
                    </label>
                    <input
                      type='date'
                      className='form-control'
                      id='educationEndDateInput'
                      onChange={event => {
                        handleInputChange(
                          'educationEndDate',
                          event.target.value
                        )
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label
                      htmlFor='educationDiplomaInput'
                      className='form-label'
                    >
                      Diplôme
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='educationDiplomaInput'
                      placeholder='Entrez votre diplôme'
                      onChange={event => {
                        handleInputChange(
                          'educationDiploma',
                          event.target.value
                        )
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label
                      htmlFor='educationDistinctionInput'
                      className='form-label'
                    >
                      Distinction
                    </label>
                    <input
                      type='text'
                      className='form-control'
                      id='educationDistinctionInput'
                      placeholder='Entrez votre distinction'
                      onChange={event => {
                        handleInputChange(
                          'educationDistinction',
                          event.target.value
                        )
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>
            <button
            type='button'
            className='btn btn-primary submitBTN'
            onClick={addEducation}
          >
            Ajouter +
          </button>
          </div>
          <div className='col d-flex justify-content-center flex-column p-2 align-items-center'>
            <h1 className='specialText sectionTitle'>Expèriences Professionelles</h1>
            <div className='col-12 mt-2 '>
            <form className='col-12 experiences'>

  <div className="row justify-content-between experienceStep">
  <h1 className='specialText'>Experience</h1>
    <div className='mb-3 col-lg-5 '>
      <label htmlFor='experienceCompanyInput' className='form-label'>
        Nom de l'entreprise
      </label>
      <input
        type='text'
        className='form-control'
        id='experienceCompanyInput'
        placeholder="Entrez le nom de l'entreprise"
        onChange={(event) => { handleInputChange('experienceCompany', event.target.value) }}
      />
    </div>
    <div className='mb-3 col-lg-5'>
      <label htmlFor='experienceStartDateInput' className='form-label'>
        Date de début de l'expérience
      </label>
      <input
        type='date'
        className='form-control'
        id='experienceStartDateInput'
        onChange={(event) => { handleInputChange('experienceStartDate', event.target.value) }}
      />
    </div>
    <div className='mb-3 col-lg-5'>
      <label htmlFor='experienceEndDateInput' className='form-label'>
        Date de fin de l'expérience
      </label>
      <input
        type='date'
        className='form-control'
        id='experienceEndDateInput'
        onChange={(event) => { handleInputChange('experienceEndDate', event.target.value) }}
      />
    </div>
    <div className='mb-3 col-lg-5'>
      <label htmlFor='experienceMissionInput' className='form-label'>
        Mission
      </label>
      <input
        type='text'
        className='form-control'
        id='experienceMissionInput'
        placeholder='Entrez la mission'
        onChange={(event) => { handleInputChange('experienceMission', event.target.value) }}
      />
    </div>
    <div className='mb-3 col-lg-10'>
      <label htmlFor='experienceDescriptionInput' className='form-label'>
        Description
      </label>
      <textarea
        className='form-control'
        id='experienceDescriptionInput'
        rows='5'
        placeholder='Entrez la description'
        onChange={(event) => { handleInputChange('experienceDescription', event.target.value) }}
      ></textarea>
    </div>
  </div>
</form>

            </div>
            <button
            type='button'
            className='btn btn-primary submitBTN'
            onClick={addExperience}
          >
            Ajouter une experience
          </button>
          </div>
          
        </div>
        <div className='row mt-2 mb-2 d-flex justify-content-center'>
          <button
            type='button'
            className='btn btn-primary submitBTN'
            onClick={updateProfile}
          >
            Mettre à jour Vos informations
          </button>
        </div>
      </div>
    </>
  )
}

export default Profil
