import React from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';
import Button from '../../Button/index';
import MaterialButton from '../../MaterialButton/index';

const Index = () => {
     return(
    <div className="product-1">
    <Row>
        <Col
          m={3}
          s={12}
        >
          <Card
          actions={[<div className="cart-function">
          <MaterialButton />
          <Button className="" text="Checkout" />
          </div>
          
        ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            header={<CardTitle image="/cocoa.jpg"></CardTitle>}
            
          >
            <h5>Cocoa beans</h5>
            <h6>$300.00</h6>
          </Card>
        </Col>

        <Col
          m={3}
          s={12}
        >
          <Card
          actions={[<div className="cart-function">
          <MaterialButton />
          <Button className="" text="Checkout" />
          </div>
        ]}
             className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            header={<CardTitle image="/ginger.jpg"> </CardTitle>}
          > 
            <h5>Ginger</h5>
            <h6>$10.00</h6>
          </Card>
        </Col>

        <Col
          m={3}
          s={12}
        >
          <Card
          actions={[<div className="cart-function">
          <MaterialButton />
          <Button className="" text="Checkout" />
          </div>
        ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            header={<CardTitle image="/nut.jpg"></CardTitle>}
          >
            <h5>Groundnuts</h5>
            <h6>$20.00</h6>
          </Card>
        </Col>

        <Col
          m={3}
          s={12}
        >
          <Card
          actions={[<div className="cart-function">
          <MaterialButton />
          <Button className="" text="Checkout" />
          </div>
        ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            header={<CardTitle image="/kernel.jpg"></CardTitle>}
          >
            <h5>Oil Palm</h5>
            <h6>$50.00</h6>

          </Card>
        </Col>
      </Row>
    </div>
    );
    
};

export default Index;