import React, { useState, useEffect } from 'react';
import "../styles/messagingStyle.css";
import Navbar from '../components/navbar';
import { IoMdMail } from "react-icons/io";

export default function Messaging() {
  const [messages, setMessages] = useState([
    { id: 1, content: "Bonjour! Comment ça va?", sender: "Vous" },
    { id: 2, content: "Bonjour! Je vais bien, merci. Et vous?", sender: "Encadrant" },
    { id: 3, content: "Je vais bien aussi, merci! J'ai une question sur le projet.", sender: "Vous" },
    { id: 4, content: "Bien sûr, je suis là pour vous aider. Quelle est votre question?", sender: "Encadrant" },
    { id: 5, content: "Je ne suis pas sûr de comprendre la dernière partie de la tâche. Pouvez-vous m'expliquer?", sender: "Vous" },
    { id: 6, content: "Bien sûr. La dernière partie consiste à intégrer les nouvelles fonctionnalités que nous avons discutées. Vous devez suivre les étapes mentionnées dans le guide du projet.", sender: "Encadrant" },
    { id: 7, content: "D'accord, je vais m'y mettre tout de suite. Merci pour l'explication!", sender: "Vous" },
    { id: 8, content: "De rien! N'hésitez pas à me contacter si vous avez d'autres questions.", sender: "Encadrant" }
]);


  return (
    <>
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <div className="container-fluid main-panel" id="main-panel-home">
          <div className="content-wrapper" id="main-panel-wrapper">
            <div className="row">
              <h5 className="title titleContainer p-2 text-center">Centre de Messagerie</h5>
            </div>
            {messages.length > 0 ? (
              <div className="row d-flex flex-column p-1 mt-2">
                {messages.map(message => (
                  <div className="col-10 mb-2 message p-2 d-flex" key={message.id}>
                    <div className="messageImageContainer d-flex flex-column align-items-center justify-content-center text-light">
                      <IoMdMail className='icon' />
                    </div>
                    <div className="col ml-2 p-2">
                      <strong>{message.sender}:</strong> {message.content}
                    </div>
                  </div>
                ))}
                <div className='d-flex column-gap-2 p-2' >
                  <input type="text" className='form-control' placeholder='votre message ici' />
                  <button className='btn submitBTN text-white'>Envoyer</button>
                </div>
              </div>
            
            ) : (
              <div className="row d-flex flex-column p-1 mt-2">
                <div className="container-fluid text-center mt-2 noMessagesMessage h3">
                  Vous n'avez aucun nouveau message !
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
