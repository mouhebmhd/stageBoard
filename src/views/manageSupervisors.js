import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
import "../styles/agents.css"
function Supervisors() {
    const [supervisors, setSupervisors] = useState([
    
    ]);
    const role=localStorage.getItem("role")
useEffect(()=>{
    axios.get("http://localhost:3030/supervisor/getAllSupervisors")
    .then(response=>{
      if(response.data.status=='success')
        {
        setSupervisors(response.data.supervisors)          
        }

    })
   
},[role]) 
const deleteSupervisor=(supervisorId)=>{
    axios.delete(`http://localhost:3030/supervisor/deleteSupervisor/?id=${supervisorId}`)
    .then(response=>{
        if(response.data.status=='success')
            {
                window.location.reload()
            }
    })
    }
    const activateSupervisor=(supervisor,supervisorId)=>{
        supervisor["AccountStatus"]="active";
        axios.put("http://localhost:3030/supervisor/updateSupervisor/",{...supervisor})
        .then(response=>{
            if(response.data.status=='success')
                {
                    window.location.reload()
                }
        })
    }
    const decativateSupervisor=(supervisor,supervisorId)=>{
        supervisor["AccountStatus"]="frozen";
        axios.put("http://localhost:3030/supervisor/updateSupervisor/",{...supervisor})
        .then(response=>{
            if(response.data.status=='success')
                {
                    window.location.reload()
                }
        })
    }
    return (
        <>
        <Navbar></Navbar>
            <div className='container-fluid mt-5 p-0'>
                <div className='row m-0 p-0 p-5 '>
                    
                    <h1 className='text-center pageTitle'>Gestion des encadrants</h1>
                    <div className='container-fluid m-0 p-0'>
                        <div className='row justify-content-center gap-3'>
                            {supervisors.map(supervisor => (
                                <div key={supervisor.supervisorId} className='card col-xl-3 col-md-4 col-sm-6' style={{ width: '20rem' }}>
                                    <div className='card-img-top  avatarImage d-flex justify-content-center' alt='Card image cap'>
                                    </div>
                                    <div className='card-body'>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Nom complet </span> {supervisor.supervisorName+' '+supervisor.supervisorFirstName}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Numéro de téléphone </span> {supervisor.supervisorPhone}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Email </span> {supervisor.supervisorEmail}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Role </span> Encadrant
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Statut </span>
                                            {supervisor.AccountStatus === 'active' && <span className='text-success fw-bold'>{supervisor.AccountStatus} </span>}
                                            {supervisor.AccountStatus === 'frozen' && <span className='text-warning fw-bold'>En Attente  </span>}
                                        </p>
                                        <div className='col d-flex justify-content-center flex-column row-gap-2'>
                                        {<button className='btn btn-danger' onClick={() => deleteSupervisor(supervisor.supervisorId)}>Supprimer l'utilisateur</button>}
                                            {supervisor.AccountStatus!== 'active'  && <button className='btn btn-success text-light' onClick={() => activateSupervisor(supervisor,supervisor.supervisorId)}>Activer l'utilisateur</button>}
                                            {supervisor.AccountStatus== 'active'  && <button className='btn btn-success text-light' onClick={() => decativateSupervisor(supervisor,supervisor.supervisorId)}>Désactiver l'utilisateur</button>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Supervisors;
