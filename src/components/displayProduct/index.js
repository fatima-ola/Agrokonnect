import React, {useState, useEffect} from 'react'
import {firestore} from '../../config/firebase'

export default function Display() {
    const [farmerProducts, setFarmerProducts] = useState([]);

    const uid = localStorage.getItem('uid');

    useEffect(()=>{
        const getProduct = async () =>{
            const products = await firestore.collection('products').get();
            const listOfProducts = [];
            if(products){
                products.forEach((product)=>{
                    const farmerProduct = {
                        id: product.id,
                        name: product.data().name,
                        price: product.data().price,
                        quantity: product.data().quantity,
                        description: product.data().description



                    }
                    listOfProducts.push(farmerProduct);
                })
                setFarmerProducts(listOfProducts);
            }
        }
        getProduct();
    },[])
    return (
        <div>
            <Row>
            {farmerProducts.map((product)=>{
                return(
                    <div>
                        <Col m={4} s={12}>
                        <CardPanel className="teal"
                        title={product.name}>
      {product.price}
      {product.quantity}
      {product.description}
    </CardPanel>
                            
                        
                        </Col>

                        
                        
                         </div>
                )
                
            })}
            </Row>
            
        </div>
    )
}
