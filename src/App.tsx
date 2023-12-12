import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { routes, routesNoToken } from "./routes/routes";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        { localStorage.getItem("token") ? routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        )) : routesNoToken.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
