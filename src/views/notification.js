import React from 'react'
import "../styles/notificationStyle.css"
import Navbar from '../components/navbar'
import { IoMdNotifications } from "react-icons/io";

export default function Notification() {
    const notifications=[{id:1,contenu:"Un administrateur vous a assigné un nouveau candidat. Veuillez consulter l'espace candidature pour plus de détails."},{id:2,contenu:"Félicitations ! Votre demande d'approbation d'encadrement a été validée avec succès."}]
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
                    <div className="col ml-2 p-2">{notification.contenu}</div>
                    
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
