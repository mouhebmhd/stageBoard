import React, { useRef, useState } from 'react';
import { BsFillPlayFill } from "react-icons/bs";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import videoMp4 from "../videos/adsVideo.mp4";
import videoWebm from "../videos/adsVideo.webm";
import "../styles/discover.css";

export default function Discover() {
  const videoRef = useRef(null);
  const steps = ['Step 1', 'Step 2', 'Step 3'];
  const [activeStep, setActiveStep] = useState(0);
  const stepsTitles = ['Explorez les opportunités', 'Soumettez votre candidature', 'Préparez-vous pour votre stage'];
  const stepsContent = [
      'Découvrez les différentes opportunités de stage disponibles chez nous',
      'Soumettez votre candidature avec les informations et documents requis',
      'Recevez un e-mail de confirmation et préparez-vous pour votre prochain stage'
  ];
  const playVideo = () => {
    videoRef.current.play();
  };

  return (
    <div className="guide p-0 container-fluid mt-5 "  >
      <div className="row m-0">
            <div className="col-lg-6 col-md-12 col-sm-12 guideText p-3  d-flex flex-column justify-content-center align-items-center" id="discover">
                <h1 className='guideTitle'>Découvrez nos opportunités de stage</h1>
                <p className='guideDescription'>Apprenez-en davantage sur nos programmes de stage dans une vidéo de trois minutes</p>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 guideVideo d-flex justify-content-center align-items-center">
                <div className="playButtonContainer">
                    <button className='btn playButton' onClick={playVideo}>
                        <BsFillPlayFill />
                    </button>
                </div>
                <video id="internshipVideo" loop className='video' ref={videoRef}>
                    <source src={videoMp4} type='video/mp4'/>
                    <source src={videoWebm} type='video/webm'/>
                </video>
            </div>
        </div>
      <div className="row m-0 mt-5 p-2 d-flex justify-content-center ">
        <div className="col-lg-10 col-sm-12 p-3 stepsContainer">
          <div className="col-12">
          <h1 className='text-center  mb-5'>Comment   <span className="specialText">Postuler</span> a nos <span className='specialText'>Offres </span> se stages ?</h1>
          </div>
       
          <div className="row m-0 p-0">
  {steps.map((label, index) => (
    <div key={label} className="col-lg-4 col-md-11">
      <div className="step d-flex justify-content-center flex-column align-items-center">
        <button className="stepButton">
          <div className="stepTextContainer">
            <span className="stepText">{label}</span>
          </div>
        </button>
        <div className="stepDescription d-flex flex-column align-items-center justify-content-center m-2">
          <h3>{stepsTitles[index]}</h3>
          <p className='stepContent'>{stepsContent[index]}</p>
        </div>
      </div>
    </div>
  ))}
</div>


               
               </div>
             </div>
             
              
         
        </div>
  );
}
