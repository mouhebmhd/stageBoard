import '../styles/agents.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import avatar from "../images/avatar.png"
import Navbar from '../components/navbar';
function Agents() {
    const currentUser = localStorage.getItem('currentUser');
    const [agents, setAgents] = useState([
        {
            "_id": "agent1",
            "name": "John Doe",
            "phone": "123-456-7890",
            "email": "john@example.com",
            "role":"stagiaire",
            "etatCompte": "actif"
        },
        {
            "_id": "agent2",
            "name": "Jane Smith",
            "phone": "987-654-3210",
            "email": "jane@example.com",
            "role":"stagiaire",
            "etatCompte": "bloqué"
        },
        {
            "_id": "agent3",
            "name": "Alice Johnson",
            "phone": "555-555-5555",
            "email": "alice@example.com",
            "role":"stagiaire",
            "etatCompte": "supprimé"
        }
    ]);

    useEffect(() => {
        axios.get('http://localhost:3030/user/getAllUsers/')
            .then(response => {
                setAgents(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [currentUser]);

    const activerAgent = (userID) => {
        axios.put(`http://localhost:3030/user/activateAgent/${userID}`)
            .then(response => {
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const bloquerAgent = (userID) => {
        axios.put(`http://localhost:3030/user/blockAgent/${userID}`)
            .then(response => {
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const restaurerAgent = (userID) => {
        axios.put(`http://localhost:3030/user/restoreAgent/${userID}`)
            .then(response => {
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const débloquerAgent = (userID) => {
        axios.put(`http://localhost:3030/user/unBlockAgent/${userID}`)
            .then(response => {
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    const supprimerAgent = (userID) => {
        axios.delete(`http://localhost:3030/user/deleteAgent/${userID}`)
            .then(response => {
                console.log(response.data);
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            });
    };

    return (
        <>
        <Navbar></Navbar>
            <div className='container-fluid mt-5 p-0'>
                <div className='row m-0 p-0 p-5 '>
                    
                    <h1 className='text-center pageTitle'>Gestion de Stagiaires</h1>
                    <div className='container-fluid m-0 p-0'>
                        <div className='row justify-content-center gap-3'>
                            {agents.map(agent => (
                                <div key={agent._id} className='card col-xl-3 col-md-4 col-sm-6' style={{ width: '20rem' }}>
                                    <div className='card-img-top  avatarImage d-flex justify-content-center' alt='Card image cap'>
                                    </div>
                                    <div className='card-body'>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Nom complet </span> {agent.name}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Numéro de téléphone </span> {agent.phone}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Email </span> {agent.email}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Role </span> {agent.role}
                                        </p>
                                        <p className='card-title'>
                                            <span className='fw-bold'>Statut </span>
                                            {agent.etatCompte === 'actif' && <span className='text-success fw-bold'>{agent.etatCompte} </span>}
                                            {agent.etatCompte === 'bloqué' && <span className='text-warning fw-bold'>{agent.etatCompte} </span>}
                                            {agent.etatCompte === 'supprimé' && <span className='text-danger fw-bold'>{agent.etatCompte} </span>}
                                            {agent.etatCompte === 'suspendu' && <span className='text-info fw-bold'>{agent.etatCompte} </span>}
                                        </p>
                                        <div className='col d-flex justify-content-center flex-column row-gap-2'>
                                            {agent.etatCompte === 'actif' && <button className='btn btn-danger' onClick={() => supprimerAgent(agent._id)}>Supprimer l'utilisateur</button>}
                                            {agent.etatCompte === 'actif' && <button className='btn btn-primary text-light' onClick={() => bloquerAgent(agent._id)}>Bloquer l'utilisateur</button>}
                                            {agent.etatCompte === 'bloqué' && <button className='btn btn-warning text-light' onClick={() => débloquerAgent(agent._id)}>Débloquer l'utilisateur</button>}
                                            {(agent.etatCompte === 'bloqué' || agent.etatCompte === 'suspendu') && <button className='btn btn-success text-light' onClick={() => activerAgent(agent._id)}>Activer l'utilisateur</button>}
                                            {(agent.etatCompte === 'supprimé') && <button className='btn btn-danger text-light' onClick={() => restaurerAgent(agent._id)}>Restaurer l'utilisateur</button>}
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

export default Agents;
