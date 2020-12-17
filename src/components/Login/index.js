import React from 'react';
import {NavLink, } from 'react-router-dom'

import Input from '../TextInput/index';
import {Checkbox, Button} from 'react-materialize'




const Index = () => {

    return (
        <div>

          <form >
                <div className="signup">
                    <NavLink to ="/"><img src="https://livedemo00.template-help.com/wt_prod-10492/theme/images/product-big-4-470x324.png" alt="welcome image" className="login-image" /></NavLink><br/>
                    
                    <p><img src="https://img.icons8.com/metro/2x/new-post.png" alt="user-image" className="user-icon" /> Email Address </p>
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     name="email"
                   />

                   <p><img src="https://img.icons8.com/metro/2x/forgot-password.png" alt="user-image" className="user-icon" /> Password </p>
                    <Input
                     placeholder="Password"
                     type="password" 
                     name="password"
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