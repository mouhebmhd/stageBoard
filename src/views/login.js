import React, { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/login.css";
import userImage from "../images/fingerprint.png";
import axios from "axios";
import NotificationModal from "../components/notificationModal";

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
          setTimeout(() => {
            setCookies("currentUser", {
              token: loginResult.data.token,
              role: loginResult.data.role,
            });
            navigate("/mainPage");
          }, 2000);
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
          <NotificationModal ref={modalRef} />

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
           <span className="fw-semibold specialText"> Créer un compte</span>{" "}
          </p>
        </form>
      </div>
      <></>
    </div>
  );
}
