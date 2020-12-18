import React from 'react';
import {NavLink} from 'react-router-dom';
import Input from '../TextInput/index';
import {Checkbox} from 'react-materialize';
import Button from '../Button/index';


const Index = () => {
   return (
        <div className="container formcontainer">
          <form >
                <div className="signup">
                   <div className="form-img">
                   <NavLink to ="/" className="signup-title "><img src="agrokonnecc.png" alt="logo-img"  /></NavLink> 
                    </div>                
                    <NavLink to ="/" className="signup-title ">Register</NavLink>
                    
                    <Input
                     placeholder="Enter First Name"
                     type="text" 
                     name="firstname"
                     label="First Name"
                     iconName="account_circle"
                     
                    />
                    <Input
                     placeholder="Enter Last Name"
                     type="text" 
                     name="lastname"
                     label="Last Name"
                     iconName="account_circle"
                     
                    />
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
                    <Input
                     placeholder="Location"
                     type="defaultlocation" 
                     name="defaultlocation"
                     label="Location"
                     iconName="home"
                    />
                    <label>I am a</label>
                    <select className="browser-default">
                        <option value="" disabled selected>Choose your option</option>
                        <option value="1">Farmer</option>
                        <option value="2">Buyer</option>
                    </select>
                    <Checkbox
                    className="checkit"
                    id="Checkbox_3"
                    label="By Clicking Signup, you agree to our Terms and Conditions"
                    value="checkbox"
                    />
                     <Button  className="buttonsignup green" text="CREATE ACCOUNT"/>
                     <p className="center-align">OR</p>
                     <Button  className="buttonsignup red" text="SIGNUP WITH GOOGLE"/>
                     <Button  className="buttonsignup blue" text="SIGNUP WITH FACEBOOK"/>                
                   <p className="center-align">Already have an account? <NavLink to = "/login">Log in</NavLink></p>
                     
                </div>
            </form>
         
        </div>
    )
}

export default Index;



