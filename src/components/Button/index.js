import React from 'react'
import {Button} from 'react-materialize'

const index = (props) => {
    const {className, text} = props
    return (
        
        <Button
            node="button"
            waves="light"
            
            className={className}
        >
            
            {text}
        </Button>
      
    )
}

export default index
