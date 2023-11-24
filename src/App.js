import React from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import PatientList from './components/Patient/patient_view';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYouPage from './components/finish/finish_view';
import ThankYouPageSaude from './components/finishSaude/finish_saude_view';
import Clarity from './components/Clarity';
import Analytics from './components/Analytics';
import { Helmet } from 'react-helmet';

const App = () => {
  const currentURL = window.location.href;
  console.log(currentURL)

  let clarityId = '';
  let analyticsId = '';
  let favicon;


  if (currentURL.includes('hra.saudedafamiliadigitalsp.com.br')) {
    favicon = 'sfd_sp.ico'
    clarityId = 'jnbu4dsqss';
    analyticsId = 'G-6PMMQDBEHS';   
  } else if (currentURL.includes('hra.galileusaude.com.br')) {
    favicon = 'galileu.ico'
    clarityId = 'hu38pquue3';
    analyticsId = 'G-STR498WC90';
  }

  return (
    <Router>
      <Helmet>
        <link rel="icon" type ="image/x-icon" href={favicon} />
      </Helmet>
      {clarityId && ( <Clarity clarityId={clarityId}/> )}

      {analyticsId && ( <Analytics analyticsId={analyticsId}/> )}

      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/thanksyou" element={<ThankYouPageSaude />} />
      </Routes>
    </Router>
  );
};

export default App; 