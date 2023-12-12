import { Container } from "@mui/material";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Navbar";

// interface routeType {
//   name: string;
//   path: any;
// }

const Layout = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      if (pathname === "/") navigate("/home");
    }
    else {
      if (pathname === "/") navigate("/login");
    }
  }, [pathname]);
  return (
    <div style={{width: '100%',height: '100vh'}}>
      <Navbar />
      <Container maxWidth="xl" fixed>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
