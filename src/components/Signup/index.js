import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import Input from '../TextInput/index';
import {Checkbox} from 'react-materialize';
import Button from '../Button/index';


import {auth, firestore, googleProvider, facebookProvider} from '../../config/firebase'

const Index = () => {
// useState to update the change in state
        const [areas, setAreas] = useState([]);         
        const [firstname, setFirstName] = useState('');
        const [lastname, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [defaultLocation, setDefaultLocation] = useState('');
        const [category, setCategory] = useState('');
        const [errorEmail, setErrorEmail] = useState('');
        const [errorPassword, setErrorPassword] = useState('');
        const [errorMessage, setErrorMessage] = useState('');
        const history = useHistory();
        
        const locationApi = 'https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt';

        useEffect(() => {
            const fetchApi = async () =>{
                const data = await fetch(locationApi);
                const response = await data.json();
                setAreas(response);
            }
            fetchApi()
        }, [])
        

// function to handle changes
        const handleChange = (e) => {
            const {name, value} = e.currentTarget;
            // console.log(name, value)
            if (name === 'firstname'){
            setFirstName(value)
            }else if (name === 'lastname'){
                setLastName(value)
            }else if (name === 'email'){
                setEmail(value)
            }else if (name === 'password'){
                setPassword(value)
            }else if (name === 'defaultlocation'){
                setDefaultLocation(value)
            }else if (name === 'category'){
                setCategory(value)
            }
        }


        

            // handlekeyUp function
            const handleKeyUp = () =>{
                setErrorMessage ('');
            }



// function for handle submit
const handleSubmit = async (e) =>{
    e.preventDefault();

    try {
        if (!firstname || !lastname || !email || !password || !defaultLocation || !category){
        return setErrorMessage ('All fields are required')
    } 
    const {user} = await auth.createUserWithEmailAndPassword(email, password);
    // console.log(user);

    if (user){
        const profile =firestore.collection('users').doc(user.uid);
        await profile.set ({
            firstname,
            lastname,
            email,
            defaultLocation,
            category
        })
        localStorage.setItem('uid', user.uid);
        history.push('/login')
    }
    

    }catch (error) {
        if (error.code === 'auth/weak-password'){
            setErrorPassword(error.message)
        }else if (error.code === 'auth/email-already-in-use'){
            setErrorEmail(error.message)
        }else if (error.code === 'auth/invalid-email'){
            setErrorEmail(error.message)
        }


    }
}

// google login
const handleGoogle = async (e) => {
    e.preventDefault();
    const {user} = await auth.signInWithPopup(googleProvider);

    // console.log (user);

    if (user){
        const profile =firestore.collection('users').doc(user.uid);
        await profile.set ({
            fullname: user.displayName,
            email: user.email,

        })
        localStorage.setItem('uid', user.uid);
        history.push('/login')
    }
}

const handleFacebook = async (e) => {
    e.preventDefault();
    const {user} = await auth.signInWithPopup(facebookProvider);

    // console.log (user);

    if (user){
        const profile =firestore.collection('users').doc(user.uid);
        await profile.set ({
            fullname: user.displayName,
            email: user.email,

        })

        localStorage.setItem('uid', user.uid);
        history.push('/login')
    }
}




   return (
        <div className="container formcontainer">
          <form onSubmit={handleSubmit}>
                <div className="signup">
                   <div className="form-img">
                   <NavLink to ="/" className="signup-title "><img src="agrokonnecc.png" alt="logo-img"  /></NavLink> 
                    </div>                
                    <NavLink to ="/" className="signup-title ">Register</NavLink>
                    {errorMessage ? <p className="errormsgg">{errorMessage}</p> : ''}

                    <Input
                     placeholder="Enter First Name"
                     type="text" 
                     name="firstname"
                     label="First Name"
                     iconName="account_circle"
                     value={firstname}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     
                     
                    />
       
                    <Input
                     placeholder="Enter Last Name"
                     type="text" 
                     name="lastname"
                     label="Last Name"
                     iconName="account_circle"
                     value={lastname}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     required={true}
                    />
       
                    <Input
                     placeholder="Enter Email Address"
                     type="email" 
                     name="email"
                     label="Email Address"
                     iconName="email"
                     value={email}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     error={errorEmail}
                    
                   />
                   
                   <Input
                     placeholder="Password"
                     type="password" 
                     name="password"
                     label="Password"
                     iconName="vpn_key"
                     value={password}
                     handleChange={handleChange}
                     handleKeyUp={handleKeyUp}
                     error={errorPassword}

                    />
                   
                    <label className="info">Location</label>
                    <select className="browser-default" type="text" name="defaultlocation" value={defaultLocation} onChange={handleChange} handleKeyUp={handleKeyUp}>
                    {areas.map((area)=>(
                        <option key={area.state.id} value={area.state.name}>{area.state.name}</option>
                    ))}
                    </select> 
                    
                    <label>Category</label> 
                    <select className="browser-default" type="text" name="category" value={category} onChange={handleChange} handleKeyUp={handleKeyUp} >
                     <option value="" diasbled selected>Choose your option</option>
                     <option value="Farmer">Farmer</option>
                     <option value="Buyer">Buyer</option>
                     </select>
                    
                    <Checkbox
                    className="checkit"
                    id="Checkbox_3"
                    label="By Clicking Signup, you agree to our Terms and Conditions"
                    value="checkbox"
                    required={true}
                    />
                     <Button  className="buttonsignup green" text="CREATE ACCOUNT"/>
                     <p className="center-align">OR</p>
                     <Button  className="buttonsignup red" text="SIGNUP WITH GOOGLE" handleClick={handleGoogle} />
                     <Button  className="buttonsignup blue" text="SIGNUP WITH FACEBOOK" handleClick={handleFacebook} />                
                   <p className="center-align">Already have an account? <NavLink to = "/login">Log in</NavLink></p>
                     
                </div>
            </form>
         
        </div>
    )
}

export default Index;



