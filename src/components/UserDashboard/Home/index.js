import React, {useEffect} from 'react';
import Navbar from '../Navbar';
import Products from '../../Products/index';
import Footer from '../../Footer/index';
import {Tabs, Tab} from 'react-materialize';
import {firestore} from './../../../config/firebase';
import {useHistory} from 'react-router-dom';



const Index = (props) => {
  const {handleLogout, displayName} = props;
  const history = useHistory();

  const uid = localStorage.getItem('uid');

    useEffect(()=>{
      if(!uid){
          history.push('/')
      }
    }, []);

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
        Cart Page
        </Tab>
        </Tabs>
       <div>
       
       </div>
       <div className='shop-foot'>
       <Footer />
       </div>
      
        </div>
    )
}

export default Index;