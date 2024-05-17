import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/login.css';
import userImage from "../images/fingerprint.png";
import axios from 'axios'; 

export default function UpdateOffer() {
  const projectId=useParams().id;
  const [interns,setInterns]=useState([]);
  const [supervisors,setSupervisors]=useState([])
  const [project,setProject]=useState({projectName: '',
  projectDescription: '',
  projectDuration: '',
  projectProgress: '',
  projectDomain: '',
  startDate: Date.now()})
  const handleInputChange = (field, value) => {
    setProject({ ...project, [field]: value });
    console.log(project) 
  };
  useEffect(()=>{
    axios.get("http://localhost:3030/intern/getAllInterns")
    .then(response=>{
      if(response.data.status=='success')
        {
        setInterns(response.data.interns)          
        }

    })
    axios.get('http://localhost:3030/supervisor/getAllSupervisors/')
    .then((response)=>{
      setSupervisors(response.data.supervisors)
    })
    axios.get(`http://localhost:3030/project/getProject/?id=${projectId}`)
    .then(response=>{
    if(response.data.status=="success")
      {
        setProject(response.data.project)
      }
   })
   .catch(error=>{
    console.log(error)
   }) 
  },[projectId])
  const updateOffer=()=>{
    console.log(project)
    axios.put("http://localhost:3030/offer/updateOffer/",{projectId,project})
    .then(response=>{
     if(response.data.status=="success")
      {
        window.location.reload()
      }
      else
      {

      }
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className='formContainer m-0 p-0' style={{ zIndex: 2 }}>
      
      <div className='container-fluid d-flex justify-content-center form'>

        <form className='col-6'>
          <div className='avatar' style={{ backgroundImage: `url(${userImage})` }}>
          </div>
          <h1 className='h1 specialText pageTitle text-center mt-2'>Modifier un  projet</h1>
          <h1 className="text-success d-none" id="successMessage">Le projet a été modifée avec succès.</h1>
          <h1 className='text-danger d-none' id="errorMessage">La modification du projet a échoué. Veuillez réessayer ultérieurement.</h1>
          <div className='mb-3'>
            <label htmlFor='projectNameInput' className='form-label'>
              Nom du projet
            </label>
            <input
              type='text'
              className='form-control'
              id='projectNameInput'
              placeholder='Entrez le nom du projet'
              value={project.projectName}
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
            >
              {project.projectDescription}
              </textarea>
             
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
              value={project.projectDuration}
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
              value={project.projectProgress}
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
              value={project.projectDomain}
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
              value={new Date(project.startDate).toISOString().split('T')[0]}
              onChange={(event) => { handleInputChange('startDate', event.target.value) }}
            />
          </div>
          
         
          
          <button type='button' className='btn btn-primary submitBTN' onClick={(event) => { event.preventDefault();updateOffer(); }}>
            Modifier le projet
          </button>
        </form>
      </div>
    </div>
  )
}
