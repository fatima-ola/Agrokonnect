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
            header={<CardTitle image="/carrots.png"></CardTitle>}
          >
            <h5>Carrots</h5>
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
            header={<CardTitle image="/cabbage.jpg"></CardTitle>}
          >
            <h5>Cabbage</h5>
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
            header={<CardTitle image="/spinach.jpg"></CardTitle>}
          >
            <h5>Spinach</h5>
            <h6>$5.00</h6>
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
            header={<CardTitle image="/onions.jpg"></CardTitle>}
          >
            <h5>Onions</h5>
            <h6>$100.00</h6>
          </Card>
        </Col>
      </Row>

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
                    header={<CardTitle image="/lettuce.jpg"></CardTitle>}
  >
                 <h5>Lettuce</h5>
                 <h6>$5.00</h6>
           </Card>
         </Col>

</Row>

 </div>
    );
}


export default Index;