import React from 'react';
import NavBar from './../Navbar/NavBar';
import UpdateProfile from './../../UpdateProfile/index';
import UpdateProducts from './../../UploadProducts/index';
import Footer from '../../Footer/index';
import {Tabs, Tab} from 'react-materialize';


const Home = (props) => {
  const {handleLogout, displayName} = props;
    return(
        <div>
       <NavBar handleLogout={handleLogout} displayName={displayName}/>
       <div className="shop-page">
         <h2 className="ping">FARMER'S DASHBOARD</h2>
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
          <h6 className="welcome-note">Welcome to your dashboard page on Agrokonnect website.<br /> On this dashboard, you will edit your profile information and <br />upload available products with their price tags.</h6>
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
        title="Update Profile"
        className="section-info"
        >
        <UpdateProfile/>
         
        </Tab>
        <Tab
        options={{
        duration: 300,
        onShow: null,
        responsiveThreshold: Infinity,
        swipeable: false
        }}
        title="Upload Products"
        className="section-info"
        >
        <UpdateProducts />
        </Tab>
        </Tabs>
       <div className='shop-foot'>
       <Footer />
       </div>
      
        </div>
    )
}

export default Home;
