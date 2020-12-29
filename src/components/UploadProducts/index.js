import React, {useState} from 'react';
import Input from '../TextInput/index';
import {TextInput} from 'react-materialize';
import Button from '../Button/index';
import {firestore, storage} from '../../config/firebase';


const Index = () => {

    const [image, setImage] = useState(null);
    const [url, setUrl] = useState("");
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productQty, setProductQty] = useState('');
    
    const uid = localStorage.getItem('uid');

    const handleChange = (e) => {
        const {name, value} = e.currentTarget;
        if(name==="image" ){
            setImage(e.target.files[0]);
        }else if (name === 'productName'){
            setProductName(value);
        }else if(name === 'productPrice'){
            setProductPrice(value);
        }else if (name === 'productQty'){
            setProductQty(value)
        }  
       
        // console.log(e.target.files[0].name)
    
    };

    const handleAdd = (e) => {

        e.preventDefault();

        try {
        firestore.collection('products').add({
            uid,
            image: image.name,
            productName,
            productPrice,
            productQty
        })
        const uploadTask = storage.ref(`/images/${image.name}`).put(image);
        uploadTask.on("state_changed", console.log, console.error, () => {
            storage
            .ref("images")
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
                setImage(null);
                setUrl(url);
            });
        });

        } catch (error) {
           console.log(error) 
        }

      };
      console.log(url);
    
    //   const handleUpload = (e) => {
    //     e.preventDefault();
    // const uploadTask = storage.ref(`/images/${image.name}`).put(image);
    // uploadTask.on("state_changed", console.log, console.error, () => {
    //   storage
    //     .ref("images")
    //     .child(image.name)
    //     .getDownloadURL()
    //     .then((url) => {
    //       setImage(null);
    //       setUrl(url);
    //     });
    // });
    //   };

    return (
        <div>    
            <h4 className="center-align">Upload Product</h4>
            <form >
               <div className="update">
                <TextInput  label="Product Image" type="file" name="image"  onChange={handleChange} />

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
