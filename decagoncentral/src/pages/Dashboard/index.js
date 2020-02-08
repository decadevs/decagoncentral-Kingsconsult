import React from "react"
import "./style.css"
import Card from "../../components/Card"

const App = () => {
    return (  
        <div className="container">
            <Card title="squad 1"  description="this is squad one "/>
            <Card title="squad 2"  description="this is squad two "/>
            <Card title="squad 3"  description="this is squad two "/>
        </div>
    );
}
 
export default App;