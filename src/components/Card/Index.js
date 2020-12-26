 import React from 'react';
 import {Card} from 'react-materialize'

 const Index =(props)  =>{
     const {actions, className,children, textClassName,header} = props
     return (
        <Card
        actions={actions}
          className={className}
          //closeIcon={<Icon>close</Icon>}
          //revealIcon={revealIcon}
          textClassName={textClassName}
          header={header}
          >
        {children}
        </Card>
     ); 
}

 export default Index;
