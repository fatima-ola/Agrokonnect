import React from 'react'
import {Button} from 'react-materialize'

const index = (props) => {
    const {className, text} = props
    return (
        <div>
            <Button
                node="button"
                waves="light"
               
                className={className}
            >
               {text}
            </Button>
        </div>
    )
}

export default index
