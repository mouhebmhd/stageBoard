import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "../styles/Subscribe.css"
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";
import { FiLogIn } from "react-icons/fi";

export default function Subscribe() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [nationality, setNationality] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [step, setStep] = useState(1);
  const [countries,setCountries]=useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/all")
        .then(response=>{
           const  countriesList=response.data.map(country=>{return country.name.common})
            setCountries(countriesList)
        })
        .catch(error=>{
            console.log("failed to load countries")
        })
    },[])
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle the form submission, e.g., send data to a server
    console.log({
      firstName,
      lastName,
      nationality,
      password,
      confirmPassword,
      birthdate,
      gender,
      phoneNumber,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className='formContainer m-0 p-0'>
      <div className='container-fluid d-flex justify-content-center form '>
        <form className='col-6' onSubmit={handleSubmit}>
          <div className='avatar'></div>
          {step === 1 && (
            <>
              <div className='mb-3'>
                <label htmlFor='firstNameInput' className='form-label'>
                  First Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='firstNameInput'
                  placeholder='Enter your first name'
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='lastNameInput' className='form-label'>
                  Last Name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='lastNameInput'
                  placeholder='Enter your last name'
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='nationalityInput' className='form-label'>
                  Nationality
                </label>
                <select
                    name="nationalityInput"
                    id="nationalityInput"
                    onChange={(e) => setNationality(e.target.value)}
                    className='form-control'
                    >
                    {countries.map((country, index) => {
                        return (
                        <option key={index} value={country}>
                            {country}
                        </option>
                        );
                    })}
                    </select>
             
              </div>
             <div className="col-12 d-flex justify-content-end">
             <button type='button' className='btn btn-primary nextBtn' onClick={handleNextStep}>
             Next Step
              <GrLinkNext className='mx-1'></GrLinkNext>
              </button>
             </div>
            </>
          )}
          {step === 2 && (
            <>
              <div className='mb-3'>
                <label htmlFor='passwordInput' className='form-label'>
                  Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='passwordInput'
                  placeholder='Enter your password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='confirmPasswordInput' className='form-label'>
                  Confirm Password
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='confirmPasswordInput'
                  placeholder='Confirm your password'
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='birthdateInput' className='form-label'>
                  Birthdate
                </label>
                <input
                  type='date'
                  className='form-control'
                  id='birthdateInput'
                  value={birthdate}
                  onChange={(e) => setBirthdate(e.target.value)}
                />
              </div>
              <div className='mb-3'>
                <label htmlFor='genderInput' className='form-label'>
                  Gender
                </label>
                <select
                  className='form-select'
                  id='genderInput'
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option value=''>Select gender</option>
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                  <option value='other'>Other</option>
                </select>
              </div>
              <div className='mb-3'>
                <label htmlFor='phoneInput' className='form-label'>
                  Phone Number
                </label>
                <input
                  type='tel'
                  className='form-control'
                  id='phoneInput'
                  placeholder='Enter your phone number'
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="col-12 d-flex gap-2 justify-content-end">
                <button type='button' className='btn btn-secondary mr-2 previousBtn p-2' onClick={handlePrevStep}>
                <GrLinkPrevious className='mx-1'></GrLinkPrevious>
                Previous
              </button>
              <button type='submit' className='btn btn-primary submitBtn'>
                Sign Up
                <FiLogIn className='mx-1 fs-4'></FiLogIn>

              </button>
              </div>
              
            </>
          )}
        </form>
      </div>
    </div>
  );
}
