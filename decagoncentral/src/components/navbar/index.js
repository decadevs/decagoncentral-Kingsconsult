import React from "react";
import NavStyle from "./style";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import decagonlogo from "../../assets/images/decagonlogo.png"

const Navbar = props => {
  return (
    <NavStyle>

      <div className="wrapper">
          <div>
          <img className="decagonlogo" src={decagonlogo} alt="img" />
          </div>
        <div className="sidebar">
          <ul className="nav_link">
            <li className="fas fa-home">Dashboard</li>
            <li className="fas fa-user">Create Profile</li>
            <li className="fas fa-address-card">My profile</li>
            <li className="fas fa-project-diagram">Task</li>
            <li className="fas fa-blog">Create Team</li>
          </ul>
        </div>
      </div>
    </NavStyle>
  );
};

export default Navbar;
