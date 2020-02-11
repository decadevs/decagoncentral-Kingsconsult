import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./pages/Dashboard"
import Helmet from 'react-helmet';
import Session from "./pages/Session"
import Login from "./pages/Login"
import Signup from "./pages/Signup"


function App() {
  return (  
    <div className="App">
    {/* <Dashboard/> */}
    <Session />
    <Helmet bodyAttributes={{style: 'background : #F2F6FA 0% 0% no-repeat padding-box'}}/>
    </div>
  );
}

export default App;
