import React from 'react'

export default function notificationModal() {
  return (
    <>
    <div className="modal  mt-5"  id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            
            <div className="modal-body">
              <h2 className="text-center">Créer votre compte en tant que ?</h2>
               <div className="btnContainer d-flex column-gap-2 justify-content-center">
                <button className="btn btn-success" onClick={()=>{
                  navigateToView("/supervisor/createAccount/")
                }}>
                Encadrant
              </button>
            
            
                  <button className="btn btn-primary"  onClick={()=>{
                  navigateToView("/intern/createAccount/")
                }}>
                Stagiaire
              </button>
              <button type="button" class="btn btn-secondary d-none" id="dismissButton" data-bs-dismiss="modal">
          Close
        </button>
               </div>
                 
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
