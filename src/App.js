import React, { useEffect } from 'react';
import './index.css';
import 'react-calendar/dist/Calendar.css';
import { Helmet } from 'react-helmet';
import PatientList from './components/Patient/patient_view';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThankYouPage from './components/finish/finish_view';
import ThankYouPageSaude from './components/finishSaude/finish_saude_view';

const App = () => {
  useEffect(() => {
    // Código do Clarity
    (function(c, l, a, r, i, t, y){
      c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
      t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
      y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "hu38pquue3");
  }, []);

  return (
    <Router>
      <Helmet>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SH9HRC1WCT"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SH9HRC1WCT');
          `}
        </script>
      </Helmet>
      <Routes>
        <Route path="/" element={<PatientList />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
        <Route path="/thanksyou" element={<ThankYouPageSaude />} />
      </Routes>
    </Router>
  );
};

export default App;
