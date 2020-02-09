import React from "react"
import "./style.css"
import Card from "../../components/Card"
import Card1 from "../../components/Card1"
import Navbar from "../../components/navbar"



const App = () => {
    return (  
        <div className="container">
            {/* <Navbar title="" /> */}
            <Card title="HI Bond!!"  description="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."/>
            <Card1 title="Find an employee"  description="Change your profile name, picture, twitter handle and bio." link="search Employee"/>
            <Card1 title="squad 3"  description="this is squad two "/>
            <Card1 title="squad 3"  description="this is squad two "/>
            <Card1 title="squad 3"  description="this is squad two "/>

        </div>
    );
}
 
export default App;