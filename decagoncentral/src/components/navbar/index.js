import React from 'react'
import  navStyle  from "./style"
import logo from "../../assets/images/Image 5.png"

const Navbar = (props) => {
  return (
      <Navbar>
        <div className='contain'>
          <div className='writeup'>
          <h4 className="writeuphead">{props.title}</h4>
          <p>
            {props.description}
          </p>
          <a href='facebook.com'>
            {props.link}
          </a>
          </div>
        </div>
        <div className="contain">
          <div className="img">
            <img className="pre" src={logo} alt="img" />
          </div>
        </div>
        </Navbar>
      
    
  );
}

export default Navbar; 