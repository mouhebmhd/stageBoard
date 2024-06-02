import React, { useEffect } from 'react'
import "../styles/notificationStyle.css"
import Navbar from '../components/navbar'
import { IoMdNotifications } from "react-icons/io";
import { useState } from 'react';
import axios from 'axios';
export default function Notification() {
    const [notifications,setNotifications]=useState([]);
    const role=localStorage.getItem("role");
    const userId=localStorage.getItem("userId");
    useEffect(()=>{
      axios.get("http://localhost:3030/notifications/getNotifications")
      .then((response)=>{
        setNotifications(response.data.notifications)
      })
      .catch(error=>{
        console.log(error)
      })
    })
  return (
   <>
   <Navbar></Navbar>
    <div className="container-fluid page-body-wrapper">
        <div className="container-fluid main-panel" id="main-panel-home">
          <div className="content-wrapper" id="main-panel-wrapper">
            <div className="row">
              <h5 className="title titleContainer  p-2 text-center">Centre de notifications</h5>
            </div>
            {notifications.length > 0 ? (
              <div className="row d-flex flex-column p-1 mt-2">
                {notifications.map(notification => (
                  <div className="col-10 mb-2 notification p-2 d-flex" key={notification.id}>
                    <div className="notificationImageContainer d-flex flex-column align-items-center justify-content-center text-light">
                      <IoMdNotifications className='icon'></IoMdNotifications>
                    </div>
                    <div className="col ml-2 p-2">{notification.notificationMessage}</div>
                    
                  </div>
                ))}
              </div>
            ) : (
              <div className="row d-flex flex-column p-1 mt-2">
                <div className="container-fluid text-center mt-2 noNotificationsMessage h3">
                  Vous n'avez aucune nouvelle notification !
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
   </>
  )
}
