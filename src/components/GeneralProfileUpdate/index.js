import React, {useState, useEffect} from 'react';
import {NavLink, useHistory} from 'react-router-dom';
import Input from '../TextInput/index';
import {Checkbox} from 'react-materialize';
import Button from '../Button/index';
import {auth, firestore} from '../../config/firebase';


const Index = () => {

    const [areas, setAreas] = useState([]);
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [defaultLocation, setDefaultLocation] = useState('');
    const [category, setCategory] = useState('');
    const [errorMessage, setErrorMessage] = useState ('');
    const history = useHistory();
  

    const uid = localStorage.getItem('uid');

    const locationApi = 'https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt';



    useEffect(() => {
        const fetchApi = async () =>{
            const data = await fetch(locationApi);
            const response = await data.json();
            setAreas(response);
        }
        fetchApi()
    }, [])
    
   
  
    useEffect(() => {
        const fetchedData = async () => {
            const data = await firestore.collection('users').get();
            data.forEach((doc)=>{
            if(doc.id === uid){
                setFullname(doc.data().fullname);
                setEmail(doc.data().email);
            }
            })

        }
        fetchedData()
    }, [uid]);

    const handleKeyUp = (e) =>{
        setErrorMessage ('');
    }


    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'fullname'){
            setFullname(value);
        }else if(name === 'email'){
            setEmail(value);
        }else if (name === 'defaultlocation'){
            setDefaultLocation(value)
        }else if(name === 'category'){
            setCategory(value);
        }
       
    }


    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = firestore.collection('users').doc(uid);
        user.update({
            fullname,
            email,
            location: defaultLocation,
            category: category    
        })
        auth.onAuthStateChanged(async(userData) =>{
            if (userData){
             const profile = await firestore.collection('users').doc(userData.uid).get();
         
             if (profile.exists ){
               if(profile.data().category === 'Farmer'){
                 history.push('/Farmerdashboard')
               }else if(profile.data().category === 'Buyer'){
                 history.push('/Userdashboard')
               }
              
             }
            } 
            })

        
    }

    return (
        <div>    
            <h4 className="center-align">Update Profile Information</h4>
            <form onSubmit={handleSubmit}>
               <div className="update">
               <div className="form-img">
                   <NavLink to ="/" className="signup-title "><img src="agrokonnecc.png" alt="logo-img"  /></NavLink> 
                </div>                
                    <NavLink to ="/" className="signup-title ">Update Profile</NavLink>
                    {errorMessage ? <p className="errormsg">{errorMessage}</p> : ''}  
               <Input type="text" name="fullname" label="Full Name" value={fullname} handleChange={handleChange} placeholder="Enter Full Name"  handleKeyUp={handleKeyUp}/>

                <Input type="text" name="email" label="Email Address" value={email} handleChange={handleChange} placeholder="Enter Email Address"  handleKeyUp={handleKeyUp}/>

                <label className="info">Location</label>
                <select className="browser-default" type="text" name="defaultlocation" value={defaultLocation} onChange={handleChange}  handleKeyUp={handleKeyUp}>
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
    
                <Button text="Update" className="buttonLogin green" />
                </div>
            </form>                                              
        </div>
    )
}

export default Index
