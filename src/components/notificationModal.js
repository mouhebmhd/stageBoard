import React, { useState, forwardRef } from 'react';
import "./modal.css"
// Import any specific icons you need

const NotificationModal = forwardRef((props, ref) => {
  const [status, setStatus] = useState('error');

  return (
    <>
      <button type="button" className="btn btn-primary d-none" id="launchModal" data-bs-toggle="modal" data-bs-target="#exampleModal" ref={ref}>
        Launch demo modal
      </button>

      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header d-flex justify-content-center">
              <h5 className="modal-title text-center" id="exampleModalLabel">Demand Status</h5>
            </div>
            <div className="modal-body">
              {
                (status === 'success') && (
                  <>
                    <p className='fs-4'> Congratulations, your request has been successfully processed ! </p>
                    <div className="d-flex justify-content-center" >
                    </div>
                  </>
                )
              }
              {
                (status === 'error') && (
                  <>
                    <p className='fs-4'> Oops! An error occurred while processing your request!</p>
                    <div className="d-flex justify-content-center" >
                      </div>
                  </>
                )
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default NotificationModal;
