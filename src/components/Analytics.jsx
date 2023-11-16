import React from "react";

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

  return <script>{analyticsScript}</script>;
};

export default Analytics;
