import React from 'react';
import {Tabs, Tab} from 'react-materialize';
import Products from '../Products/index';
import FoodCrops from '../Products/FoodCrops/index';
import CashCrops from '../Products/CashCrops/index';
import Vegetables from '../Products/Vegetables/index';
import Fruits from '../Products/Fruits/index';

const Index = () => {
    return(
        <div>
            <Tabs className="tab-demo">
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
   
    title="ALL"
  >
      <Products />
  </Tab>
  <Tab
    active
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
  
    title="FOOD CROPS"
  >
      <FoodCrops />
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}

    title="CASH CROPS"
  >
      <CashCrops />
  </Tab>
  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
    title="VEGETABLES"
  >
      <Vegetables />
  </Tab>

  <Tab
    options={{
      duration: 300,
      onShow: null,
      responsiveThreshold: Infinity,
      swipeable: false
    }}
   
    title="FRUITS"
  >
      <Fruits />
  </Tab>

</Tabs>

     </div>
    )
};

export default Index;