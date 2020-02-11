import React from 'react';
import "./style.css"
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';




const Login = () => {
  return (
    <Router>
    <div className="FormCenter LoginForm">
    <form className="FormFields">

    <div className="FormTitle">
          <label activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Login</label> 
      </div>
    <div className="FormField">
        <label className="FormField__Label" htmlFor="email">Email:</label>
        <input type="email" id="email" className="FormField__Input" name="email" />
      </div>

      <div className="FormField">
        <label className="FormField__Label" htmlFor="password">Password:</label>
        <input type="password" id="password" className="FormField__Input" name="password" />
      </div>

      <div className="FormField">
          <button className="FormField__Button mr-20">Login</button> <Link to="/" className="FormField__Link">Create an account</Link>
      </div>
    </form>
  </div>
  </Router>
  );
};

export default Login;
