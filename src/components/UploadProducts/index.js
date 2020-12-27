import React, {useState, useEffect} from 'react';
import Input from '../TextInput/index';
import Button from '../Button/index';
import {firestore} from '../../config/firebase';
import { useHistory } from 'react-router-dom';

const Index = () => {

    // const {handleLogout, displayName} = props;
    const [productImage, setProductImage] = useState('');
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQty, setProductQty] = useState('');
    const history = useHistory();

    const uid = localStorage.getItem('uid');

    useEffect(()=>{
        if(!uid){
            history.push('/')
        }
    }, []);



    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name === 'productImage'){
            setProductImage(value);
        }else if (name === 'productName'){
            setProductName(value);
        }else if(name === '[productPrice'){
            setProductPrice(value);
        }else if (name === 'productQty'){
            setProductQty(value)
        }
       
    }

    const handleAdd = (e) => {
        e.preventDefault();
        try {
        const data = firestore.collection('products').add({
            uid,
            productImage,
            productName,
            productPrice,
            productQty
        })
        } catch (error) {
            
        }
      };
    
    
      const handleDelete = (e) => {
        e.preventDefault();
      }

    return (
        <div>    
            <h4 className="center-align">Upload Product</h4>
            <form >
               <div className="update">
                <Input type="file" name="productImage" label="Product Image" value={productImage} handleChange={handleChange} placeholder="Upload Product Image"/>

                <Input type="text" name="productName" label="Product Name" value={productName} handleChange={handleChange} placeholder="Enter Product Name"/>

                <Input type="text" name="productPrice" label="Product Price" value={productPrice} handleChange={handleChange} placeholder="Enter Product Price"/>

                <Input type="text" name="productQty" label="Product Quantity" value={productQty} handleChange={handleChange} placeholder="Enter Product Quantity"/>

                <Button text="Add Product" handleClick={handleAdd} className="buttonLogin blue" />
                <Button text="Delete Product" handleClick={handleDelete} className="buttonLogin red" />
                </div>
            </form>                                              
        </div>
    )
}

export default Index
