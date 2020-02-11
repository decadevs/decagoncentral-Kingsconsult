import React, { Component } from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import logo from "../../assets/images/decagonlogo.png";

import "./style.css";
import Signup from "../Signup";
import Login from "../Login"

const Session = () =>{
    return (
      <Router>
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
          <Route path="/sign" component={Signup}>
              </Route>
              <Route path="/log" component={Login}>
              </Route>
          </div>
        </div>
        </Router>
    );
  }

export default Session;
