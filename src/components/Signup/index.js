import React from 'react';
import {NavLink, } from 'react-router-dom'

import Input from '../TextInput/index';
import {Checkbox, Button} from 'react-materialize'




const Index = () => {

    return (
        <div>

          <form >
                <div className="signup">
                    <NavLink to ="/" className="signup-title "><img src="https://img.icons8.com/plasticine/2x/26e07f/leaf.png" alt="leaf-image" className="footer-img" />Sign Up as a Farmer</NavLink>
                    <Input
                     placeholder="Enter FullName"
                     type="text" 
                     name="fullname"
                     label="FullName"
                    />
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
                    <Input
                     placeholder="Repeat Password"
                     type="repeatpassword" 
                     name="repeatpassword"
                     label="Repeat Password"
                    />
                    <Input
                     placeholder="My Default Pickup Location"
                     type="defaultlocation" 
                     name="defaultlocation"
                     label="Location"
                    />
                    <Checkbox
                    id="Checkbox_3"
                    label="By Clicking Signup, you agree to our Terms and Conditions"
                    value="checkbox"
                    />
                     <Button  className="buttonsignup green">
                        CREATE ACCOUNT
                    </Button>
                    
                    <p className="center-align">Or</p>
                    <h6 className="center-align"> Signup with your social media accounts or email address</h6>
         
                    <div className="div-signup-icon">
                    <img src="https://img.icons8.com/color/2x/4a90e2/google-logo.png" alt="google" className="signup-icon" />
                    <img src="https://img.icons8.com/windows/2x/4a90e2/facebook-f.png" alt="google" className="signup-icon" />
                    <img src="https://img.icons8.com/fluent/2x/4a90e2/twitter.png" alt="google" className="signup-icon" />
                    </div>
                        
                        <p className="signup-p">You're a Corporate customer? <a href = "/usersignup" className="green-text">Sign Up here</a>
                        <br/> We have a powerful dedicated features for you! </p>
                
                    <p className="center-align">Already have an account? <a href = "/login">Log in</a></p>
                     
                </div>
            </form>
         
        </div>
    )
}

export default Index;