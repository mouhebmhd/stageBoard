import React, { useState, useEffect } from "react";
import "../styles/messagingStyle.css";
import Navbar from "../components/navbar";
import { IoMdMail } from "react-icons/io";
import axios from "axios";

export default function Messaging() {
  const role = localStorage.getItem("role");
  const fieldId = role + "Id";
  const userId = localStorage.getItem(fieldId);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState({
    messageSubject: "",
    messageBody: "",
    messageDate: new Date().toString(),
    isReadBySender: "True",
    isReadByRecipient: "False",
    internId: "",
    supervisorId: "",
  });
  const sendMessage = () => {
    axios
      .post("http://localhost:3030/messages/postMessage/", message)
      .then((response) => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get("http://localhost:3030/messages/getMessages")
      .then((response) => {
        if (role == "intern") {
          setMessages(
            response.data.messages.filter((message) => {
              return message.internId == userId ;
            })
          );
          setMessage((prevMessage) => ({ ...prevMessage, internId: userId }));
          axios
            .get(`http://localhost:3030/project/getProjectsByInternId/?id=${2}`)
            .then((response) => {
              setMessage((prevMessage) => ({
                ...prevMessage,
                supervisorId: response.data.projects[0].supervisorId,
                messageSubject:"intern"
              }));
            })
            .catch((error) => {
              console.log(error);
            });
        }
        if (role == "supervisor") {
          setMessages(
            response.data.messages.filter((message) => {
              return message.supervisor == userId;
            })
          );
          setMessage((prevMessage) => ({
            ...prevMessage,
            supervisorId: userId,
            messageSubject:"supervisor"
          }));
          
        }
        axios
          .get(
            `http://localhost:3030/project/getProjectsBySupervisorId/?id=${2}`
          )
          .then((response) => {
            setMessage((prevMessage) => ({
              ...prevMessage,
              internId: response.data.projects[0].internId,
            }));
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [role]);

  return (
    <>
      <Navbar />
      <div className="container-fluid page-body-wrapper">
        <div className="container-fluid main-panel" id="main-panel-home">
          <div className="content-wrapper" id="main-panel-wrapper">
            <div className="row">
              <h5 className="title titleContainer p-2 text-center">
                Centre de Messagerie
              </h5>
            </div>
            {messages.length > 0 ? (
              <div className="row d-flex flex-column p-1 mt-2">
                {messages.map((message,index) => (
                  <div
                    className="col-10 mb-2 message p-2 d-flex"
                    key={message.id}
                  >
                    <div className="messageImageContainer d-flex flex-column align-items-center justify-content-center text-light">
                      <IoMdMail className="icon" />
                    </div>
                    <div className="col ml-2 p-2">
                      {role === "intern" && message.messageSubject=="intern" && (
                        <>
                          <strong>Etudiant:</strong> {message.messageBody}
                          <br />
                        </>
                      )}
                      
                      {role === "intern" && message.messageSubject=="supervisor" &&  (
                        <>
                          <strong>Encadrant:</strong> {message.messageBody}
                          <br />
                        </>
                      )}
                      
                    </div>
                  </div>
                ))}
                <div className="d-flex column-gap-2 p-2">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="votre message ici"
                    onChange={(event) => {
                      setMessage({
                        ...message,
                        messageBody: event.target.value,
                      });
                    }}
                  />
                  <button
                    className="btn submitBTN text-white"
                    onClick={sendMessage}
                  >
                    Envoyer
                  </button>
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
