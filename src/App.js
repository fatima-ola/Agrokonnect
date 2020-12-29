import React, {useState, useEffect} from 'react';
import "./App.css";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Landing from './components/Landing/index';
import Signup from './components/Signup/index';
import Login from './components/Login/index';
import UserDashBoard from './components/UserDashboard/Home/index';
import FarmerDashboard from './components/FarmerDashboard/Home/Home';
import {auth, firestore} from './config/firebase';
import UpdateProfile from './components/UpdateProfile/index'



const App = () => {
  const [user, setUser] = useState('');

  useEffect (() =>{
    auth.onAuthStateChanged(async(userData) =>{
      if (userData){
       const profile = await firestore.collection('users').doc(userData.uid).get();
       if (profile.exists ){
         if(profile.data().category === 'Farmer'){
          setUser(profile.data().firstname || profile.data().fullname);
         }else if(profile.data().category === 'Buyer'){
          setUser(profile.data().firstname || profile.data().fullname);
         }
       }
      } else{
        setUser('');
      }
    })
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
        <Route exact path="/dashboard">
          <UserDashBoard />
        </Route>
        <Route exact path="/Userdashboard">
          <UserDashBoard displayName={user}  handleLogout={handleLogout}/>
        </Route>
        <Route exact path="/Farmerdashboard">
          <FarmerDashboard displayName={user}  handleLogout={handleLogout}/>
        </Route>
        <Route exact path="/updateprofile">
          <UpdateProfile />

        </Route>
      </Switch>
    </BrowserRouter>
  

  )
}

export default App;


