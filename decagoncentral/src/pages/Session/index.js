import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import logo from "../../assets/images/decagonlogo.png";

import "./style.css";
import Signup from "../Signup";
import Login from "../Login"

const Session = () =>{
    return (
        <div className="App1">
          <div className="App__Aside">
            <div>
              <img className="DecaLogo" src={logo} alt="decagon logo"></img>
              <p className="DecaInfo">
                Decagon is a software engineering institute ushering in a new
                phase of tech-powered growth and prosperity in Nigeria by
                training and deploying an army of leader-developers.
              </p>
            </div>
          </div>
          <div className="App__Form">
            {/* <div className="PageSwitcher">
                <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
              </div> */}

            {/* <div className="FormTitle">
                  <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</NavLink>  <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
              </div> */}

            {/* <Route exact path="/" component={Signup}></Route>
            <Route path="/sign-in" component={Login}></Route> */}
          <Signup />
          {/* <Login /> */}
          </div>
        </div>
    );
  }

export default Session;
