import React from "react";
import "./Topbar.css";
import avatar from "../../assets/avatar.svg";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Book Rental Management</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Language />
            {/* <span className="topIconBadge">2</span> */}
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <button className="tp-info1">
            <div className="tp-info2">
              <span>Moussaddak Meddeb</span>
              <p>Admin</p>
            </div>
            <div className="img-avatar">
              <img src={avatar} alt="" className="topAvatar" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
