import React from "react";
import { useParams } from "react-router-dom";
import "./Registration.css";
import useToken from "../../useToken";
import { useEffect } from "react";

const Registration = () => {
  const { token, setToken } = useToken();
  const { sessonId } = useParams();

  useEffect(() => {
    console.log(sessonId);
    if (!token) setToken(sessonId);
  });

  return (
    <div className="reg-body">
      <div className="reg-container">
        <div className="title">Create New Account</div>
        <div className="content">
          <form action="/" className="reg-form">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" placeholder="Enter your number" required />
              </div>
              <div className="input-box pwd">
                <span className="details">Password</span>
                <input type="text" placeholder="Enter your password" required />
              </div>
              <div className="input-box pwd">
                <span className="details">Confirm Password</span>
                <input
                  type="text"
                  placeholder="Confirm your password"
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" placeholder="Enter your Address" required />
              </div>
              <div className="input-box">
                <span className="details">Postal Code</span>
                <input
                  type="text"
                  placeholder="Enter your Postal Code"
                  required
                />
              </div>
            </div>
            {/* <div className="gender-details">
              <input type="radio" name="__gender__" id="dot-1" />
              <input type="radio" name="__gender__" id="dot-2" />
              <input type="radio" name="__gender__" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label htmlFor="dot-1">
                  <span className="r-dot d-one"></span>
                  <span className="__gender__">Male</span>
                </label>
                <label htmlFor="dot-2">
                  <span className="r-dot d-two"></span>
                  <span className="__gender__">Female</span>
                </label>
                <label htmlFor="dot-3">
                  <span className="r-dot d-three"></span>
                  <span className="__gender__">Prefer not to say</span>
                </label>
              </div>
            </div> */}
            <div className="button">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
