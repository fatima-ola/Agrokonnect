import React, {useState, useEffect} from 'react';
import {firestore} from '../../config/firebase';
import {Row, Col, Card, CardTitle} from 'react-materialize';
import Button from '../Button/index';

const Index = () =>{
    const [farmerProducts, setFarmerProducts] = useState([]);

    const uid = localStorage.getItem('uid');

    useEffect(()=>{
        const getProduct = async () => {
            const products = await firestore.collection('products').get();
            const listProducts = [];
            if(products){
                products.forEach((product)=>{
                    if(uid === product.data().uid){
                        const farmerProduct = {
                            id: product.id,
                            productImage: product.data().productImage,
                            productName: product.data().productName,
                            productPrice: product.data().productPrice,
                            productQty: product.data().productQty,
                        }
                        listProducts.push(farmerProduct);
                    }
                    
                })
                setFarmerProducts(listProducts);
            }
        }
       getProduct()
    }, [farmerProducts,uid]);

    const handleDelete = async (id) => {
        try {
            const getProduct = await firestore.collection('products').get()
            getProduct.forEach((product)=>{
                if(product.id === id){
                firestore.collection('products').doc(id).delete();
                }
            })
           
        } catch (error) {
            
        }
    }

    return (
        <div className="container">
            <Row>
                {farmerProducts.map((product)=>{
                    return(
                        <div>
                            <Col   m={3}  s={12}>
                                <Card
                                className="blue-grey darken-1" 
                                textClassName="white-text"
                                header={<CardTitle image={product.productImage}></CardTitle>}
                                >
                                <h5>{product.productName}</h5>
                                <h6>{product.productPrice}</h6>
                                <br />
                               <Button text="Delete" handleClick={() => handleDelete(product.id)}/>   
                                </Card>
                            </Col>

                        </div>
                    )
                })}
            </Row>
        </div>
    )
}

export default Index
