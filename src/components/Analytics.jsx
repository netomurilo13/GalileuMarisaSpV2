import React from "react";
import { Helmet } from "react-helmet";

const Analytics = ({ analyticsId }) => {
  const analyticsScript = `
    if (!window.dataLayer) {
      window.dataLayer = [];
    }

    function gtag() {
      window.dataLayer.push(arguments);
    }

    gtag('js', new Date());
    gtag('config', ${analyticsId}, { 
      page_path: windows.location.pathname,
    });
  `;

  return (
    <Helmet>
      <script>{analyticsScript}</script>
    </Helmet>
  );
};

export default Analytics;
