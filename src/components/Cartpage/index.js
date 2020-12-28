import React from 'react';

import {Table, Button} from 'react-materialize'


const Index = () => {
    return (
        <div>

        <div className="cart-image">
            <h2 className= "white-text center-align cart-style"> CART PAGE </h2>
        </div>
        
        <div className="carticon-div">
            <p> Home <img src="https://img.icons8.com/android/2x/long-arrow-right.png" alt="arrow" className="cart-icon" />
            SHOP <img src="https://img.icons8.com/android/2x/long-arrow-right.png" alt="arrow" className="cart-icon" />
             CART PAGE </p>
        </div>


        {/* cart table */}
        <div className="cart-table">
             <Table>
            <thead>
                <tr>
                <th data-field="id">
                    Product Name
                </th>
                <th data-field="name">
                    Price
                </th>
                <th data-field="price">
                    Quantity
                </th>
                <th data-field="price">
                    Total
                </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>
                    <div className="carttable-row">
                <img src="https://livedemo00.template-help.com/wt_prod-10492/theme/images/product-mini-4-146x132.png" alt="orange-img" />
                <h3>Oranges</h3>
                </div>
                </td>
                <td>
                    #100.00
                </td>
                <td>
                    1
                </td>
                <td>
                    #100.00
                </td>
                </tr>
                <tr>
                <td>
                <div className="carttable-row">
                <img src="https://livedemo00.template-help.com/wt_prod-10492/theme/images/product-mini-5-146x132.png" alt="orange-img" />
                <h3>Bananas</h3>
                </div>
                </td>
                <td>
                    #120.00
                </td>
                <td>
                    1
                </td>
                <td>
                    #120.00
                </td>
                </tr>
                <tr>
                <td>
                <div className="carttable-row">
                <img src="https://livedemo00.template-help.com/wt_prod-10492/theme/images/product-mini-2-106x104.png" alt="orange-img" className="table-image" />
                <h3>Pineapple</h3>
                </div>
                </td>
                <td>
                    #150.00
                </td>
                <td>
                    1
                </td>
                <td>
                    #150.00
                </td>
                </tr>
            </tbody>
            </Table>
            </div>

            <Button
            large
            node="a"
            style={{
            marginRight: '10%'
            }}
            waves="light"
            className="cart-button"
        >
           Proceed to Checkout
        </Button>

        </div>
    )
}

export default Index;