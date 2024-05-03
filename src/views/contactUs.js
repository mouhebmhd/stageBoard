import React, { useEffect, useState } from 'react'
import '../styles/manageProfil.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import avatar from '../../src/images/avatar.png'
import Navbar from '../components/navbar'
function ContactUs () {
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
          <h1 className='text-center pageTitle'>Contactez Nous </h1>
          <div className='col d-flex justify-content-center flex-column p-2 align-items-center'>
            <div
              className='profilPhotoContainer'
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className='col-12 mt-2'>
            <form className='col-12'>
  <div className="row justify-content-between">
    <div className='mb-3 col-lg-5'>
      <label htmlFor='fullNameInput' className='form-label'>
        Full Name
      </label>
      <input
        type='text'
        className='form-control'
        id='fullNameInput'
        placeholder='Enter your full name'
      />
    </div>
    <div className='mb-3 col-lg-5'>
      <label htmlFor='emailInput' className='form-label'>
        Email Address
      </label>
      <input
        type='email'
        className='form-control'
        id='emailInput'
        placeholder='Enter your email address'
      />
    </div>
    <div className='mb-3 col-lg-10'>
      <label htmlFor='messageInput' className='form-label'>
        Message
      </label>
      <textarea
        className='form-control'
        id='messageInput'
        rows='5'
        placeholder='Enter your message'
      ></textarea>
    </div>
  </div>
  <div className="col-12 d-flex justify-content-center">
  <button type='submit ' className='btn btn-success '>Envoyer votre message</button>

  </div>
</form>

            </div>
          </div>

          
        </div>
      
      </div>
    </>
  )
}

export default ContactUs
