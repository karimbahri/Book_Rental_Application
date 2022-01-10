import React from "react";
import "./Settings.css";

const Settings = () => {
  const onFormSubmit = async () => {
    let old_password = document.getElementById('old_password');
    let new_password = document.getElementById('new_password');
    let confirm_password = document.getElementById('confirm_password');
    if (old_password.value) {
      new_password.required = true;
      confirm_password.required = true;

      if (new_password.value !== confirm_password.value)
        confirm_password.setCustomValidity("Passwords Don't Match");
      else
        confirm_password.setCustomValidity('');
      if (old_password.value === new_password.value)
        new_password.setCustomValidity("Please make sure to put a new password");
      else
        new_password.setCustomValidity('');
    }
  };
  return (
    <div className="reg-body">
      <div className="update-container">
        <div className="title">Update Your Settings</div>
        <div className="content">
          <form action="/" className="reg-form">
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" defaultValue="Moussadak Meddeb" disabled />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input type="text" defaultValue="admin1" disabled />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="text" defaultValue="moussadak-meddeb@gmail.com" disabled />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input type="text" defaultValue="+216 00000000" />
              </div>
              <div className="input-box pwd">
                <span className="details">Old Password</span>
                <input type="password" id="old_password" placeholder="Enter your password" />
              </div>
              <div className="input-box pwd">
                <span className="details">New Password</span>
                <input type="password" id="new_password" placeholder="Enter your password" />
              </div>
              <div className="input-box pwd">
                <span className="details">confirm Password</span>
                <input type="password" id="confirm_password" placeholder="Enter your password" />
              </div>
              <div className="input-box">
                <span className="details">Address</span>
                <input type="text" defaultValue="Enter your Address" disabled />
              </div>
              {/* <div className="input-box">
                <span className="details">Postal Code</span>
                <input
                  type="text"
                  value="Enter your Postal Code"
                  disabled
                />
              </div> */}
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
              <input type="submit" value="Update" onClick={onFormSubmit} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Settings;
