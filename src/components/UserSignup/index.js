import React from 'react';
import {NavLink, } from 'react-router-dom'
import Input from '../TextInput/index';
import {Checkbox} from 'react-materialize'
import Button from '../Button/index';




const Index = () => {

    return (
        <div className="container formcontainer">
        <form >
                <div className="signup">
                    <NavLink to ="/" className="signup-title "><img src="logo.png" alt="logo-image" className="footer-img" />Sign Up as a User</NavLink>
                  
                    <Input
                     placeholder="Enter First Name"
                     type="text" 
                     name="firstname"
                     label="First Name"
                     
                    />
                    <Input
                     placeholder="Enter Last Name"
                     type="text" 
                     name="lastname"
                     label="Last Name"
                     
                    />
                     <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     name="email"
                     label="Email Address"
                   />
                    <Input
                    placeholder="Enter Phone Number" 
                    type="tel" 
                    name="phoneNumber"
                    label="Phone Number"
                    /> 
                    <Input
                     placeholder="Password"
                     type="password" 
                     name="password"
                     label="Password"
                    />  
                    <Checkbox
                    id="Checkbox_3"
                    label="By Clicking Signup, you agree to our Terms and Conditions"
                    value="checkbox"
                    />
                     <Button  className="buttonsignup green" text="CREATE ACCOUNT"/>
                    
                    <p className="center-align">Or</p>
                    <Button  className="buttonsignup red" text="SIGNUP WITH GOOGLE"/>
                     <Button  className="buttonsignup blue" text="SIGNUP WITH FACEBOOK"/>      
                        
                    <p className="signup-p">You're a Farmer? <NavLink href = "/signup" className="green-text">Sign Up here</NavLink>
                     </p>
                
                    <p className="center-align">Already have an account? <NavLink to = "/login">Log in</NavLink></p>
                     
                </div>
            </form>
         
        </div>
    )
}

export default Index;