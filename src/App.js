import React, {useState, useEffect} from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import Dashboard from './components/Dashboard/home';
import {auth, firestore} from './config/firebase';
import UpdateProfile from './components/UpdateProfile/index'


const App = () => {
  const [user, setUser] = useState('');

  useEffect (() =>{
    auth.onAuthStateChanged(async(userData) =>{
      if (userData){
       const profile = await firestore.collection('users').doc(userData.uid).get();
       console.log(userData.firstname)
       if (profile.exists){
        setUser(profile.data().firstname || profile.data().fullname);  
       }
      } else{
        setUser('');
      }
    });
  }, []);
  
  
  const handleLogout = () => {
    auth.signOut();
    localStorage.removeItem('uid');
  }

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
        <Route path="/dashboard">
        <Dashboard displayName={user}  handleLogout={handleLogout}/>
      </Route>
        <Route exact path="/updateprofile">
          <UpdateProfile />
        </Route>
      </Switch>
    </BrowserRouter>
  

  );
};

export default App;


