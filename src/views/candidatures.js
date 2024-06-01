import React, { useEffect, useState } from 'react'
import '../styles/manageProfil.css'
import { Link, useParams } from 'react-router-dom';
import SupervisorsList from "../components/supervisorList"
import axios from 'axios'
import avatar from '../../src/images/avatar.png'
import Navbar from '../components/navbar'
import { useNavigate } from 'react-router-dom';
function Candidatures () {
  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};
const navigate=useNavigate()
  const [candidatures,setCandidatures]=useState([])
  const [candidatureCourante,setCandidature]=useState()
  const role=localStorage.getItem("role")
  useEffect(()=>{
    axios.get("http://localhost:3030/candidature/getAllCandidatures/")
    .then(response=>{
      if(response.data.status=="success")
        {
          console.log(response.data.candidatures)
          setCandidatures(response.data.candidatures)
        }
        if(role=='supervisor')
          {
            const userId=localStorage.getItem('supervisorId')
            setCandidatures(response.data.candidatures.filter((element,index)=>{
              return element.supervisorId==userId && element.applicationStatus!="en attente";
            }))

          }
          if(role=='intern')
            {
              const userId=localStorage.getItem('internId')
              setCandidatures(response.data.candidatures.filter((element,index)=>{
                return element.internId==userId && element.applicationStatus!="en attente";
              }))
  
            }
    })
    
   
  },[role])
  const modifierCandidature=(candidatureId,newCandidature)=>{
    axios.put("http://localhost:3030/candidature/updateCandidature/",newCandidature)
    .then(response=>{
      if(response.data.status=="success")
        {
          window.location.reload();
        }
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
                {candidature.applicationStatus=='en attente' && role=='admin' && <button className='btn btn-success'  onClick={()=>{
                 //accepter candidature 
                 modifierCandidature(candidature.id,{...candidature,"applicationStatus":"non affectée"})
                }} >Accepter Candidature</button>}
                {candidature.applicationStatus=='affectée' && role=='supervisor' && <button className='btn btn-success'  onClick={()=>{
                 //refuser candidature 
                 modifierCandidature(candidature.id,{...candidature,"applicationStatus":"Demande acceptée"})
                }} >Accepter Encadrement</button>}
                {role=='intern' && <button className='btn btn-primary'>Annuler Candidature</button>}
                {candidature.applicationStatus=='en attente' && role=='admin' && <button className='btn btn-danger' onClick={()=>{
                 //refuser candidature 
                 modifierCandidature(candidature.id,{...candidature,"applicationStatus":"refusée"})
                }}>Refuser Candidarure</button>}
                {role!='intern' && <Link to="/user/manageProfile"><button className='btn btn-dark'>Consulter le profil</button></Link>}
                {role=='supervisor' && candidature.applicationStatus=='affectée' && <button className='btn btn-danger' onClick={()=>{
                 //refuser candidature 
                 modifierCandidature(candidature.id,{...candidature,"applicationStatus":"non affectée"})
                }}>Refuser Encadrement</button>}
                {candidature.applicationStatus=='non affectée' && role=='admin' && <button className='btn btn-success'  
                 onClick={()=>{
                  setCandidature(candidature)
                  document.getElementById("modelOpener").click();
                 }}>Affecter Stagiaire</button>}
                 {candidature.applicationStatus=='Demande acceptée' && role=='admin' && <button className='btn btn-primary'  
                 onClick={()=>{
                  navigate("/offer/attestationOffre/"+candidature.projectId)
                 }}>Imprimer Lettre d'affectation</button>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className='d-none' id='modelOpener' data-bs-toggle="modal" data-bs-target="#exampleModal" ></button>
          <SupervisorsList candidature={candidatureCourante}/>
    </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default Candidatures
