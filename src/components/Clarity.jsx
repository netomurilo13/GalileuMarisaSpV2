import React from "react";
import { Helmet } from "react-helmet";

const Clarity = ({ clarityId }) => {
  const clarityScript = `
  (function(c, l, a, r, i, t, y) {
    c[a] = c[a] || function() { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r);
    t.async = 1;
    t.src = 'https://www.clarity.ms/tag/' + ${clarityId};
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
  })(window, document, 'clarity', 'script', ${clarityId});`;
  return (
    <Helmet>
      <script
        id="mc_clarity"
        type="text/javascript"
        strategy="afterinteractive"
      >
        {clarityScript}
      </script>
    </Helmet>
  );
};

export default Clarity;
