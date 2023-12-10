import React from "react";
import { Navigate } from "react-router-dom";

const SecurityPage: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  if (!localStorage.getItem("siymoToken")) return children;

  return <Navigate to={"login"} />
};

export default SecurityPage;
