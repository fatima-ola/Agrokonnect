import React from 'react';
import {TextInput, Icon} from 'react-materialize'



const Index = (props) => {
    const {label, placeholder, name, value, type,iconName } = props
    return (
        <div>
            <label><Icon className="regicon">{iconName}</Icon>{label}</label>
            <TextInput
            placeholder={placeholder}
            type={type}
            inputClassName="browser-default"
            name={name}
            value={value}
            // onChange={handleChange}
            // onKeyUp={handleKeyUp}
            // onSubmit={handleSubmit}
            />


            {/* <p className="red-text">{error}</p> */}

        </div>
    )
}

export default Index;