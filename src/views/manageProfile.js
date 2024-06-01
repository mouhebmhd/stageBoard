import React, { useEffect, useState } from 'react'
import '../styles/manageProfil.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import avatar from '../../src/images/avatar.png'
import Navbar from '../components/navbar'
function Profil () {
  const [user, setUser] = useState({
    supervisorId: '',
    supervisorName: '',
    supervisorFirstName: '',
    supervisorEmail: '',
    supervisorPassword: '',
    supervisorLevel: '',
    supervisorGender: '',
    supervisorEstablishment: '',
    supervisorPhoto: '',
    supervisorBirthDate: '',
    supervisorPhone: '',
    AccountStatus: '',
  });
  const [intern, setIntern] = useState({
    internName: '',
    internFirstName: '',
    internEmail: '',
    internId: '',
    internPassword: '',
    internLevel: '',
    internGender: '',
    internEstablishment: '',
    internPhoto: '',
    internBirthDate: '',
    internPhone: '',
    internAccountStatus: '',
  });
  const role=localStorage.getItem('role')
    const userId=localStorage.getItem(role+'Id');
  useEffect(()=>{
    
    if(role=="intern")
        {
          axios.get(`http://localhost:3030/intern/getIntern/?id=${userId}`)
          .then(response=>{
            setUser(response.data.intern)
          })
        }
        if(role=="supervisor")
          {
            axios.get(`http://localhost:3030/supervisor/getSupervisorById/?id=${userId}`)
            .then(response=>{
              setUser(response.data.supervisor)
            })
          }
    axios.get('http://localhost:3030/education/getAllEducations/')
    .then((response)=>{
      setEducations(response.data.educations.filter((element,index)=>{
        return element.educationHolderId==localStorage.getItem("userEmail")
      }))
    })
    .catch(error=>{
      console.log(error)
    })
  },[role])

  const getCookies = (name) => {
    const cookieString = document.cookie;
    const cookies = cookieString.split(';').map(cookie => cookie.trim());
    
    for (const cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split('=');
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    
    return null; // If cookie with the given name is not found
  };
  const [educations,setEducations]=useState([])  
  const [experiencess,setExperiences]=useState([])

  const [education, setEducation] = useState({
    educationHolderId:localStorage.getItem("userEmail"),
    educationLevel: '',
    educationInstitution: '',
    educationStartDate: '',
    educationEndDate: '',
    educationDiploma: '',
    educationDistinction: ''
  });
  const [experience, setExperience] = useState({
    experienceHolderId: '',
    experienceCompany: '',
    experienceStartDate: '',
    experienceEndDate: '',
    experienceMission: '',
    experienceDescription: ''
  });
  const addEducation=()=>{
    
    axios.post("http://localhost:3030/education/addNewEducation/",education)
    .then(response=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
    setEducation({
      educationHolderId:localStorage.getItem("userEmail"),
      educationLevel: '',
      educationInstitution: '',
      educationStartDate: '',
      educationEndDate: '',
      educationDiploma: '',
      educationDistinction: ''
    })
    const educationStep=(document.getElementsByClassName("educationStep")[0]).cloneNode(true)
    const educations=(document.getElementsByClassName("educations")[0])
    educations.appendChild(educationStep)
  }
  const addExperience=()=>{
    const experienceStep=(document.getElementsByClassName("experienceStep")[0]).cloneNode(true)
    const experiences=(document.getElementsByClassName("experiences")[0])
    experiences.appendChild(experienceStep)
  }
  const updateProfile=()=>{
    if(role=='intern')
      {

      }
    if(role=='admin')
      {

      }
    if(role=='supervisor')
      {
        axios.put("http://localhost:3030/supervisor/updateSupervisor/",user)
        .then(response=>{
          if(response.data.status=='success')
            {
              window.location.reload()
            }
        })
        .catch(error=>{
          console.log(error)
        })
      }
  }
  



  const handleInputChange = (field, value) => {
    console.log(value)
    setUser(prevUser => ({
      ...prevUser,
      [field]: value
    }))
  }

  const handleEducationInputChange = (field, value) => {
    setEducation(prevEducation => ({
      ...prevEducation,
      [field]: value
    }))
  }
  const handleExperienceInputChange = (field, value) => {
    setExperience(prevExperience => ({
      ...prevExperience,
      [field]: value
    }))
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
            {role=="supervisor" && <div className='col-12 mt-2'>
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
                      value={user.supervisorFirstName}
                      placeholder='Entrez votre prénom'
                      onChange={event => {
                        handleInputChange('supervisorFirstName', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='lastNameInput' className='form-label'>
                      Nom de famille
                    </label>
                    <input
                      type='text'
                      value={user.supervisorName}
                      className='form-control'
                      id='lastNameInput'
                      placeholder='Entrez votre nom de famille'
                      onChange={event => {
                        handleInputChange('supervisorName', event.target.value)
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
                      value={user.supervisorEmail}
                      aria-describedby='emailHelp'
                      placeholder='Entrez votre adresse email'
                      onChange={event => {
                        handleInputChange('supervisorEmail', event.target.value)
                      }}
                    />
                    <div id='emailHelp' className='form-text'>
                      Nous ne partagerons jamais votre adresse email avec
                      quelqu'un d'autre.
                    </div>
                  </div>
           
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='GenderInput' className='form-label'>
                      Genre
                    </label>
                    <select
                      className='form-select'
                      id='GenderInput'
                      onChange={event => {
                        handleInputChange('supervisorGender', event.target.value)
                      }}
                    >
                      <option value='' disabled>Sélectionnez votre genre</option>
                      <option value="male" selected={user.supervisorGender === "Male"}>Homme</option>
                      <option value='female'>Femme</option>
                      <option value='other' >Autre</option>
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
                      value={user.supervisorEstablishment}
                      onChange={event => {
                        handleInputChange('supervisorEstablishment', event.target.value)
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
                      value={user.supervisorPhone}
                      placeholder='Entrez votre numéro de téléphone'
                      onChange={event => {
                        handleInputChange('supervisorPhone', event.target.value)
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>}
            {role=="intern" && <div className='col-12 mt-2'>
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
                      value={user.internFirstName}
                      placeholder='Entrez votre prénom'
                      onChange={event => {
                        handleInputChange('internFirstName', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='lastNameInput' className='form-label'>
                      Nom de famille
                    </label>
                    <input
                      type='text'
                      value={user.internName}
                      className='form-control'
                      id='lastNameInput'
                      placeholder='Entrez votre nom de famille'
                      onChange={event => {
                        handleInputChange('internName', event.target.value)
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
                      value={user.internEmail}
                      aria-describedby='emailHelp'
                      placeholder='Entrez votre adresse email'
                      onChange={event => {
                        handleInputChange('internEmail', event.target.value)
                      }}
                    />
                    <div id='emailHelp' className='form-text'>
                      Nous ne partagerons jamais votre adresse email avec
                      quelqu'un d'autre.
                    </div>
                  </div>
           
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='GenderInput' className='form-label'>
                      Genre
                    </label>
                    <select
                      className='form-select'
                      id='GenderInput'
                      onChange={event => {
                        handleInputChange('internGender', event.target.value)
                      }}
                    >
                      <option value='' disabled>Sélectionnez votre genre</option>
                      <option value="male" selected={user.internGender === "Male"}>Homme</option>
                      <option value='female'>Femme</option>
                      <option value='other' >Autre</option>
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
                      value={user.internEstablishment}
                      onChange={event => {
                        handleInputChange('internEstablishment', event.target.value)
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
                      value={user.internPhone}
                      placeholder='Entrez votre numéro de téléphone'
                      onChange={event => {
                        handleInputChange('internPhone', event.target.value)
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>}
            {role=="admin" && <div className='col-12 mt-2'>
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
                      value={user.adminFirstName}
                      placeholder='Entrez votre prénom'
                      onChange={event => {
                        handleInputChange('adminFirstName', event.target.value)
                      }}
                    />
                  </div>
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='lastNameInput' className='form-label'>
                      Nom de famille
                    </label>
                    <input
                      type='text'
                      value={user.adminName}
                      className='form-control'
                      id='lastNameInput'
                      placeholder='Entrez votre nom de famille'
                      onChange={event => {
                        handleInputChange('adminName', event.target.value)
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
                      value={user.adminEmail}
                      aria-describedby='emailHelp'
                      placeholder='Entrez votre adresse email'
                      onChange={event => {
                        handleInputChange('adminEmail', event.target.value)
                      }}
                    />
                    <div id='emailHelp' className='form-text'>
                      Nous ne partagerons jamais votre adresse email avec
                      quelqu'un d'autre.
                    </div>
                  </div>
           
                  <div className='mb-3 col-lg-5'>
                    <label htmlFor='GenderInput' className='form-label'>
                      Genre
                    </label>
                    <select
                      className='form-select'
                      id='GenderInput'
                      onChange={event => {
                        handleInputChange('adminGender', event.target.value)
                      }}
                    >
                      <option value='' disabled>Sélectionnez votre genre</option>
                      <option value="male" selected={user.adminGender === "Male"}>Homme</option>
                      <option value='female'>Femme</option>
                      <option value='other' >Autre</option>
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
                      value={user.adminEstablishment}
                      onChange={event => {
                        handleInputChange('adminEstablishment', event.target.value)
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
                      value={user.adminPhone}
                      placeholder='Entrez votre numéro de téléphone'
                      onChange={event => {
                        handleInputChange('adminPhone', event.target.value)
                      }}
                    />
                  </div>
                </div>
              </form>
            </div>}
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
                        handleEducationInputChange('educationLevel', event.target.value)
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
                        handleEducationInputChange(
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
                        handleEducationInputChange(
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
                        handleEducationInputChange(
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
                        handleEducationInputChange(
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
                        handleEducationInputChange(
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
        onChange={(event) => { handleExperienceInputChange('experienceCompany', event.target.value) }}
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
        onChange={(event) => { handleExperienceInputChange('experienceStartDate', event.target.value) }}
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
        onChange={(event) => { handleExperienceInputChange('experienceEndDate', event.target.value) }}
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
        onChange={(event) => { handleExperienceInputChange('experienceMission', event.target.value) }}
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
        onChange={(event) => { handleExperienceInputChange('experienceDescription', event.target.value) }}
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
     
      </div>
    </>
  )
}

export default Profil
