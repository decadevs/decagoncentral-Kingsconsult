import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Helmet from "react-helmet";

import Dashboard from "./pages/Dashboard";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // const [userinfo, setUserinfo] = useState();
  return (
    <Router>
      <div className="App">
        <Helmet
          bodyAttributes={{
            style: "background : #F2F6FA 0% 0% no-repeat padding-box"
          }}
        />
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Signup}></Route>
          <Route path="/" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
