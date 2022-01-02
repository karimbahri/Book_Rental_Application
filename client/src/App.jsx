import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import useToken from "./useToken";
import InviteUser from "./components/InviteUser/inviteUser";

const App = () => {
  const { token, setToken } = useToken();
  console.log(token);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/registration/:sessonId" element={<Registration />} />
        <Route
          path="/*"
          element={!token ? <Login setToken={setToken} /> : <Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
