import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import SignUpPage from "../pages/SignUpPage";

export const routes = [
  {
    path: "/home",
    component: <HomePage />,
  },
  {
    path: "/*",
    component: <NotFound />,
  },
];

export const routesNoToken = [
  {
    path: "/login",
    component: <LoginPage />,
  },
  {
    path: "/sign-up",
    component: <SignUpPage />,
  },
  {
    path: "/*",
    component: <NotFound />,
  },
];

