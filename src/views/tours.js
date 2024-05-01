import React, { useState } from 'react';
import { Rating } from '@mui/material/';
import { BiExpandAlt } from "react-icons/bi";
import Navbar from '../components/navbar';
import  "../styles/tours.css";
import { IoLockClosed } from "react-icons/io5";
import { MdOutlinePageview } from "react-icons/md";

const pictures = [
  require("../images/uk.jpg"),
  require("../images/czech.jpg"),
  require("../images/finland.jpg"),
  require("../images/norway.jpg"),
];
const ratings = [4,3.5,2,5,1,3.5,4,2,4,3,2,1,5];
const prices = [27,38,24,32,155,201,75,100,45,78,28,32,50];

export default function Tours() {

  return (
    <>
    <Navbar></Navbar>
    <div className="tours p-2 m-0 mt-5 pt-5 " >
      <h1 className='text-center pageTitle'>Offres de stage</h1>
      <div className="row  m-0 p-0 toursList d-flex gap-3 justify-content-center" >
        {pictures.map((picture, index) => (
          <div className="card m-0 p-0 col-lg-3 col-md-4 col-sm-12"  key={index}>
            <img src="https://placehold.co/600x400" className="card-img-top" alt={`Tour ${index + 1}`} />
            <div className="card-body">
              <p className="card-text tourDescription fw-medium">Durée de Stage: <span className='fw-light'>6 mois</span></p>
              <p className="card-text tourDescription fw-medium">Description de Sujet : <br />
              <span className='fw-light'>Création de Workinlive.com, une plateforme de formation en ligne dédiée aux outils numériques.</span>
              </p>
              <p className="card-text tourDescription fw-medium">Domaine : <span className='fw-light'>Développement web</span> </p>
             <div className="container-fluid d-flex gap-2">
              <Rating
                name={`rating-${index}`}
                value={ratings[index]}
                precision={0.5}
                readOnly
                className='rating'
              />
              <p className="ratingValue fw-medium">{ratings[index]}</p>
             </div>
              
              
              <div className="container-fluid d-flex justify-content-between align-items-baseline">
                <p>Candidatures <span className='tourPrice'>{prices[index]}</span></p>
              </div>
              <div className="container-fluid d-flex flex-column row-gap-2">
              <button className="btn btn-danger m-0">
                <IoLockClosed className='mx-1'></IoLockClosed>
                Fermer la Candidature
              </button>
              <button className="btn btn-success">
                Consulter les Candidatures
              </button>
              <button className="btn btn-primary">
              <MdOutlinePageview  className='mx-1'></MdOutlinePageview >
                Consulter les détails 
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}
