import React, {useState} from 'react';
import Input from '../TextInput/index';
import Button from '../Button/index';
import {firestore} from '../../config/firebase';


const Index = () => {

    const [image, setImage] = useState(null);
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQty, setProductQty] = useState('');
    
    const uid = localStorage.getItem('uid');

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(e.target.files[0] ){
            setImage(e.target.files[0]);
        }else if (name === 'productName'){
            setProductName(value);
        }else if(name === 'productPrice'){
            setProductPrice(value);
        }else if (name === 'productQty'){
            setProductQty(value)
        }    
       
    };

    const handleAdd = (e) => {
        e.preventDefault();
        try {
        firestore.collection('products').add({
            uid,
            image,
            productName,
            productPrice,
            productQty
        })
        } catch (error) {
            
        }
      };


    return (
        <div>    
            <h4 className="center-align">Upload Product</h4>
            <form >
               <div className="update">
                <Input type="text" name="productName" label="Product Name" value={productName} handleChange={handleChange} placeholder="Enter Product Name"/>

                <Input type="text" name="productPrice" label="Product Price" value={productPrice} handleChange={handleChange} placeholder="Enter Product Price"/>

                <Input type="text" name="productQty" label="Product Quantity" value={productQty} handleChange={handleChange} placeholder="Enter Product Quantity"/>

                <Button text="Add Product" handleClick={handleAdd} className="buttonLogin blue" />
                </div>
            </form>                                             
        </div>
    )
}

export default Index
