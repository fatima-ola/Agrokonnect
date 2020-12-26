import React from 'react';
import NavBar from './../Navbar/NavBar';
import Footer from '../../Footer/index';
import {Breadcrumb} from 'react-materialize';
import {NavLink} from 'react-router-dom';



const Home = (props) => {
  const {handleLogout, displayName} = props;
    return(
        <div>
       <NavBar handleLogout={handleLogout} displayName={displayName}/>
       <div className="shop-page">
         <h2 className="ping">FARMER'S DASHBOARD</h2>
       </div>
       <div className="bread-shop">
       <Breadcrumb className="teal">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/updateprofile">UPDATE PROFILE</NavLink>
                <NavLink to="/uploadproduct">UPLOAD PRODUCT</NavLink>
       </Breadcrumb>
       </div>
       <div className='shop-foot'>
       <Footer />
       </div>
      
        </div>
    )
}

export default Home;
