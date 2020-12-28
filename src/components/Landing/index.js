import React from 'react';
import NavBar from '../NavBar/index'
import About from '../About/index'
import Description from '../Description/index'
import HeroSection from '../HeroSection/index'
import Benefit from '../Benefit/Benefit'
import Footer from '../Footer/index'
import Clients from '../Clients/index';
import Tabs from '../Tabs/index';
import Cartpage from '../Cartpage/index'

const Index =()=> {
    return (
        <div>
           <NavBar /> 
           <HeroSection />
           <About/>  
           <Description />
           <div>
            <div className="later">
                <h6>Latest Arrivals</h6>
                <h4>NEW PRODUCTS</h4>
            </div>
           <Tabs />
           </div>           
            <Clients />
           <Benefit />
           <Cartpage />
           <Footer />  
           <Footer /> 
        </div>
    )
      
          

}

export default Index
