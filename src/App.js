import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Landing from "./components/Landing/index";
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/index';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
