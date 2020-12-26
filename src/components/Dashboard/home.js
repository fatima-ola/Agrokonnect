import React from 'react';
import Nav from './Nav';


const Home =(props)=> {
    const {handleLogout, displayName} = props;
    

return(
    <div>
    <Nav handleLogout={handleLogout} displayName={displayName}/>
        <h1>Welcome to my dashboard</h1>
        
        </div>
)
}

export default Home;