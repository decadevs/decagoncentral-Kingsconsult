import { BrowserRouter as Router, Link } from "react-router-dom";
import React, { useState } from "react";


import logo from "../../assets/images/decagonlogo.png";
import "./style.css";

const Login = () => {
  const [userinfo, setUserinfo] = useState({email:"", password:""});

  const loginState = event => {
    console.log(event.target.value)
    setUserinfo({...userinfo, [event.target.name] : event.target.name})
  }

  const login = (event) => {
    event.preventDefault();
    fetch('http://localhost:8000/api/', {
      method: 'POst',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(userinfo)
    })
    .then(data => data.json())
    .then(data => {console.log(data.token)})
    .catch(error => console.log(error));
  }

  return (
    <Router>
      <div className="App1">
        <div className="App__Aside">
          <div>
            <img className="DecaLogo" src={logo} alt="decagon logo"></img>
            <p className="DecaInfo">
              Decagon is a software engineering institute ushering in a new
              phase of tech-powered growth and prosperity in Nigeria by training
              and deploying an army of leader-developers.
            </p>
          </div>
        </div>
        <div className="App__Form">
          <div className="FormCenter LoginForm">
            <form className="FormFields">
              <div className="FormTitle">
                <label
                  activeClassName="FormTitle__Link--Active"
                  className="FormTitle__Link"
                >
                  Login
                </label>
              </div>
              <div className="FormField">
                <label className="FormField__Label" htmlFor="email"> 
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="FormField__Input"
                  name="email" onChange={loginState}
                />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password"> 
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  className="FormField__Input"
                  name="password" onChange={loginState}
                />
              </div>

              <div className="FormField">
                <button className="FormField__Button mr-20" onClick={login}>Login</button>
                <Link to="/register" className="FormField__Link">
                  Create an account
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Login;
