import React from 'react';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


  
const Index =() =>{
  return(
    <div>
      <Button
      startIcon={<ShoppingCartIcon />}
      variant="contained"
        color="secondary">
          ADD TO CART
      </Button>
    </div>
  )
};

export default Index;