import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import "./App.css";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";
import Dashboard from "./pages/dashboard/Dashboard";
import useToken from "./useToken";

const App = () => {
  const { setToken } = useToken();
  const { sessonId } = useParams();
  console.log(sessonId);
  let token = localStorage.getItem("token");
  // console.log(token);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/registration/:sessonId"
          element={<Registration />}
        />
        <Route
          exact
          path="/*"
          element={!token ? <Login setToken={setToken} /> : <Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
