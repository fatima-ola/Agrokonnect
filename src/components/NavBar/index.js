import React from 'react';
import 'materialize-css';
import Button from '../Button/index'
// import { Navbar, Icon, Row, Col} from 'react-materialize';
// import {NavLink} from 'react-router-dom'


const Index =()=> {
    return (
       <div class="section-wrapper">
            <header class="header">
                <div class="container">
                <a href="#" class="header-icon">
                    <i class="icons">menu</i>
                </a>
                <a href="#" class="header-logo"><img src="agrokonnect.png" width="100%"/></a>
                <nav class="menu">
                    <ul class="menu-list">
                    <li class="menu-item">
                        <a href="#">Home</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">AboutUs</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Products</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Testimonial</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Shop</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Blog</a>
                    </li>
                    <li class="menu-item">
                        <a href="#">Contact</a>
                    </li>
                    </ul>
                </nav>
                <a href="#" class="header-search">
                    <i class="material-icons">search</i>
                </a>
                <a href="#" class="header-search">
                    <i class="material-icons">shopping_cart</i>
                </a>
                <Button text="Register"></Button>
                <Button text="Login"></Button>
                </div>
            </header>
        </div>

    )
}

export default Index


