import React from 'react';
import 'materialize-css';
import Button from '../Button/index'
import { Navbar, Icon,Dropdown, Row, Col} from 'react-materialize';
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
            className="white z-depth-1"
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
            <a href="#home" className="header-search">
                <Icon className="material-icons">search</Icon>
            </a>
            {/* <a href="#home" className="header-search">
                <Icon className="material-icons">shopping_cart</Icon>
            </a> */}
            
            {/* drowdown for cart */}
          
            <Dropdown
                id="Dropdown_7"
                options={{
                alignment: 'center',
                autoTrigger: true,
                closeOnClick: true,
                constrainWidth: false,
                container: null,
                coverTrigger: false,
                hover: false,
                inDuration: 150,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                outDuration: 250
                }}
                trigger={<a href="#!" className="black-text"><Icon className="material-icons">shopping_cart</Icon>{' '}</a>}
            className="cart-dropdown"
            >
                
                <h5 className="dropdown-margin"> IN CART: 0 PRODUCTS
                        <br/> TOTAL PRICE: #0.00</h5>
                
               <div >

               <div className="carttable-row">
                <img src="https://livedemo00.template-help.com/wt_prod-10492/theme/images/product-mini-4-146x132.png" alt="orange-img" className=" cartoption-image"  />
                <h5 className="dropdown-margin">Oranges <br/> #100.00 <br/> <p className="go-to-cart-p">Add to Cart <img src="https://img.icons8.com/android/2x/shopping-cart.png" alt="cart-image" className="cartimage-icon" /></p></h5>
                
                </div>
                <div className="carttable-row">
                <img src="https://livedemo00.template-help.com/wt_prod-10492/theme/images/product-mini-5-146x132.png" alt="orange-img" className=" cartoption-image"  />
                <h5  className="dropdown-margin">Bananas <br/> #120.00 <br/> <p className="go-to-cart-p">Add to Cart <img src="https://img.icons8.com/android/2x/shopping-cart.png" alt="cart-image" className="cartimage-icon" /> </p></h5>
                </div>

               </div>

                <Button text="GO TO CART" className="shoppingcart-button"/>
                
                </Dropdown>

           <NavLink to="/signup" className="regbtn"> 
               <Button text="Register" className="thebtn"/>
            </NavLink>
            <NavLink to="/login" className="regbtn">
                <Button text="Login" className="thebtn" />
            </NavLink> 
            </Navbar>
        
    </div>

    )
}

export default Index


