import React from 'react';
import Navbar from '../Navbar';
import Footer from '../../Footer/index';
import {Breadcrumb} from 'react-materialize';
import {NavLink} from 'react-router-dom';

const Index = () => {
    return(
        <div>
       <Navbar />
       <div className="shop-page">
         <h2 className="ping">SHOPPING PAGE</h2>
       </div>
       <div className="bread-shop">
       <Breadcrumb className="teal">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/dashboard">UPDATE PROFILE</NavLink>
                <NavLink to="/cart">UPLOAD PRODUCT</NavLink>
       </Breadcrumb>
       </div>
       <div>
       <Products />
       </div>
       <div className='shop-foot'>
       <Footer />
       </div>
      
        </div>
    )
}

export default Index;
