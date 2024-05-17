import React, { useEffect, useState } from 'react'
import '../styles/manageProfil.css'
import { Link, useParams } from 'react-router-dom';

import axios from 'axios'
import avatar from '../../src/images/avatar.png'
import Navbar from '../components/navbar'
function Candidatures () {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};
  const [candidatures,setCandidatures]=useState([])
  const role=localStorage.getItem("role")
  useEffect(()=>{
    axios.get("http://localhost:3030/candidature/getAllCandidatures/")
    .then(response=>{
      if(response.data.status=="success")
        {
          console.log(response.data.candidatures)
          setCandidatures(response.data.candidatures)
        }

    })
  },[role])
  const refuserCandidature=(candidatureId,newCandidature)=>{
    axios.put("http://localhost:3030/candidature/updateCandidature/",{newCandidature})
    .then(response=>{
      console.log(response.data)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <>
      <Navbar></Navbar>
      <div className='container profilUpdateContainer'>
        <div className='row d-flex flex-column'>
          <h1 className='text-center pageTitle'>Gestion de Candidatures</h1>
          <div className='col d-flex justify-content-center flex-column p-2 align-items-center'>
            <div
              className='profilPhotoContainer'
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className='col-12 mt-2'>
            <div className="container">
      <h1 className='specialText pageTitle  text-center'>Candidatures</h1>
      <table className="table">
        <thead>
          <tr className='specialText'>
            <th className='specialText' scope="col">Candidature</th>
            <th className='specialText' scope="col">Candidat</th>
            <th className='specialText' scope="col">Projet</th>
            <th className='specialText' scope="col">Date de Candidature</th>
            <th className='specialText' scope="col">État de Candidature</th>
          </tr>
        </thead>
        <tbody>
          {candidatures.map((candidature, index) => (
            <tr key={index}>
              <td>{candidature.id}</td>
              <td>{candidature.internName+" "+candidature.internFirstName}</td>
              <td>{candidature.projectName}</td>
              <td>{formatDate(candidature.applicationDate)}</td>
              <td>{candidature.applicationStatus}</td>
              <td className='d-flex column-gap-2'>
                {candidature.applicationStatus=='en attente' && role=='admin' && <button className='btn btn-success'> Accepter</button>}
                {candidature.applicationStatus=='en attente' && role=='supervisor' && <button className='btn btn-success'>Approuver Demande</button>}
                {role=='intern' && <button className='btn btn-primary'>Annuler Candidature</button>}
                {candidature.applicationStatus=='en attente' &&role=='admin' && <button className='btn btn-danger' onClick={()=>{
                  refuserCandidature(candidature.id,{...candidature,"applicationStatus":"refusée"})
                }}>Refuser</button>}
                {role!='intern' && <Link to="/user/manageProfile"><button className='btn btn-dark'>Consulter le profil</button></Link>}
                {role=='supervisor' && <button className='btn btn-danger'>Refuser Demande</button>}
              
              
              
              
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

            </div>
          </div>

          
        </div>
      
      </div>
    
    </>
  )
}

export default Candidatures
