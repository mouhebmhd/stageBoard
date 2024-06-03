import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import userImage from "../images/fingerprint.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function AddOffer(props) {
  const [project, setProject] = useState({
    projectName: '',
    projectDescription: '',
    projectDuration: '',
    projectStatus: 'Candidature Ouverte',
    projectProgress: '',
    startDate: '',
    supervisorId: '2',
    internId: '2'
  });
  const navigate=useNavigate()
  const handleInputChange = (field, value) => {
    setProject({ ...project, [field]: value });
  };

  const createProject = (event) => {
    event.preventDefault();
    console.log(project)

    axios.post("http://localhost:3030/project/addProject/", project)
      .then(connectResult => {
        console.log(connectResult)
        if(connectResult.data.status=="success")
          {
            navigate("/tours")
            window.location.reload();
          }
      })
      .catch(error => {
        console.log(error)
      })
  };

  return (
    <div className='formContainer m-0 p-0' style={{ zIndex: 2 }}>

      <div className='container-fluid d-flex justify-content-center form'>

        <form className='col-6'>
          <div className='avatar' style={{ backgroundImage: `url(${userImage})` }}>
          </div>
          <h1 className='h1 specialText pageTitle text-center mt-2'>Créer un nouveau projet</h1>
          <h1 className="text-success d-none" id="successMessage">Le projet a été créé avec succès.</h1>
          <h1 className='text-danger d-none' id="errorMessage">La création du projet a échoué. Veuillez réessayer ultérieurement.</h1>
          <div className='mb-3'>
            <label htmlFor='projectNameInput' className='form-label'>
              Nom du projet
            </label>
            <input
              type='text'
              className='form-control'
              id='projectNameInput'
              placeholder='Entrez le nom du projet'
              onChange={(event) => { handleInputChange('projectName', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='projectDescriptionInput' className='form-label'>
              Description du projet
            </label>
            <textarea
              className='form-control'
              id='projectDescriptionInput'
              rows='3'
              placeholder='Entrez la description du projet'
              onChange={(event) => { handleInputChange('projectDescription', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='projectDurationInput' className='form-label'>
              Durée du projet (en mois)
            </label>
            <input
              type='number'
              className='form-control'
              id='projectDurationInput'
              placeholder='Entrez la durée du projet'
              onChange={(event) => { handleInputChange('projectDuration', event.target.value) }}
            />
          </div>
          
          <div className='mb-3'>
            <label htmlFor='projectProgressInput' className='form-label'>
              Progrès du projet (%)
            </label>
            <input
              type='number'
              className='form-control'
              id='projectProgressInput'
              placeholder='Entrez le progrès du projet'
              onChange={(event) => { handleInputChange('projectProgress', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='projectProgressInput' className='form-label'>
              Domaine du projet 
            </label>
            <input
              type='text'
              className='form-control'
              id='projectProgressInput'
              placeholder='Entrez le domaine du projet'
              onChange={(event) => { handleInputChange('projectDomain', event.target.value) }}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='startDateInput' className='form-label'>
              Date de début
            </label>
            <input
              type='date'
              className='form-control'
              id='startDateInput'
              onChange={(event) => { handleInputChange('startDate', event.target.value) }}
            />
          </div>
         
          
          <button type='button' className='btn btn-primary submitBTN' onClick={(event) => { createProject(event) }}>
            Créer le projet
          </button>
        </form>
      </div>
    </div>
  )
}
