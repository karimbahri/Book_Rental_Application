import React, { useEffect } from "react";
import "./Login.css";
import avatar from "../../assets/Login/avatar.svg";
import library_logo from "../../assets/Login/LIBRARY-MANAGEMENT-SYSTEM.png";
import wave from "../../assets/Login/wave.png";

const Login = () => {
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
  return (
    <div className="body">
      <img className="wave" src={wave} alt="wave background logo" />
      <div className="container">
        <div className="img">
          <img src={library_logo} alt="library logo" />
        </div>
        <div className="login-content">
          <form action="#" className="log-form">
            <img src={avatar} alt="avatar" />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="i">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" onChange={null} />
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
            <input type="submit" className="btn" value="Login" onClick={null} />
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
