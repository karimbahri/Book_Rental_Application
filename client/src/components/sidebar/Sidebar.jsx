import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { socket } from "../../pages/registration/Registration";

import "./Sidebar.css";

const Sidebar = ({ user }) => {
  useEffect(() => {
    let list = document.querySelectorAll(".sd-navigation li");

    function activeLink() {
      list.forEach((item) => item.classList.remove("hovered"));
      this.classList.add("hovered");
    }
    list.forEach((item) => item.addEventListener("click", activeLink));
  }, []);

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("persist:root");

    socket.emit("disconnect");
    // localStorage.clear();
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
            {user.isAdmin && (
              <li>
                <Link to="/users">
                  <span className="sd-icon">
                    <ion-icon name="people-outline"></ion-icon>
                  </span>
                  <span className="sd-title">Users</span>
                </Link>
              </li>
            )}
            <li>
              <Link to="/books">
                <span className="sd-icon">
                  <ion-icon name="library-outline"></ion-icon>
                </span>
                <span className="sd-title">Books</span>
              </Link>
            </li>
            {!user.isAdmin && (
              <li>
                <Link to="/my-books">
                  <span className="sd-icon">
                    <ion-icon name="layers-outline"></ion-icon>
                  </span>
                  <span className="sd-title">My books</span>
                </Link>
              </li>
            )}
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

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Sidebar);
