import React from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import UserDashBoard from './components/UserDashboard/Home/index';
import PaymentPage from './components/UserDashboard/PaymentPage/index';

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
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/dashboard">
          <UserDashBoard />
        </Route>
        <Route exact path="/payment">
          <PaymentPage />
        </Route>
      </Switch>
    </BrowserRouter>
  

  );
};

export default App;


