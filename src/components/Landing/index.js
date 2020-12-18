import React from 'react';
import NavBar from '../NavBar/index'
import About from '../About/index'
import Description from '../Description/index'
import HeroSection from '../HeroSection/index'
import Benefit from '../Benefit/Benefit'
import Footer from '../Footer/index'



const Index =()=> {
    return (
        <div>
           <NavBar /> 
           <HeroSection />
           <About/>  
           <Description />
           <Benefit />
           <Footer />  
        </div>
    )
}

export default Index
