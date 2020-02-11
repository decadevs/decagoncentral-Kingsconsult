import React from "react";
import Card1 from "./style";
import logo from "../../assets/images/Image 5.png";

const Card = props => {
  return (
    <Card1>
      <div className="contain">
        <div className="writeup">
          <h4>{props.title}</h4>
          <p>{props.description}</p>
          <a href="facebook.com">{props.link}</a>
        </div>
      </div>
      <div className="contain">
        <div className="img">
          <img className="presentation" src={logo} alt="img" />
        </div>
      </div>
    </Card1>
  );
};

export default Card;
