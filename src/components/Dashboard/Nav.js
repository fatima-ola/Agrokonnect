import React from 'react';
import 'materialize-css';
import Button from '../Button/index'
import { Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom'


const Nav =(props)=> {
    const {handleLogout, displayName} = props;
    return (
    <div className="navbar-fixed">
          <Navbar 
            alignLinks="right"
            brand={<a className="brand-logo black-text" href="/"><img src="agrokonnecc.png" alt="logoimg" /></a>}
            centerChildren
            id="mobile-nav"
            menuIcon={<Icon>menu</Icon>}
            options={{
              draggable: true,
              edge: 'left',
              inDuration: 250,
              onCloseEnd: null,
              onCloseStart: null,
              onOpenEnd: null,
              onOpenStart: null,
              outDuration: 200,
              preventScrolling: true
            }}
            className="white z-depth-1"
            >
            <NavLink to="/" className="black-text" style={{backgroundColor: "transparent"}} id="joy">
            Welcome {displayName},
            </NavLink>
            <a href="#about" className="black-text">
                About
            </a>
            <a href="#feature" className="black-text">
                Products
            </a>
            <a href="testimonial" className="black-text">
                Testimonial
            </a>
            
            <a href="#home" className="header-search">
                <Icon className="material-icons">search</Icon>
            </a>
            <a href="#home" className="header-search">
                <Icon className="material-icons">shopping_cart</Icon>
            </a>
           <NavLink to="/signup" className="regbtn"> 
               <Button text="check out" className="thebtn"/>
            </NavLink>
            <NavLink onClick={handleLogout} to ='/' className="black-text " id="joy">
            Logout
            </NavLink>
            
            </Navbar>
        
    </div>

    )
}

export default Nav;


