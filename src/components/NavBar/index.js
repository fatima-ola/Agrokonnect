import React from 'react';
import 'materialize-css';
import Button from '../Button/index'
import { Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom'


const Index =()=> {
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
            className="white z-depth-0"
            >
            <NavLink to="/" className="black-text">
                Home
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
            <NavLink to="/signin" className="black-text">
                Shop
            </NavLink>
            <NavLink to="/signup" className="black-text">
                Contact
            </NavLink>
            <a href="#home" className="header-search">
                <Icon className="material-icons">search</Icon>
            </a>
            <a href="#home" className="header-search">
                <Icon className="material-icons">shopping_cart</Icon>
            </a>
           
           <span className="agrobtn">
            <Button text="Register"className="regbtn" />
            <Button text="Login" className="regbtn" />
           </span>
        
            </Navbar>
        
    </div>

    )
}

export default Index


