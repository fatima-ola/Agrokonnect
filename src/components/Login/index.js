import React, { useState }  from 'react';
import {NavLink, useHistory } from 'react-router-dom'
import Input from '../TextInput/index';
import Button from '../Button/index';
import { auth } from '../../config/firebase'

const Index = () => {
    const [email, setEmail] = useState ('');
    const [password, setPassword] = useState ('');
    const [errorEmail, setErrorEmail] = useState ('');
    const [errorMessage, setErrorMessage] = useState ('');
    const history = useHistory();

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if (name === 'email'){
            setEmail(value);
        } else if (name === 'password'){
            setPassword(value)
        }
    }
    const handleKeyUp = (e) =>{
        setErrorMessage ('')
      }

      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
           if (!password || !email) {
               setErrorMessage('All fields are required!')
             }
            const {user} = await auth.signInWithEmailAndPassword(email, password);
               localStorage.setItem('uid', user.uid);
               history.push('/dashboard')
        } catch (error) {
            if(error.code === 'auth/user-not-found'){
                setErrorMessage('Invalid email address or password');
            }else if(error.code === 'auth/invalid-email'){
                setErrorEmail(error.message)
            }else if(error.code === 'auth/wrong-password'){
                setErrorMessage('Invalid email address or password')
            }
            
        }
    }
    return (
        <div className="container formcontainer">

          <form onSubmit={handleSubmit}>
                <div className="signup">
                    <div className="form-img">
                   <NavLink to ="/" className="signup-title "><img src="agrokonnecc.png" alt="logo-img"  /></NavLink> 
                    </div> 
                    <NavLink to ="/" className="signup-title ">Login</NavLink>
                    {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''}              
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     name="email"
                     label="Email Address"
                     value={email}
                     iconName="email"
                     error={errorEmail}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                   />
                    <Input
                     placeholder="Password"
                     type="password" 
                     name="password"
                     label="Password" 
                     value={password}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
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