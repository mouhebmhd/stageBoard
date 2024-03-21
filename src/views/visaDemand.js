import React, { useRef, useState } from 'react'
import Navbar from '../components/navbar'
import { FaPlus } from 'react-icons/fa6'
import { FaMinus } from 'react-icons/fa6'
import { MdNavigateNext } from 'react-icons/md'
import AuthEmailAndOtp from '../components/authEmailAndOtp'
import Calendar from 'react-calendar'
import { GrLinkNext } from "react-icons/gr";
import { FaPerson } from "react-icons/fa6";
import { GrLinkPrevious } from "react-icons/gr";

import '../styles/visaDemand.css'
const countries = require('../dataSources/countries')

export default function VisaDemand () {
  const [activeStates, setActiveStates] = useState([
    'visaStepActive',
    'visaStepNotActive',
    'visaStepNotActive',
    'visaStepNotActive'
  ])
  const [totalCost, setTotalCost] = useState(0)
  const [travelersVector, setTravelersVector] = useState([])
  const [countriesCopy, setCountriesCopy] = useState(countries)
  const [activePerson,setActivePerson]=useState(0)
  const stepOne=useRef(null)
  const stepTwo=useRef(null)
  const stepThree=useRef(null)
  const stepFour=useRef(null)
  const modalOpener=useRef(null)
  const HandleActivePersonPlus=()=>{
    if(activePerson<visaData.noOfTraverlers)
    {
      setActivePerson(activePerson+1)
    }
    
  }
  const HandleActivePersonMinus=()=>{
    if(activePerson>=1)
    {
      setActivePerson(activePerson-1)
    }
    
  }
  const [visaData, setVisaData] = useState({
    country: '',
    visaType: '',
    visaDate: '',
    noOfTraverlers: 0
  })
  const changeVisaDate = event => {
    let date = new Date(event)
    var day = date.getDate().toString().padStart(2, '0')
    var month = (date.getMonth() + 1).toString().padStart(2, '0')
    var year = date.getFullYear()
    date = day + '-' + month + '-' + year

    setVisaData({ ...visaData, visaDate: date })
  }
  const setTravelers = updateValue => {
    let noOfTraverlers = visaData.noOfTraverlers + updateValue
    if (noOfTraverlers >= 0) {
      setVisaData({ ...visaData, noOfTraverlers })
    }
    let v=[]
    for(var i=0;i<noOfTraverlers;i++)
    {
      v.push(0)
    }
    setTravelersVector(v)
    calculateCost()
  }
  const searchCountry = event => {
    setCountriesCopy(
      countries.filter(country => {
        return (
          country.countryName
            .toLowerCase()
            .indexOf(event.target.value.toLowerCase()) != -1
        )
      })
    )
  }
  const calculateCost = () => {
    const visaCost = countries.filter(element => {
      return element.countryName === visaData.country
    })
    setTotalCost(visaCost[0].pricePerPerson * visaData.noOfTraverlers)
  }
  return (
    <>
      <Navbar />
      <div className='visaContainer row d-flex justify-content-center h-100'>
        <div className='container VisaStepsContainer  d-flex flex-wrap p-2 px-0 '>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[0]
            }
            onClick={() => {
              setActiveStates([
                'visaStepActive',
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepNotActive'
              ])
              stepOne.current.classList.remove("d-none")
              stepTwo.current.classList.add("d-none")
              stepThree.current.classList.add("d-none")
            }}
          >
            <span>Step 1 :</span> Select the country and visa
          </button>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[1]
            }
            onClick={() => {
              setActiveStates([
                'visaStepNotActive',
                'visaStepActive',
                'visaStepNotActive',
                'visaStepNotActive'
              ])
              stepOne.current.classList.add("d-none")
              stepTwo.current.classList.remove("d-none")
              stepThree.current.classList.add("d-none")
            }}
          >
            <span>Step 2 :</span> Date and number of passengers
          </button>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[2]
            }
            onClick={() => {
              setActiveStates([
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepActive',
                'visaStepNotActive'
              ])
              stepOne.current.classList.add("d-none")
              stepTwo.current.classList.add("d-none")
              stepThree.current.classList.remove("d-none")
            }}
          >
            <span>Step 3 :</span> Data of passengers
          </button>
          <button
            className={
              'col-lg-3 col-md-6 col-sm-12 visaStep ' + activeStates[3]
            }
            onClick={() => {
              setActiveStates([
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepNotActive',
                'visaStepActive'
              ])
            }}
          >
            <span>Step 4 :</span> Appointment and Payment
          </button>
        </div>
        <section className='stepOne d-flex justify-content-center' ref={stepOne}>
          <div className='visaStep1Container  col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              Select the country and type of visa.
            </h1>
            <div className='container col-lg-10 col.sm-12 searchZone '>
              <input
                type='text'
                className='searchInput'
                placeholder='search for a country'
                onChange={event => {
                  searchCountry(event)
                }}
              />
            </div>
            <div className='visaCountriesCountainer  mt-2 col-12 row-gap-2 column-gap-2 d-flex flex-wrap justify-content-center m-0 p-0'>
              {countriesCopy.map((country, index) => {
                return (
                  <div
                    key={index}
                    className='card countryVisaCard col-lg-3 col-md-4 col-sm-5 pb-2'
                  >
                    <img
                      src={require(`../images/countriesAMFlags/${country.path}`)}
                      className='card-img-top p-0 countryImageV'
                      alt='...'
                    />
                    <div className='card-footer countryNameOverlay'>
                      <span className='countryName'>{country.countryName}</span>
                    </div>
                    <div className='card-footer d-flex justify-content-center'>
                      <div className='dropdown'>
                        <div className='choices card-footer'>choices here</div>
                        <div className='dropdown'>
                          <button
                            className='btn btn-secondary dropdown-toggle startVisaButton'
                            type='button'
                            id='dropdownMenuButton'
                            data-bs-toggle='dropdown'
                            aria-haspopup='true'
                            aria-expanded='false'
                          >
                            Start a Visa Demand
                          </button>
                          <div
                            className='dropdown-menu p-2 dropDownContainer'
                            id='dropdown'
                            aria-labelledby='dropdownMenuButton'
                          >
                            {country.visaTypes.map((type, index) => {
                              return (
                                <button
                                  key={index}
                                  className='btn btn-primary mt-2 visaTypeButton'
                                  onClick={() => {
                                    setVisaData({
                                      ...visaData,
                                      country: country.countryName,
                                      visaType: type
                                    })
                                    setActiveStates([
                                      'visaStepNotActive',
                                      'visaStepActive',
                                      'visaStepNotActive',
                                      'visaStepNotActive'
                                    ])
                                    stepOne.current.classList.add("d-none")
                                    stepTwo.current.classList.remove("d-none")
                                    stepThree.current.classList.add("d-none")
                                  }}
                                >
                                  {type}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className='stepTwo d-none d-flex align-items-center flex-column' ref={stepTwo}>
          <div className='visaStep1Container col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              What is the expected travel date?
            </h1>
            <div className='calendarContainer container-fluid p-2'>
              <Calendar
                className='calendar h-100 w-100'
                onChange={event => {
                  changeVisaDate(event)
                }}
                value={new Date()}
              />
            </div>
            <h1 className='text-center mt-2'>Expected Travel Date :</h1>
            <p className='travelDate text-center'>{visaData.visaDate}</p>
          </div>
          <div className='visaStep1Container col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              Choose the number of travelers?
            </h1>
            <div className='row p-2'>
              <div className=' visaDataContainer row d-flex justify-content-center m-0'>
                <div className='row travelersInfosContainer d-flex  m-0 align-items-center'>
                  <div className='col infoContainer'>Number of travelers</div>
                  <div className='col d-flex m-0  infoContainer justify-content-around'>
                    <button className='btn btn-outline'>
                      <FaMinus
                        className='setTravelersButton'
                        onClick={() => {
                          setTravelers(-1)
                        }}
                      />
                    </button>
                    <p className='numberOfTrav m-0 p-0'>
                      {visaData.noOfTraverlers}
                    </p>
                    <button className='btn btn-outline'>
                      <FaPlus
                        className='setTravelersButton'
                        onClick={() => {
                          setTravelers(1)
                        }}
                      />
                    </button>
                  </div>
                  <div className='col infoContainer m-0 p-0 '>
                    <span className='cost mx-2'>
                      {' '}
                      {totalCost}{' '}
                    </span>{' '}
                    Saudi Riyal
                  </div>
                </div>
                <div className='row travelersInfosContainer d-flex  m-0  align-items-center'>
                  <div className='col infoContainer'>Do you have a coupon?</div>
                  <div className='col  m-0 p-0 infoContainer couponContainer '>
                    <input
                      type='text'
                      name='couponValue'
                      id='couponValue'
                      placeholder='please write your coupon'
                    />
                  </div>
                  <div className='col infoContainer m-0 '>
                    <button
                      className='btn btn-primary applyCouponBtn'
                      onClick={calculateCost}
                    >
                      Apply Coupon
                    </button>
                  </div>
                </div>
                <div className='row totalCost  m-0 p-2 text-center'>
                  <p className='totalCostHeader'>Total Cost</p>
                  <p className='travelDate text-center'>
                    {totalCost} Saudi Riyal
                  </p>
                  <p className='alert alert-success text-success h2'>
                    The price includes: embassy fees, service charges, and tax.
                  </p>
                </div>
              </div>
            </div>
            <div className='container-fluid p-2 text-center r'>
              <button
                className='btn btn-primary p-2 submitBTN'
                onClick={() => {
                  setActiveStates([
                    'visaStepNotActive',
                    'visaStepNotActive',
                    'visaStepActive',
                    'visaStepNotActive'
                  ])
               
                  stepOne.current.classList.add("d-none")
                  stepTwo.current.classList.add("d-none")
                  stepThree.current.classList.remove("d-none")
                  modalOpener.current.click()
                }}
              >
                Next Step : Fill passenger's data{' '}
              </button>
            </div>
          </div>
        </section>
        <AuthEmailAndOtp className="d-none" ref={modalOpener}></AuthEmailAndOtp>
        <section className='stepTwo d-none d-flex align-items-center flex-column' ref={stepThree}>
          <div className='visaStep1Container col-lg-10 mt-2 p-0 bg-white py-2'>
            <h1 className='text-center fs-3'>
              Filling Passenger's data
            </h1>
            <div className="container-fluid d-flex column-gap-5 justify-content-center">
              {
              travelersVector.map((element,index)=>{
                if(index==activePerson){
                  return (
                    <FaPerson className="fs-1  personAvatar activePersonAvatar" key={'person' +index}></FaPerson>
                  )}
                else if (index<activePerson){
                  return (
                  <FaPerson className="fs-1  personAvatar donePersonAvatar" key={'person' +index}></FaPerson>
                )}
                else
                {
                  return (
                    <FaPerson className="fs-1  personAvatar " key={'person' +index}></FaPerson>
                  )
                }
               
              })
              }
            </div>
            <div className='calendarContainer container-fluid p-2'>
            <form>
  <div className="form-group mt-2">
    <label  className="specialText" for="inputName">Name</label>
    <input type="text" className="form-control" id="inputName" placeholder="Enter your name" />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" for="inputFirstName">First Name</label>
    <input type="text" className="form-control" id="inputFirstName" placeholder="Enter your first name" />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" for="inputGender">Gender</label>
    <select className="form-control" id="inputGender">
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" for="inputEmail">Email address</label>
    <input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" for="inputPhoneNumber">Phone Number</label>
    <input type="tel" className="form-control" id="inputPhoneNumber" placeholder="Enter your phone number" />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" for="inputDateOfBirth">Date of Birth</label>
    <input type="date" className="form-control" id="inputDateOfBirth" />
  </div>
  <div className="form-group mt-2">
    <label  className="specialText" for="inputPassportScan">Passport Scan</label>
    <br />
    <input type="file" className="form-control-file" id="inputPassportScan" />
    <small id="passportScanHelp" className="form-text text-muted">Please upload a scan of your passport.</small>
  </div>
  <div className="container-fluid d-flex justify-content-center column-gap-1">
  <button type="button" className="btn nextPerson" onClick={HandleActivePersonMinus}><GrLinkPrevious className='mx-2'></GrLinkPrevious> Previous Person</button>

  <button type="button" className="btn nextPerson" onClick={HandleActivePersonPlus}>Next Person  <GrLinkNext className='mx-2'></GrLinkNext></button>
  </div>
</form>
            </div>
            </div>
            </section>
      </div>
    </>
  )
}
