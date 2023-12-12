import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const SecurityPage: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const location = useLocation()
  console.log(location.pathname);
  
  //  return <Navigate to={"login"? "sign-up": "login"} />;

  return children;
};

export default SecurityPage;
