import React from 'react';
import NavBar from '../NavBar/index'
import About from '../About/index'
import HeroSection from '../HeroSection/index'
import Benefit from '../Benefit/Benefit'
import Footer from '../Footer/index'
import Description from '../Description/index'
import Signup from '../Signup/index'
import UserSignup from '../UserSignup/index'
import Login from '../Login/index'

const Index =()=> {
    return (
        <div>
           {/* <NavBar />   */}
           <NavBar /> 
           <HeroSection />
           <About/>  
           <Description />
           <Signup />
           <UserSignup />
           <Login />
           <Benefit />
           <Footer />  
        </div>
    )
}

export default Index
