import React from 'react';
import {NavLink, } from 'react-router-dom'
import Input from '../TextInput/index';
import Button from '../Button/index';




const Index = () => {

    return (
        <div className="container formcontainer">

          <form>
                <div className="signup">
                    <NavLink to ="/" className="signup-title "><img src="logo.png" alt="logo-image" className="footer-img" />Login</NavLink>                 
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     name="email"
                     label="Email Address"
                   />
                    <Input
                     placeholder="Password"
                     type="password" 
                     name="password"
                     label="Password"
                    />             
                    <Button  className="buttonsignup green">
                        Login
                    </Button>
                        
                
                    <p className="center-align">Already have an account? <a href = "/login">Log in</a></p>
                     
                </div>
            </form>
         
        </div>
    )
}

export default Index;