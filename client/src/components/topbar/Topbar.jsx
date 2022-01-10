import React from "react";
import "./Topbar.css";
import avatar from "../../assets/avatar.svg";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { connect } from "react-redux";

const Topbar = ({ user }) => {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Book Rental Management</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
          </div>
          <div className="topbarIconContainer">
            <Language />
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <button className="tp-info1">
            <div className="tp-info2">
              <span>{user?.fullName}</span>
              <p>{user?.isAdmin ? "Admin" : "Guest"}</p>
            </div>
            <div className="img-avatar">
              <img src={avatar} alt="" className="topAvatar" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps)(Topbar);
