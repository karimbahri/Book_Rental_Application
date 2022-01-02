import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  useEffect(() => {
    let list = document.querySelectorAll(".sd-navigation li");
    // const d = document.querySelector(".sd-navigation li");
    // d.classList.add("hovered");
    function activeLink() {
      list.forEach((item) => item.classList.remove("hovered"));
      this.classList.add("hovered");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <div className="sidebar">
      <div className="sd-container">
        <div className="sd-navigation">
          <ul>
            <li>
              <a href="/">
                <span className="sd-icon">
                  <ion-icon name="home-outline"></ion-icon>
                </span>
                <span className="sd-title">Dashboard</span>
              </a>
            </li>
            <li>
              <Link to="/users">
                <span className="sd-icon">
                  <ion-icon name="people-outline"></ion-icon>
                </span>
                <span className="sd-title">Users</span>
              </Link>
            </li>
            <li>
              <Link to="/books">
                <span className="sd-icon">
                  <ion-icon name="library-outline"></ion-icon>
                </span>
                <span className="sd-title">Books</span>
              </Link>
            </li>
            <li>
              <Link to="/my-books">
                <span className="sd-icon">
                  <ion-icon name="layers-outline"></ion-icon>
                </span>
                <span className="sd-title">My books</span>
              </Link>
            </li>
            <li>
              <Link to="/settings">
                <span className="sd-icon">
                  <ion-icon name="settings-outline"></ion-icon>
                </span>
                <span className="sd-title">Settings</span>
              </Link>
            </li>
            <li>
              <a href="/" onClick={signOut}>
                <span className="sd-icon">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
                <span className="sd-title">LogOut</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
