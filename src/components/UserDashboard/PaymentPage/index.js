import React from 'react';
//import CartPage from '../CartPage/index';
import Navbar from '../Navbar';
import Footer from '../../Footer/index';
import {Breadcrumb, Checkbox,isChecked, Row, Col, Collection, CollectionItem} from 'react-materialize';
import {NavLink} from 'react-router-dom';
import TextInput from '../../TextInput/index';


const Index = () => {
    return(
        <div>
            <Navbar />
       <div className="shop-page">
         <h2 className="ping">CHECKOUT</h2>
       </div>
       <div className="bread-shop">
       <Breadcrumb className="teal">
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/dashboard">SHOP</NavLink>
                <NavLink to="/checkout">CHECKOUT</NavLink>
       </Breadcrumb>
       </div>
       <div className="payment-box">
       <form className="item">
           <h3>BILLING ADDRESS</h3>
           <TextInput 
              placeholder=" Enter Full Name"
              type="text"
              label="Full Name"
              name="fullName"
              //value={fullName}
             // handleChange={handleChange} 
             // handleKeyUp={handleKeyUp}
              />

            <TextInput 
              placeholder=" Enter Home Address"
              type="text"
              label="Home Address"
              //name="fullName"
              //value={HomeAddress}
             // handleChange={handleChange} 
             // handleKeyUp={handleKeyUp}
              />

            <TextInput 
              placeholder=" Enter City/Town"
              type="text"
              label="City Town"
              //name="fullName"
              //value={City/Town}
             // handleChange={handleChange} 
             // handleKeyUp={handleKeyUp}
              />

             <TextInput placeholder=" Enter Email address"
              type="email" 
              label="Email address"
              //name="email"
              //value={email} 
              //handleChange={handleChange}
              //handleKeyUp={handleKeyUp}
              //error={errorEmail}
              />

              <TextInput placeholder=" Enter Phone Number"
               type="tel"  
              label="Phone Number"
              //name="password"
              //value={PhoneNumber}
              //handleChange={handleChange}
              //handleKeyUp={handleKeyUp}
              //error={errorPassword}
              />

       </form>

       <form className="item">
           <h3>DELIVERY ADDRESS</h3>
           <TextInput 
              placeholder=" Enter Full Name"
              type="text"
              label="Full Name"
              name="fullName"
              //value={fullName}
             // handleChange={handleChange} 
             // handleKeyUp={handleKeyUp}
              />

            <TextInput 
              placeholder=" Enter Home Address"
              type="text"
              label="Home Address"
              //name="fullName"
              //value={HomeAddress}
             // handleChange={handleChange} 
             // handleKeyUp={handleKeyUp}
              />

            <TextInput 
              placeholder=" Enter City/Town"
              type="text"
              label="City Town"
              //name="fullName"
              //value={City/Town}
             // handleChange={handleChange} 
             // handleKeyUp={handleKeyUp}
              />

             <TextInput placeholder=" Enter Email address"
              type="email" 
              label="Email address"
              //name="email"
              //value={email} 
              //handleChange={handleChange}
              //handleKeyUp={handleKeyUp}
              //error={errorEmail}
              />

              <TextInput placeholder=" Enter Phone Number"
               type="tel"  
              label="Phone Number"
              //name="password"
              //value={PhoneNumber}
              //handleChange={handleChange}
              //handleKeyUp={handleKeyUp}
              //error={errorPassword}
              />
              </form>
              </div>
              <div className="bill-ship">
                <Checkbox
                    checked={isChecked}
                    filledIn
                    id="Checkbox"
                    label="My Billing Address and Shipping Address are the Same."
                />
            </div>
              <div>
                  <h4>YOUR SHOPPING CART</h4>
              </div>

              <div className="cart-box">
                  <div className="cart-box-item">
                    <h4>PAYMENT METHOD</h4>
                    <div>
                <Checkbox
                    checked={isChecked}
                    filledIn
                    id="Checkbox_"
                    label="DIRECT BANK TRANSFER"
                    value="bank transfer"
                />
                <br/>
                <Checkbox
                    checked={isChecked}
                    filledIn
                    id="Checkbox_3"
                    label="PAYPAL"
                    value="paypal"
                />
                 <br/>
                <Checkbox
                    checked={isChecked}
                    filledIn
                    id="Checkbox_2"
                    label="CHEQUE PAYMENT"
                    value="cheque payment"
                />
                    </div>

                    </div>
         <div className="cart-box-item">
         <h4>CART TOTAL</h4>

         <div>
            <Row>
                <Col m={12}  s={12} >
                    <Collection>
                    <CollectionItem>
                        CART SUBTOTAL
                        <span className="secondary-content">
                        $43.00
                        </span>
                    </CollectionItem>

                    <CollectionItem>
                        SHIPPING
                        <span className="secondary-content">
                        FREE
                        </span>
                    </CollectionItem>

                    <CollectionItem>
                        TOTAL
                        <span className="secondary-content">
                        $43.00
                        </span>
                    </CollectionItem> 
                    </Collection>
                </Col>
            </Row>
        </div>
      </div>

              </div>
       <div className='shop-foot'>
       <Footer />
       </div>
        </div>
    )
};

export default Index;