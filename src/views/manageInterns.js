import { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/navbar';
function Interns() {
    const [interns, setInterns] = useState([
    
    ]);
    const role=localStorage.getItem("role")
useEffect(()=>{
    axios.get("http://localhost:3030/intern/getAllInterns")
    .then(response=>{
      if(response.data.status=='success')
        {
        setInterns(response.data.interns)          
        }

    })
   
},[role]) 
const deleteIntern=(internId)=>{
    axios.delete(`http://localhost:3030/intern/deleteIntern/?id=${internId}`)
    .then(response=>{
        console.log(response.data)
    })
    }
    const activateIntern=(intern,internId)=>{
        intern["internAccountStatus"]="active";
        axios.put("http://localhost:3030/intern/updateIntern/",{...intern})
        .then(response=>{
            if(response.data.status=='success')
                {
                    window.location.reload()
                }
        })
    }
    const decativateIntern=(intern,internId)=>{
        intern["internAccountStatus"]="frozen";
        axios.put("http://localhost:3030/intern/updateIntern/",{...intern})
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
                    
                    <h1 className='text-center pageTitle'>Gestion de Stagiaires</h1>
                    <div className='container-fluid m-0 p-0'>
                        <div className='row justify-content-center gap-3'>
                            {interns.map(intern => (
                                <div key={intern.internId} className='card col-xl-3 col-md-4 col-sm-6' style={{ width: '20rem' }}>
                                    <div className='card-img-top  avatarImage d-flex justify-content-center' alt='Card image cap'>
                                    </div>
                                    <div className='card-body'>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Nom complet </span> {intern.internName+' '+intern.internFirstName}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Numéro de téléphone </span> {intern.internPhone}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Email </span> {intern.internEmail}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Role </span> Stagiaire
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Statut </span>
                                            {intern.internAccountStatus === 'active' && <span className='text-success fw-bold'>{intern.internAccountStatus} </span>}
                                            {intern.internAccountStatus === 'frozen' && <span className='text-warning fw-bold'>En Attente  </span>}
                                        </p>
                                        <div className='col d-flex justify-content-center flex-column row-gap-2'>
                                        {<button className='btn btn-danger' onClick={() => deleteIntern(intern.internId)}>Supprimer l'utilisateur</button>}
                                            {intern.internAccountStatus!== 'active'  && <button className='btn btn-success text-light' onClick={() => activateIntern(intern,intern.internId)}>Activer l'utilisateur</button>}
                                            {intern.internAccountStatus== 'active'  && <button className='btn btn-success text-light' onClick={() => decativateIntern(intern,intern.internId)}>Désactiver l'utilisateur</button>}
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

export default Interns;
