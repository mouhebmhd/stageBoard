import React, { useEffect, useState } from 'react'
import '../styles/manageProfil.css'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import avatar from '../../src/images/avatar.png'
import Navbar from '../components/navbar'
function Candidatures () {
  const tableData = [
    { index: 1, sujet: 'Topic 1', domaine: 'Dev web', candidat: "Emily Jones", etatCandidatures: 'En attente' },
    { index: 2, sujet: 'Topic 2', domaine: 'Dev mobile', candidat: "Alfred DaBert", etatCandidatures: 'Refusé' },
    // Add more data as needed
  ];
  return (
    <>
      <Navbar></Navbar>
      <div className='container profilUpdateContainer'>
        <div className='row d-flex flex-column'>
          <h1 className='text-center pageTitle'>Gestion de Candidatures</h1>
          <div className='col d-flex justify-content-center flex-column p-2 align-items-center'>
            <div
              className='profilPhotoContainer'
              style={{ backgroundImage: `url(${avatar})` }}
            ></div>
            <div className='col-12 mt-2'>
            <div className="container">
      <h1 className='specialText pageTitle  text-center'>Candidatures</h1>
      <table className="table">
        <thead>
          <tr className='specialText'>
            <th className='specialText' scope="col">Index</th>
            <th className='specialText' scope="col">Sujet</th>
            <th className='specialText' scope="col">Domaine</th>
            <th className='specialText' scope="col">Candidatures</th>
            <th className='specialText' scope="col">État de Candidature</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>{item.index}</td>
              <td>{item.sujet}</td>
              <td>{item.domaine}</td>
              <td>{item.candidat}</td>
              <td>{item.etatCandidatures}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

            </div>
          </div>

          
        </div>
      
      </div>
    </>
  )
}

export default Candidatures
