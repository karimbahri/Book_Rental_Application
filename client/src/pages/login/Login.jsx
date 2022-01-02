import React, { useState, useEffect } from "react";
import "./Login.css";
import avatar from "../../assets/avatar.svg";
import library_logo from "../../assets/Login/LIBRARY-MANAGEMENT-SYSTEM.png";
import wave from "../../assets/Login/wave.png";

const Login = ({ setToken }) => {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const inputs = document.querySelectorAll(".input");
    const password = document.getElementById("password");
    const toggle = document.getElementById("toggle");

    function showOrHidePassword(e) {
      // console.log(e);
      if (password.type === "password") {
        password.setAttribute("type", "text");
      } else {
        password.setAttribute("type", "password");
      }
    }
    toggle.addEventListener("click", showOrHidePassword);

    function addcl() {
      let parent = this.parentNode.parentNode;
      parent.classList.add("focus");
    }

    function remcl() {
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

  const loginUser = async (credentials) => {
    /**************************************************/
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="body">
      <img className="wave" src={wave} alt="wave background logo" />
      <div className="log-container">
        <div className="img-log">
          <img src={library_logo} alt="library logo" />
        </div>
        <div className="login-content">
          <form action="#" className="log-form">
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
                  onChange={null}
                  id="password"
                />
                <div id="toggle">
                  <i className="fas fa-eye "></i>
                </div>
              </div>
            </div>
            <a href="#forgot-pw">Forgot Password?</a>
            <input
              type="submit"
              className="btn"
              value="Login"
              onChange={(e) => setPassword(e.target.value)}
              onClick={onFormSubmit}
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
