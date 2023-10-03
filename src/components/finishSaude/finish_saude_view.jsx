import React from 'react';
import logo from './../../assets/saude.png';
import "./index.css"

const ThankYouPageSaude = () => {
  return (
    <div className="thank-you-page2">
      <img src={logo} alt="Logo" className="logo2" style={{ marginBottom: "100px" }} />
      <h2>Obrigado por preencher o formulário!</h2>
      <p>Vamos avaliar as suas informações e logo logo você receberá uma mensagem com o resultado!</p>
    </div>
  );
};

export default ThankYouPageSaude;
