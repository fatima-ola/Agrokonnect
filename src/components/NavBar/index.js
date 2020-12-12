import React from 'react';
import 'materialize-css';
import { Navbar, Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom'


const Index =()=> {
    return (
        <div>
           <Navbar 
            alignLinks="right"
            brand={<a className="brand-logo black-text" href="/">TutChit</a>}
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
                Feature
            </a>
            <a href="testimonial" className="black-text">
                Testimonial
            </a>
            <NavLink to="/signin" className="black-text">
                Login
            </NavLink>
            <NavLink to="/signup" className="black-text">
                Signup
            </NavLink>
            </Navbar> 
          
        </div>
    )
}

export default Index
