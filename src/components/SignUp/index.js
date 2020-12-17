import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import TextInput from './../TextInput/index';
import {Button} from 'react-materialize';


const Index = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [farmlong, setFarmlong] = useState('');
  const [crops, setCrops] = useState('');


  const handleChange = (e) => {
    const {name, value} = e.currentTarget;
    console.log(name, value);
    if(name === 'fullname'){
      setFullname(value);
    } else if (name === 'email') {
      setEmail(value);
    }else if (name === 'password') {
      setPassword(value)
    }else if (name === 'farmlong') {
        setFarmlong(value)
      }else if (name === 'crops') {
        setCrops(value)
      }
  }
 
  return(
    <form>
      <div className='signup'>
        <NavLink to ='/' className='signup-title'>AgroKonnect</NavLink>
        <TextInput
        placeholder="enter Fullname"
        type="text"
        label="Fullname"
        name="fullname"
        value={fullname}
        handleChange={handleChange}
        />
        <TextInput
        placeholder="enter Email Address"
        type="email"
        label="Email address"
        name="email"
        value={email}
        handleChange={handleChange}
        />
        <TextInput
        placeholder="enter Password"
        type="password"
        label="Password"
        name="password"
        value={password}
        handleChange={handleChange}
        />
        <TextInput
        placeholder="enter how long you have been farming "
        type="text"
        label="Farming Duration"
        name="farmlong"
        value={farmlong}
        handleChange={handleChange}
        />
        <TextInput
        placeholder="enter the type of crops you farm yearly "
        type="text"
        label="Crops Farmed"
        name="crops"
        value={crops}
        handleChange={handleChange}
        />
        <Button className="buttonsignup green darken-3"> 
        SignUp
        </Button>
        <p className="center-align">Already have an account? <a href='/login'>Login</a></p>   
     
      </div>
    </form>
  )
}

export default Index;