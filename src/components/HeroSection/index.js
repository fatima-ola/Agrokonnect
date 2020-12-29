import React from 'react';
import 'materialize-css'
import {NavLink} from 'react-router-dom'
import {  Slide, Slider, Caption, Button} from 'react-materialize'



const Index = () => {
    return (
        <div>
        
        <Slider
  fullscreen={false}
  options={{
    duration: 500,
    height: 450,
    indicators: false,
    interval: 6000
  }}
>
  <Slide image={<img alt="" src="https://cdn.pixabay.com/photo/2013/01/20/09/23/rice-paddies-75590__340.jpg" className="hero-img" />}>
    <Caption placement="center">
      <h5 className="button-h5">
        Welcome to our Farm
      </h5>
      <h1 className=" white-text button-h1 ">
        PRODUCTS
      </h1>
      <h6 className="button-h6">
        GROWN WITH LOVE
      </h6>
      <NavLink to="/signup" className="regbtn"> 
      <Button 
      large
      node="a"
      style={{
      marginRight: '5px'
      }}
      waves="light"
      className="hero-button"
      >
      Shop now
    </Button>     
      </NavLink>
      
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://media.istockphoto.com/photos/fresh-vegetables-with-circle-in-the-center-for-copy-space-picture-id1184422591?b=1&k=6&m=1184422591&s=170667a&w=0&h=SR6FOtr0-K-XOluYUMGI4pA8Zy-yGH-Zmw1WnshJfWA="/>}>
  <Caption placement="center">
      <h6 className="button-h5 highqty">
        High-Quality Organic Products
      </h6>
      <h1 className=" white-text button-veggie ">
        VEGETABLES
      </h1>
      <h6 className="button-h6">
        WITHOUT HARMFUL ADDITIVES
      </h6>
      <NavLink to="/signup" className="regbtn"> 
      <Button 
    large
    node="a"
    style={{
      marginRight: '5px'
    }}
    waves="light"
    className="hero-button"
  >
    Shop now
  </Button>    
      </NavLink>  
    </Caption>
  </Slide>
  <Slide image={<img alt="" src="https://cdn.pixabay.com/photo/2016/10/06/14/40/apples-1719198__340.jpg" className="hero-img" />}>
  <Caption placement="center">
      <h5 className="button-h5">
        Fresh Organic Produce
      </h5>
      <h1 className=" white-text button-h1">
        FRUITS
      </h1>
      <h6 className="button-h6">
        WITH LOTS OF VITAMINS
      </h6>
      <NavLink to="/signup" className="regbtn"> 
      <Button 
    large
    node="a"
    style={{
      marginRight: '5px'
    }}
    waves="light"
    className="hero-button"
  >
    Shop now
  </Button>   
      </NavLink>
     
    </Caption>
  </Slide>
</Slider>

        </div>
    )
}
export default Index;