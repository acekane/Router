// function Private({ children }) {
//   const isAuth = localStorage.getItem("token");
//   if (!isAuth) {
//     window.location.href = "/Contact";
//   } else {
//     return children;
//   }
// }

// export default Private;

import React from "react";

const Private = ({ children }) => {
  const isAuth = localStorage.getItem("token");

  if (!isAuth) {
    window.location.href = "/Contact";
  } else {
    return children;
  }
};

export default Private;
