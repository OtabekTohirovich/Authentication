import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Layout from "./components/Layout";
import { routes } from "./routes/routes";
import NotFound from "./pages/NotFound";
import SecurityPage from "./pages/SecurityPage";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/"
        element={
          <SecurityPage>
            <Layout />
          </SecurityPage>
        }
      >
        {routes.map(({ path, component }) => (
          <Route path={path} key={path} element={component} />
        ))}
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
