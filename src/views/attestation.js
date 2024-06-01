import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import userImage from "../images/fingerprint.png";
import axios from 'axios';

export default function UpdateOffer() {
  const projectId = useParams().id;
  const intern = {
    internName: 'Ben Youssef',
    internFirstName: 'Imen',
    internEmail: 'YoussefImen@gmail.com',
    internId: 2,
    internPassword: '$2b$10$ys/AC3XikzRTbsPiwlwHTumZIqQdAg1QlUbzqWHn3Ym...',
    internLevel: "Cycle d'ingenieurs",
    internGender: 'Male',
    internEstablishment: 'ABC University',
    internPhoto: 'john_photo.jpg',
    internBirthDate: '1998-10-15',
    internPhone: '98123456',
    internAccountStatus: 'frozen'
  };
  
  const [interns, setInterns] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [project, setProject] = useState({
    projectName: '',
    projectDescription: '',
    projectDuration: '',
    projectProgress: '',
    projectDomain: '',
    startDate: Date.now()
  });

  useEffect(() => {
    axios.get("http://localhost:3030/intern/getAllInterns")
      .then(response => {
        if (response.data.status === 'success') {
          setInterns(response.data.interns);
        }
      });

    axios.get('http://localhost:3030/supervisor/getAllSupervisors/')
      .then((response) => {
        setSupervisors(response.data.supervisors);
      });

    axios.get(`http://localhost:3030/project/getProject/?id=${projectId}`)
      .then(response => {
        if (response.data.status === "success") {
          setProject(response.data.project);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }, [projectId]);

  const updateOffer = () => {
    console.log(project);
    axios.put("http://localhost:3030/offer/updateOffer/", { projectId, project })
      .then(response => {
        if (response.data.status === "success") {
          window.location.reload();
        } else {
          // Handle error
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <>
      <div className='avatar' style={{ backgroundImage: `url(${userImage})` }}>
          </div>
          <h1 className='h1 specialText pageTitle text-center mt-2'>Lettre d'affectation</h1>    
    <div className=" d-flex ">
        <div className='container-fluid form'>
        <form className='col-12  p-4'>
              
          <div className='mb-3'>
            <label className='form-label'>Nom du projet</label>
            <p className=''>{project.projectName}</p>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Description du projet</label>
            <p className=''>{project.projectDescription}</p>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Durée du projet (en mois)</label>
            <p className=''>{project.projectDuration} Mois</p>
          </div>
         
          <div className='mb-3'>
            <label className='form-label'>Date de début</label>
            <p className=''>{new Date(project.startDate).toISOString().split('T')[0]}</p>
          </div>
          <div className='mb-3'>
            <label className='form-label'>Encadrant</label>
            <p className=''>M. Youssef Trabelsi </p>
          </div>
         
        </form>
      </div>
      <div className='container-fluid d-flex justify-content-center form'>
      <form className='col-12 p-4'>
          {intern && (
            <>
              <div className='mb-3'>
                <label className='form-label'>Nom</label>
                <p className=''>{intern.internName}</p>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Prénom</label>
                <p className=''>{intern.internFirstName}</p>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Email</label>
                <p className=''>{intern.internEmail}</p>
              </div>
              
           
              <div className='mb-3'>
                <label className='form-label'>Niveau</label>
                <p className=''>{intern.internLevel}</p>
              </div>
              
              <div className='mb-3'>
                <label className='form-label'>Établissement</label>
                <p className=''>{intern.internEstablishment}</p>
              </div>
              
              <div className='mb-3'>
                <label className='form-label'>Date de naissance</label>
                <p className=''>{new Date(intern.internBirthDate).toISOString().split('T')[0]}</p>
              </div>
              <div className='mb-3'>
                <label className='form-label'>Téléphone</label>
                <p className=''>{intern.internPhone}</p>
              </div>
            
            </>
          )}
          
        </form>
        
      </div>
      
      </div><div className="container-fluid d-flex justify-content-center">
        <button type='button' className='btn btn-primary submitBTN ' onClick={(event) => { event.preventDefault(); updateOffer(); }}>
           Imprimer Lettre d'affectation
          </button>
        </div></>
    
      
  );
}
