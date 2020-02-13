import React from "react";
import "./style.css";
import Card from "../../components/Card";
import Card1 from "../../components/Card1";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <div className="decacentral">
        <h1>Decagon Central</h1>
      </div>
      <div className="multiple_cards">
        <Card
          title="HI Bond!!" description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        />
        <div className="small_cards">
          <Card1
            title="Find an employee" description="Change your profile name, picture, twitter handle and bio."
            link="search Employee"
          />
          <Card1 title="squad 3" description="this is squad two " />
        </div>
        <div className="small_cards">
          <Card1 title="squad 3" description="ths is squad two " />
          <Card1 title="squad 3" description="this is squad two " />
        </div>
      </div>
      <div>
        <Link to='/login'>Login</Link>
        <Link to='/'>Deca Dev</Link>
      </div>
    </div>
  );
};

export default App;
