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
            header={<CardTitle image="/bean.png"></CardTitle>}
          >
            <h5>Beans</h5>
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
            header={<CardTitle image="/rice.jpg"></CardTitle>}
          >
            <h5>Rice</h5>
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
            header={<CardTitle image="/yam.jpg"></CardTitle>}
          >
            <h5>Yam</h5>
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
            header={<CardTitle image="/potato.jpg"></CardTitle>}
          >
            <h5>Potato</h5>
            <h6>$10.00</h6>
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
              header={<CardTitle image="/yellow-garri.jpg"></CardTitle>}
>
            <h5>Garri</h5>
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
    header={<CardTitle image="/oil-liquid.jpg"></CardTitle>}
  >
    <h5>Palm oil</h5>
    <h6>$12.00</h6>
       </Card>
       
       </Col>

</Row>

 </div>
    );
}


export default Index;