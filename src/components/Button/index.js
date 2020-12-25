import React from 'react'
import {Button} from 'react-materialize'

const index = (props) => {
    const {className, text, handleClick} = props
    return (
        
        <Button
            node="button"
            waves="light"
            onClick={handleClick}
            className={className}
        >
            
            {text}
        </Button>
      
    )
}

export default index
