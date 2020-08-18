import React from 'react';
import { Route, Link, Switch } from "react-router-dom";

import Friends from './components/Friends'
import Login from './components/Login'
import PrivateRoute from "./components/PrivateRoute";

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/protected">Protected Page</Link>
      </nav>
      <Switch>
        <PrivateRoute exact path="/protected" component={Friends} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
