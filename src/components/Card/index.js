import React from 'react';
import {CardPanel} from 'react-materialize'

const Index = ({children}) => {
    return(
      <CardPanel className="hoverable z-depth-1">
            <span className="white-text">
            {children}
            </span>
          </CardPanel>
        
    )
}

export default Index;