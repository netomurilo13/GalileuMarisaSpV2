import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import PatientList from './components/Patient/patient_view';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYouPage from './components/finish/finish_view';
import ThankYouPageSaude from './components/finishSaude/finish_saude_view';
import Clarity from './components/Clarity';
import Analytics from './components/Analytics';

const App = () => {
  const currentURL = window.location.href;
  console.log(currentURL)

  let clarityId = '';
  let analyticsId = '';

  console.log("CLARITY ID: ", clarityId)

  if (currentURL.includes('hra.saudedafamiliadigitalsp.com.br')) {
    clarityId = 'jnbu4dsqss';
    analyticsId = 'G-6PMMQDBEHS';   
    console.log(">>> ", clarityId)
  } else if (currentURL.includes('hra.galileusaude.com.br')) {
    clarityId = 'hu38pquue3';
    analyticsId = 'G-STR498WC90';
    console.log(">>> ", clarityId)
  }

  return (
    <Router>
      {clarityId && <Clarity clarityId={clarityId} />}
      {analyticsId && <Analytics analyticsId={analyticsId} />}

      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/thanksyou" element={<ThankYouPageSaude />} />
      </Routes>
    </Router>
  );
};

export default App; 