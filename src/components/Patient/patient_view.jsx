import React, { useState, useEffect } from "react";
import "./../../index.css";
import logo1 from "./../../assets/galileu_azul.png";
import logo2 from "./../../assets/saude.png";
import TagManager from "react-gtm-module";
import { v4 as uuidv4 } from 'uuid';
import { useLocation } from "react-router-dom";

const PatientList = () => {

  
  const [isIframeVisible, setIframeVisible] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const location = useLocation();
  let parameter = uuidv4();
  let group = new URLSearchParams(location.search).get("group");
  console.log(group)
  const currentURL = window.location.href;
  let validState = false;


  let logoImage;
  if (currentURL.includes("hra.saudedafamiliadigitalsp.com.br")) {
    logoImage = logo2;
    group = "São Paulo";
    validState = true;
  } else if (currentURL.includes("hra.galileusaude.com.br")) {
    logoImage = logo1;
    if(group == null){
      group = "Tarumã"
    }
  } 
  else {
    logoImage = logo1;
  }

  useEffect(() => {
    const tagManagerArgs = {
      gtmId: "G-SH9HRC1WCT",
    };
    TagManager.initialize(tagManagerArgs);
  }, []);

  const handleExternalLink = () => {
    setIframeVisible(true);
    setButtonClicked(true);
  };

  console.log(parameter)

  let errorMessage = null;
  let content = null;

  if (parameter == null) {
    errorMessage = (
      <div className="error-container">
        <img
          src={logoImage}
          alt="Logo"
          className="logo"
          style={{
            marginBottom: "100px",
            height: logoImage === logo1 ? "113px" : "152px",
            width: logoImage === logo1 ? "283px" : "305px",
          }}
        />
        <p className="error-message">
          Link inválido. Favor solicitar novamente o link de acesso a essa
          aplicação.
        </p>
      </div>
    );
  } else {
    content = (
      <div className="content">
        <img
          src={logoImage}
          alt="Logo"
          className="logo"
          style={{
            marginBottom: "100px",
            height: logoImage === logo1 ? "113px" : "152px",
            width: logoImage === logo1 ? "283px" : "305px",
          }}
        />
        <div className="text-container">
          <p className="main-text">
            Todas as informações que você ceder para mim serão usadas para
            fornecer uma melhor consulta médica para você! Ao clicar para abrir
            o formulário você concorda com a nossa{" "}
            <a
              href="https://i9.med.br/termos-de-uso-da-plataforma-i9med-saude-digital/"
              target="_blank"
              rel="noopener noreferrer"
            >
              política de proteção de dados e privacidade
            </a>
            .
          </p>
          <div className="form-button-container">
            {!isButtonClicked && (
              <button className="form-button" onClick={handleExternalLink}>
                Abrir Formulário
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
   if(validState)
   { return (
      <div className="App">
        {errorMessage || content}
        {isIframeVisible && (
          <iframe
            key={parameter}
            src={`https://aiufa25qymk.typeform.com/to/J9SXiRWS#user_id=${parameter}&group=${group}`}
            title="External App"
            className="external-iframe"
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
          />
        )}
      </div>
    );}else{
      return (
        <div className="App">
          {errorMessage || content}
          {isIframeVisible && (
            <iframe
              key={parameter}
              src={`https://aiufa25qymk.typeform.com/to/WBNbUcDW#user_id=${parameter}&group=${group}`}
              title="External App"
              className="external-iframe"
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
              }}
              sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-top-navigation"
            />
          )}
        </div>
      );
    }

};

export default PatientList;
