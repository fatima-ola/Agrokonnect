import React from 'react';
import {NavLink, } from 'react-router-dom'
import Input from '../TextInput/index';
import Button from '../Button/index';

const Index = () => {

    return (
        <div className="container formcontainer">

          <form>
                <div className="signup">
                    <div className="form-img">
                   <NavLink to ="/" className="signup-title "><img src="agrokonnecc.png" alt="logo-img"  /></NavLink> 
                    </div> 
                    <NavLink to ="/" className="signup-title ">Login</NavLink>              
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     name="email"
                     label="Email Address"
                     iconName="email"
                   />
                    <Input
                     placeholder="Password"
                     type="password" 
                     name="password"
                     label="Password"
                     iconName="vpn_key"
                    />             
                    <Button  className="buttonsignup green" text=" Login"/>
                                        
                    <p className="center-align">Don't have an account? <NavLink to = "/signup">Sign Up</NavLink></p>
                     
                </div>
            </form>
         
        </div>
    )
}

export default Index;