import React, {useState, useEffect} from 'react';
import Input from '../TextInput/index';
import Button from '../Button/index';

const Index = () => {

    const [areas, setAreas] = useState([]);
    const [selectedOption, setSelectedOption] = useState('');
    const [banks, setBanks] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setlastname] = useState('');
    const [email, setEmail] = useState('');
    const [location, setLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [acctname, setAcctname] = useState('');
    const [acctnumber, setAcctnumber] = useState('');

    const locationApi = 'https://gist.githubusercontent.com/segebee/7dde9de8e70a207e6e19/raw/90c91f7318d67c9534e3a4d74e4bd755b144e01e/gistfile1.txt';

    const bankApi = 'https://raw.githubusercontent.com/tomiiide/nigerian-banks/master/banks.json'

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
  
  

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        setSelectedOption(areas.find(area => (area.state.id == value)))
    }

    
    return (
        <div>    
            <h2 className="center-align">Update Profile Information</h2>
            <form >
               <div className="update">
               <Input type="text" name="firstname" label="First Name" value={firstname} handleChange={handleChange} placeholder="Enter First Name"/>
                <Input type="text" name="lastname" label="Last Name" value={lastname} handleChange={handleChange} placeholder="Enter Last Name"/>
                <Input type="text" name="email" label="Email Address" value={email} handleChange={handleChange} placeholder="Enter Email Address"/>
                <Input type="text" name="phonenumber" label="Phone Number" value={phone} handleChange={handleChange} placeholder="Enter Phone Number"/>
                
                <label className="info">Location</label>
                <select className="browser-default" >
                {areas.map((area)=>(
                    <option key={area.state.id}>{area.state.name}</option>
                ))}
                </select>  
               
                <Input type="text" name="acctname" label="Account Name" value={acctname} handleChange={handleChange} placeholder="Enter Account Name"/>
               
                <label className="info">Bank Name</label>
                <select className="browser-default" >
                {banks.map((bank)=>(
                    <option key={bank.id}>{bank.name}</option>
                ))}
                </select>      
                <Button text="Update" className="buttonLogin blue" />
                </div>
            </form>                                              
        </div>
    )
}

export default Index
