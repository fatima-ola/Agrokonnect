import React, {useState, useEffect} from 'react';
import Input from '../TextInput/index';
import Button from '../Button/index';
import {firestore} from '../../config/firebase';


const Index = () => {

    const [areas, setAreas] = useState([]);
    const [banks, setBanks] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [defaultLocation, setDefaultLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [farmname, setFarmname] = useState('');
    const [acctname, setAcctname] = useState('');
    const [acctnumber, setAcctnumber] = useState('');
    const [bankname, setBankname] = useState('');
  

    const uid = localStorage.getItem('uid');

    const locationApi = 'https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt';

    const bankApi = 'https://raw.githubusercontent.com/tomiiide/nigerian-banks/master/banks.json';


    useEffect(() => {
        const fetchApi = async () =>{
            const data = await fetch(locationApi);
            const response = await data.json();
            setAreas(response);
        }
        fetchApi()
    }, [])
    
   

    useEffect(() => {
        const fetchBankApi = async () =>{
            const nigBankApi = await fetch(bankApi);
            const response = await nigBankApi.json();
            setBanks(response);
            
        } 
        fetchBankApi()  
    }, [])


  
    useEffect(() => {
        const fetchedData = async () => {
            const data = await firestore.collection('users').get();
            data.forEach((doc)=>{
            if(doc.id === uid){
                setFirstname(doc.data().firstname);
                setLastname(doc.data().lastname);
                setEmail(doc.data().email);
                setDefaultLocation(doc.data().defaultLocation);
            }
            })

        }
        fetchedData()
    }, [uid]);


    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'firstname'){
            setFirstname(value);
        }else if (name === 'lastname'){
            setLastname(value);
        }else if(name === 'email'){
            setEmail(value);
        }else if (name === 'defaultlocation'){
            setDefaultLocation(value)
        }else if(name === 'phone'){
            setPhone(value);
        }else if(name === 'farmname'){
            setFarmname(value);
        }else if(name === 'acctname'){
            setAcctname(value);
        }else if(name === 'acctnumber'){
            setAcctnumber(value);
        }else if(name === 'bankname'){
            setBankname(value);
        }
       
    }


    
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = firestore.collection('users').doc(uid);
        user.update({
            firstname,
            lastname,
            email,
            location: defaultLocation,
            phoneNumber: phone,
            farmName: farmname,
            accountName: acctname,
            accountNumber: acctnumber,
            bankName: bankname       
        })

        
    }

    return (
        <div>    
            <h4 className="center-align">Update Profile Information</h4>
            <form onSubmit={handleSubmit}>
               <div className="update">
               <Input type="text" name="firstname" label="First Name" value={firstname} handleChange={handleChange} placeholder="Enter First Name"/>

                <Input type="text" name="lastname" label="Last Name" value={lastname} handleChange={handleChange} placeholder="Enter Last Name"/>

                <Input type="text" name="email" label="Email Address" value={email} handleChange={handleChange} placeholder="Enter Email Address"/>

                <Input type="text" name="phone" label="Phone Number" value={phone} handleChange={handleChange} placeholder="Enter Phone Number"/>

                <Input type="text" name="farmname" label="Farm Name" value={farmname} handleChange={handleChange} placeholder="Enter Farm Name"/>

                <label className="info">Location</label>
                <select className="browser-default" type="text" name="defaultlocation" value={defaultLocation} onChange={handleChange}>
                {areas.map((area)=>(
                    <option key={area.state.id} value={area.state.name}>{area.state.name}</option>
                ))}
                </select> 

                <Input type="text" name="acctname" label="Account Name" value={acctname} handleChange={handleChange} placeholder="Enter Account Name"/>

                <Input type="text" name="acctnumber" label="Account Number" value={acctnumber} handleChange={handleChange} placeholder="Enter Account Number"/>

                <label className="info">Bank Name</label>
                <select className="browser-default" type="text" name="bankname" value={bankname} onChange={handleChange} >
                {banks.map((bank)=>(
                    <option key={bank.id} value={bank.name}>{bank.name}</option>
                   
                ))}  
                </select>      
                <Button text="Update" className="buttonLogin" />
                </div>
            </form>                                              
        </div>
    )
}

export default Index
