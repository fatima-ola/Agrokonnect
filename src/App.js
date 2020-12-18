import React from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/index';
import Signup from './components/Signup/index'
import UserSignup from './components/UserSignup/index'
import Login from './components/Login/index'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/usersignup">
          <UserSignup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </BrowserRouter>
  

  );
};

export default App;


