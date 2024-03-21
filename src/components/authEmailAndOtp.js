import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { useState, forwardRef } from 'react';
import './authEmailAndOtp.css';
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

const AuthEmailAndOtp = forwardRef((props, ref) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(true); // Initially select the Email Address button

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); // Function to close the modal
  const handleToggle = () => setSelected(!selected); // Toggle the state

  return (
    <div>
      <Button className='d-none' onClick={handleOpen} ref={ref}>
        Open modal
      </Button>
      <Modal
        open={open}
        onClose={handleClose} // Close the modal when clicked outside or on the close button
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className='modalBox'>
          <h1 className='text-center specialText fs-3'>First Service Travel</h1>
          <p className='text-center'>Logging in to a Direct account.</p>
          <p className='specialText'>Login using</p>
          <button
            className={`btn ${selected ? 'selected' : 'notSelected'}`}
            onClick={handleToggle}
          >
            Email Address
          </button>
          <button
            className={`btn ${selected ? 'notSelected' : 'selected'}`}
            onClick={handleToggle}
          >
            Phone Number
          </button>
          
          {selected ? (
            <section className="loginViaEmail mt-3">
              <div className='input-group mb-3 mt-2'>
                <div className='input-group-prepend'>
                  <span className='input-group-text emailIcon h-100' id='basic-addon1'>
                    <MdOutlineMail></MdOutlineMail>
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control h-75 rounded-1'
                  placeholder='your email address please '
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  id='emailInput'
                />
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Remember me
                </label>
              </div>
              <div className="container-fluid mt-2 d-flex justify-content-center d-flex flex-column">
                <button className="btn continueVia">Continue Via Email</button>
                <button className="btn btn-outline-dark outline-dark mt-2">Sign In With Password</button>
              </div>
            </section>
          ) : (
            <section className="loginViaPhone mt-3">
              <div className='input-group mb-3 mt-2'>
                <div className='input-group-prepend'>
                  <span className='input-group-text emailIcon h-100' id='basic-addon1'>
                    <FaPhone></FaPhone>
                  </span>
                </div>
                <input
                  type='tel' 
                  className='form-control h-75 rounded-1'
                  placeholder='your phone number please'
                  aria-label='Phone Number'
                  aria-describedby='basic-addon1'
                  id='phoneInput'
                />
              </div>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  value=''
                  id='flexCheckDefault'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Remember me
                </label>
              </div>
              <div className="container-fluid mt-2 d-flex justify-content-center d-flex flex-column">
                <button className="btn continueVia">Continue Via Phone</button>
                <button className="btn btn-outline-dark outline-dark mt-2">Sign In With Password</button>
              </div>
            </section>
          )}

        </Box>
      </Modal>
    </div>
  );
});

export default AuthEmailAndOtp;
