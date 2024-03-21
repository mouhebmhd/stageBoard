import React, { useState } from 'react';
import { Rating } from '@mui/material/';
import { BiExpandAlt } from "react-icons/bi";

import  "../styles/tours.css";

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
    <div className="tours p-2 m-0 " >
      <h1 id='tours'>Offres de<span className="specialText"> Stages</span></h1>
      <div className="row  m-0 p-0 toursList d-flex gap-3 justify-content-center" >
        {pictures.map((picture, index) => (
          <div className="card m-0 p-0 col-lg-3 col-md-4 col-sm-12"  key={index}>
            <img src={picture} className="card-img-top" alt={`Tour ${index + 1}`} />
            <div className="card-body">
              <h5 className="card-title tourDuration fw-normal">7 days </h5>
              <p className="card-text tourDescription fw-medium">Country Here</p>
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
                <a href="#" className="btn btn-primary s-flex justify-content-end  m-1" id="viewTourButtons"> Postuler &nbsp;&nbsp;<BiExpandAlt className='fs-5 '/></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
