import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import SignUpPage from "../pages/SignUpPage";

export const routes = [
  {
    path: "/home",
    component: <LoginPage />,
  },
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
