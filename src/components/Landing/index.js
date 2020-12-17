import React from 'react';
import NavBar from '../NavBar/index';
import HeroSection from '../HeroSection/index'
import Footer from '../Footer/index'
import Description from '../Description/index'
import Signup from '../Signup/index'
import UserSignup from '../UserSignup/index'
import Login from '../Login/index'

const Index =()=> {
    return (
        <div>
           {/* <NavBar />   */}
           <HeroSection />
           <Description />
           <Signup />
           <UserSignup />
           <Login />
           <Footer />  
        </div>
    )
}

export default Index
