import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
import userImage from "../images/fingerprint.png";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Login() {
  
  const successMessage = useRef(null);
  const errorMessage = useRef(null);
  const navigate = useNavigate();
  const modalRef = useRef(null);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  
  const setCookies = (name, value) => {
    const expires = new Date();
    expires.setTime(expires.getTime() + 3 * 24 * 60 * 60 * 1000); // Set expiration time
const getCookies = (name) => {
  const cookieString = document.cookie;
  const cookies = cookieString.split(';').map(cookie => cookie.trim());
  
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      return cookieValue;
    }
  }
  
  return null; // If cookie with the given name is not found
};
    // Serialize the value to JSON string
    const serializedValue = JSON.stringify(value);

    // Construct the cookie string
    const cookieString = `${name}=${encodeURIComponent(
      serializedValue
    )};expires=${expires.toUTCString()};path=/`;

    // Set the cookie
    document.cookie = cookieString;
    console.log("cookie created successfully ");
  };
  const navigateToView=(viewRoute)=>{
    document.getElementById("dismissButton").click()
    navigate(viewRoute);
  }
  const handleInputChange = (field, value) => {
    setLoginData({ ...loginData, [field]: value });
  };

  const userLogin = async (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3030/authentification/login/", loginData)
      .then(async (loginResult) => {
        if (loginResult.data.status === "success") {
          errorMessage.current.classList.toggle("d-none");
          successMessage.current.classList.remove("d-none");
          errorMessage.current.classList.toggle("d-none");

          setCookies("currentUser", {
            token: loginResult.data.token,
            role: loginResult.data.role,
          });
          localStorage.setItem("currentUser",loginResult.data.token)
          localStorage.setItem("role",loginResult.data.role)
          localStorage.setItem(loginResult.data.role+"Id",loginResult.data.data.userId)
          localStorage.setItem('userEmail',loginResult.data.data.userEmail)
         setTimeout(() => {
          navigate("/mainPage");            
          }, 2000);  
          console.log(loginResult)
        } else {
          errorMessage.current.classList.remove("d-none");
        }
        // Handle successful login, e.g., redirect the user
      })
      .catch((error) => {
        console.log(error);
        // Handle login error, e.g., display error message to the user
      });

  };
  return (
    <div className="formContainer m-0 p-0 mt-5 py-5">
      <div className="container-fluid d-flex justify-content-center form">
        <form className="col-6">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${userImage})` }}
          ></div>
          <h1 className="h1 specialText pageTitle text-center mt-2">
            Connectez-vous !{" "}
          </h1>
          <h3
            className="h3  text-danger text-center mt-2 d-none"
            ref={errorMessage}
          >
            veuillez vérifier votre email ou votre mot de passe
          </h3>
          <h3
            className="h3  text-success text-center mt-2 d-none"
            ref={successMessage}
          >
            Vous êtes connecté ! Vous serez redirigé vers la page d'accueil.
          </h3>
          <div className="mb-3">
            <label htmlFor="emailInput" className="form-label">
              Adresse email
            </label>
            <input
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Entrez votre adresse email"
              onChange={(event) => {
                handleInputChange("email", event.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="passwordInput" className="form-label">
              Mot de passe
            </label>
            <input
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Entrez votre mot de passe"
              onChange={(event) => {
                handleInputChange("password", event.target.value);
              }}
            />
          </div>
          

          <button
            type="button"
            className="btn btn-primary submitBTN"
            onClick={(event) => {
              userLogin(event);
            }}
          >
            Se Connecter
          </button>
          <p>
            Pas encore inscrit ?{" "}
           <span className="fw-semibold specialText" id="launchModal" data-bs-toggle="modal" data-bs-target="#exampleModal"> Créer un compte</span>{" "}
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
              <button type="button" className="btn btn-secondary d-none" id="dismissButton" data-bs-dismiss="modal">
          Close
        </button>
               </div>
                 
            </div>
            
          </div>
        </div>
      </div>
    </>
          </p>
        </form>
      </div>
      <></>
    </div>
  );
}
