import React, { useState, useEffect } from "react";
import server from "../../apis/server";

import "./Login.css";
import avatar from "../../assets/avatar.svg";
import library_logo from "../../assets/Login/LIBRARY-MANAGEMENT-SYSTEM.png";
import wave from "../../assets/Login/wave.png";

const Login = ({ setToken }) => {

  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [wrongCredential, setwrongCredential] = useState(false);

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    const password = document.getElementById("password");
    const toggle = document.getElementById("toggle");

    function showOrHidePassword(e) {
      console.log(e);
      if (password.type === "password") {
        password.setAttribute("type", "text");
      } else {
        password.setAttribute("type", "password");
      }
    }
    toggle.addEventListener("click", showOrHidePassword);

    function addcl() {
      setwrongCredential(false);
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
      setwrongCredential(false);
      let parent = this.parentNode.parentNode;
      if (this.value === "") {
        parent.classList.remove("focus");
      }
    }

    inputs.forEach((input) => {
      input.addEventListener("focus", addcl);
      input.addEventListener("blur", remcl);
    });
  }, []);

  const loginUser = async ({ username, password }) => {
    /**************************************************/

    return server.post("/api/signin", {
      userName: username,
      password: password,
    });
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    loginUser({ username, password })
      .then((response) => {
        setToken(response.data.token);
      })
      .catch((err) => {
        setwrongCredential(true);
      });
  };

  return (
    <div className="body">
      <img className="wave" src={wave} alt="wave background logo" />
      <div className="log-container">
        <div className="img-log">
          <img src={library_logo} alt="library logo" />
        </div>
        <div className="login-content">
          <form className="log-form" action="/">
            <img src={avatar} alt="avatar" />
            <h2 className="_title_">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input
                  type="text"
                  className="input"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            </div>
            <div className="input-div pass">
              <div className="i">
                <i className="fas fa-lock"></i>
              </div>
              <div className="div">
                <h5>Password</h5>
                <input
                  type="password"
                  className="input"
                  autoComplete="off"
                  onChange={(e) => setPassword(e.target.value)}
                  id="password"
                />
                <div id="toggle">
                  <i className="fas fa-eye "></i>
                </div>
              </div>
            </div>
            <a href="#forgot-pw">Forgot Password?</a>
            {wrongCredential && (
              <div className="error-input">
                Oops! Verify your username or password and Try again
              </div>
            )}
            <input
              type="submit"
              className="btn"
              value="Login"
              onClick={onFormSubmit}
              onChange={null}
            />
          </form>
          <div id="forgot-pw" className="login-content">
            <form action="#" className="log-form">
              <img src={avatar} alt="avatar"></img>
              <a href="/login" className="close">
                <i className="far fa-times-circle"></i>
              </a>
              <h2 className="title">Reset Password</h2>
              <div className="input-div one">
                <div className="i">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="div">
                  <h5>Email</h5>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    required
                    onChange={null}
                    autoComplete="on"
                  />
                </div>
              </div>
              <input
                type="submit"
                value="Send"
                className="btn"
                onClick={null}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
