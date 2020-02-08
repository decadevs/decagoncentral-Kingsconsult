import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from "./pages/Dashboard"
import Helmet from 'react-helmet';


function App() {
  return (
    <div className="App">
      <h1>Decagon Central</h1>
    <Dashboard/>
    <Helmet bodyAttributes={{style: 'background : #f2ff2f 0% 0% no-repeat padding-box'}}/>
    </div>
  );
}

export default App;
