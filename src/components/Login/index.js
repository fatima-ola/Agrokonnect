import React from 'react';
import {NavLink, } from 'react-router-dom'
import Input from '../TextInput/index';
import Button from '../Button/index';

const Index = () => {

    return (
        <div className="container formcontainer">

          <form>
                <div className="signup">
                    <NavLink to ="/" className="signup-title "><img src="agrokonnecc.png" alt="logo-img" className="form-img" /></NavLink>                 
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
                    <Button  className="buttonsignup green" text=" Login"/>
                                        
                    <p className="center-align">Don't have an account? <NavLink to = "/signup">Sign Up</NavLink></p>
                     
                </div>
            </form>
         
        </div>
    )
}

export default Index;