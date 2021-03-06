import React from 'react';
import Navbar from '../Navbar';
import Products from '../../Products/index';
import Cartpage from '../../Cartpage';
import PaymentPage from './../PaymentPage/index';
import Footer from '../../Footer/index';
import {Tabs, Tab} from 'react-materialize';




const Index = (props) => {
  const {handleLogout, displayName} = props;
 

    return(
        <div>
       <Navbar handleLogout={handleLogout} displayName={displayName}/>
       <div className="shop-page">
         <h2 className="ping">USER'S DASHBOARD</h2>
       </div>
       <Tabs className="tab-demo z-depth-1">
        <Tab
        options={{
        duration: 300,
        onShow: null,
        responsiveThreshold: Infinity,
        swipeable: false
        }}
        id="home"
        title="Home"
        className="section-info"
        >
        <div className="center-align">
          <h6 className="welcome-note">Welcome to your dashboard page on Agrokonnect website.<br /> On this dashboard, you be able to click on a product and shop <br />for the product by adding it to cart, you will be able to checkout to <br />make payment for products purchased.</h6>
        </div>
        </Tab>
        <Tab
        active
        options={{
        duration: 300,
        onShow: null,
        responsiveThreshold: Infinity,
        swipeable: false
        }}
        id="shop"
        title="SHOP"
        className="section-info"
        >
        <Products />
         
        </Tab>
        <Tab
        options={{
        duration: 300,
        onShow: null,
        responsiveThreshold: Infinity,
        swipeable: false
        }}
        title="CART PAGE"
        className="section-info"
        >
        <Cartpage />
        </Tab>
        <Tab
        options={{
        duration: 300,
        onShow: null,
        responsiveThreshold: Infinity,
        swipeable: false
        }}
        title="CHECKOUT PAGE"
        className="section-info"
        >
        <PaymentPage />
        </Tab>
        </Tabs>
       <div className='shop-foot'>
       <Footer />
       </div>
      
        </div>
    )
}

export default Index;