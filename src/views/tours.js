import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Rating } from '@mui/material/';
import { BiExpandAlt } from "react-icons/bi";
import Navbar from '../components/navbar';
import  "../styles/tours.css";
import { IoLockClosed } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { MdOutlinePageview } from "react-icons/md";
import axios from 'axios';
const Months=["Janvier","Fevrier","Mars","Avril","Mai","Juin","Juillet","Aout","Septembre","Octobre","Novembre","Decembre"];
const deleteProject=(projectId)=>{
  axios.delete(`http://localhost:3030/project/deleteProject/?id=${projectId}`)
  .then(response=>{
    if(response.data.status=='success')
      {
        window.location.reload()
      }
  })
}
const updateOffer=(offerId,field,value,offer)=>{
  axios.put("http://localhost:3030/offer/updateOffer/",{projectId:offerId,project:{...offer,[field]:value}})
  .then(response=>{
    console.log(response)
    if(response.data.status=='success')
      {
        window.location.reload()
      }
  })
  .catch(error=>{
    console.log(error)
  })
}
const ratings = [4,3.5,2,5,1,3.5,4,2,4,3,2,1,5];
const userToken=localStorage.getItem("currentUser")
const role=localStorage.getItem("role")
export default function Tours() {
  const navigate=useNavigate();
  const [offers,setOffers]=useState([])
  useEffect(()=>{
  axios.get("http://localhost:3030/project/getProjects/")
  .then((response)=>{
    setOffers((response.data.projects))
    const userId=(localStorage.getItem("supervisorId"))
    console.log(response.data.projects.filter((element,index)=>{return element.supervisorId==userId}))
  })
  .catch(error=>{
    console.log(error)
  })
  },[userToken]);
  const getCookies = (name) => {
      const cookieString = document.cookie;
      const cookies = cookieString.split(';').map(cookie => cookie.trim());
      
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split('=');
        if (cookieName === name) {
          const decodedValue = decodeURIComponent(cookieValue);

// Parse the JSON string into an object
        const restoredObject = JSON.parse(decodedValue);
          return (restoredObject);
        }
      }
      
      return null; // If cookie with the given name is not found
    };
  const addCandidature=(projectId)=>{
   const currentUserToken=(getCookies('currentUser').token)
    axios.post("http://localhost:3030/candidature/addCandidature/",{internToken:currentUserToken,projectId})
    .then(response=>{
      console.log(response.data)
    })
  }
  return (
    <>
    <Navbar></Navbar>
    <div className="tours p-2 m-0 mt-5 pt-5 " >
      <div className="col-12 p-2 d-flex justify-content-between">
      <h1 className='text-center pageTitle'>Offres de stage</h1>
     {role=='admin' && 
      <Link to="/addOffer"> <button className="btn btn-primary submitBTN m-0">
                Nouvelle Offre +
              </button>
      </Link>}
      </div>
      <div className="row  m-0 p-0 toursList d-flex gap-3 justify-content-center" >
        {offers.map((offer, index) => (
          <div className="card m-0 p-0 col-lg-3 col-md-4 col-sm-12"  key={index}>
            <img src="https://placehold.co/600x400" className="card-img-top" alt={`Tour ${index + 1}`} />
            <div className="card-body">
              <p className="card-text tourDescription fw-medium">Titre de Sujet: <span className='fw-light'>{offer.projectName} </span></p>
              <p className="card-text tourDescription fw-medium">Date début: <span className='fw-light'>{  new Date(offer.startDate).getDate()+' '+Months[new Date(offer.startDate).getMonth()]+' '+new Date(offer.startDate).getFullYear()}</span></p>
              <p className="card-text tourDescription fw-medium">Durée de Stage: <span className='fw-light'>{offer.projectDuration} mois</span></p>
              <p className="card-text tourDescription fw-medium">Description de Sujet : <br />
              <span className='fw-light'>{offer.projectDescription}</span>
              </p>
              <p className="card-text tourDescription fw-medium">Domaine : <span className='fw-light'>{offer.projectDomain || "Developpement Informatique "}</span> </p>
            

              
              
              <div className="container-fluid d-flex justify-content-between align-items-baseline">
                <p>Statut du projet  <span className='tourPrice'>{offer.projectStatus}</span></p>
              </div>
              <div className="container-fluid d-flex flex-column row-gap-2">
              {offer.projectStatus!="Candidature Fermée" && role=='admin' && <button className="btn btn-warning m-0" onClick={(event=>{
                event.preventDefault();
                updateOffer(offer.projectId,"projectStatus","Candidature Fermée",offer)
              })}>
                <IoLockClosed className='mx-1'></IoLockClosed>
                Fermer la Candidature
              </button>}
             
              {role=='admin' && 
              <button type='button' className="btn btn-dark m-0" onClick={(event)=>{event.preventDefault();navigate("/offer/updateOffer/"+offer.projectId)}}>
                <IoLockClosed className='mx-1'></IoLockClosed>
                Modifier  l'offre
              </button>}
              {offer.projectStatus!="Candidature Fermée" && role=='intern' && 
              <button type='button' className="btn btn-success m-0" onClick={(event)=>{event.preventDefault();addCandidature(offer.projectId)}}>
                <IoLockClosed className='mx-1'></IoLockClosed>
                Postuler Maintenant 
              </button>}
              {role=='admin' && 
              <button className="btn btn-danger" onClick={()=>{deleteProject(offer.projectId)}}>
              <MdOutlinePageview  className='mx-1'></MdOutlinePageview >
                Supprimer le projet 
              </button>}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    </>
  );
}
