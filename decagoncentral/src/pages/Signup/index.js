import React from 'react';
import "./style.css"
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';




const Signup = () => {
  return (
<Router>

    <div className="FormCenter">
    <div className="">
      <label to="/sign-in" className="FormField__Link1">Login</label>
    </div>
        <form className="FormFields">

        <div className="FormTitle">
              <label activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Create Profile</label> 
          </div>
          <div className="NameField">
          <div className="FormField">
            <label className="FormField__Label1" htmlFor="name">Full Name:</label>
            <input type="text" id="name" className="FormField__Input1" name="name" />
          </div>
          <div className="FormField">
            <label className="FormField__Label1" htmlFor="name">Username:</label>
            <input type="text" id="name" className="FormField__Input1" name="name" />
          </div>
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password:</label>
            <input type="password" id="password" className="FormField__Input"  name="password" />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address:</label>
            <input type="email" id="email" className="FormField__Input"  name="email" />
          </div>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">Position:</label>
            <input type="text" id="name" className="FormField__Input" name="name" />
          </div>
          <div className="FormField">
              <button className="FormField__Button mr-20">Join now</button> 
              <Link to="/sign-in" className="FormField__Link">Login</Link>
          </div>
        </form>
      </div>
      </Router>

  );
};

export default Signup;
