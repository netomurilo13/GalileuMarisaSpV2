import React from 'react';
import logo from './../../assets/galileu_azul.png';
import "./index.css"

const ThankYouPage = () => {
  return (
    <div className="thank-you-page">
      <img src={logo} alt="Logo" className="logo" style={{ marginBottom: "100px" }} />
      <h2>Obrigado por preencher o formulário!</h2>
      <p>Vamos avaliar as suas informações e logo logo você receberá uma mensagem com o resultado!</p>
    </div>
  );
};

export default ThankYouPage;
