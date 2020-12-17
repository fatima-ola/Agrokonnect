import React from 'react';
import NavBar from '../NavBar/index'
import About from '../About/index'
import NavBar from '../NavBar/index';
import HeroSection from '../HeroSection/index'
import Benefit from '../Benefit/Benefit'
import Footer from '../Footer/index'
import Description from '../Description/index'

const Index =()=> {
    return (
        <div>
           <NavBar /> 
           <About/>
           <NavBar />  
           <HeroSection />
           <Description />
           <Benefit />
           <Footer />  
        </div>
    )
}

export default Index
