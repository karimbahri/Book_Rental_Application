import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import useToken from "./useToken";

const App = () => {
  const { setToken } = useToken();
  let token = localStorage.getItem("token");

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
