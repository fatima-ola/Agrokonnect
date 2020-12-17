import React from 'react';
import NavBar from '../NavBar/index';
import Clients from '../Clients/index';
import Tabs from '../Tabs/index';

const Index =()=> {
    return (
        <div>
           <NavBar />
           <div>
            <div className="later">
                <h6>Latest Arrivals</h6>
                <h4>NEW PRODUCTS</h4>
            </div>
           <Tabs />
           </div> 
           
         <Clients />
         </div>
        
    );
}

export default Index
