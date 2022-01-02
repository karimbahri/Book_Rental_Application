import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Users from "../users/Users";
import Books from "../books/Books";
import MyBooks from "../myBooks/MyBooks";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <>
      <Topbar />
      <div className="dash-container">
        <Sidebar />
        <div className="dash-content">
          <Routes>
            <Route path="users" element={<Users />} />
            <Route path="books" element={<Books />} />
            <Route path="my-books" element={<MyBooks />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
