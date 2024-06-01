import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function SupervisorsModal(props) {
  const [supervisors, setSupervisors] = useState([]);
  const [candidature, setCandidature] = useState();

  // Define the affecterStagiaire function before its usage
  const affecterStagiaire = () => {
    props.candidature['applicationStatus']= "affectée";
 axios.put("http://localhost:3030/candidature/updateCandidature/",props.candidature)
 .then(response=>{
  console.log(response)
 })
 .catch(error=>{
  console.log(error)
 })
  };

  useEffect(() => {
    axios.get("http://localhost:3030/supervisor/getAllSupervisors/")
      .then(response => {
        setSupervisors(response.data.supervisors);
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []); // Empty dependency array to run only once

  return (
    <>
      <div className="modal mt-5" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h2 className="text-center">Veuillez choisir un Encadrant</h2>
              <div className="btnContainer d-flex flex-column column-gap-2 justify-content-center">
                <select className='form-control'  onChange={(event) => {
                  
                  props.candidature['supervisorId']= event.target.value;
                }} >
                  <option value="default">Selectionner un Encadrant</option>
                  {supervisors.map((supervisor, index) => (
                    <option key={index} value={supervisor.supervisorId}>
                      {supervisor.supervisorFirstName + " " + supervisor.supervisorName}
                    </option>
                  ))}
                </select>
                <div className="buttonContainer mt-3 d-flex justify-content-center">
                  <button className='btn btn-success' onClick={()=>{affecterStagiaire()}}>
                    Terminer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
