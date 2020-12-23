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
            header={<CardTitle image="/mango.jpg"></CardTitle>}
          >
            <h5>Mango</h5>
            <h6>$1.00</h6>
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
            header={<CardTitle image="/watermelon.jpg"></CardTitle>}
          >
            <h5>Watermelon</h5>
            <h6>$2.00</h6>
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
            header={<CardTitle image="/citrus.jpg"></CardTitle>}
          >
            <h5>Oranges</h5>
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
            header={<CardTitle image="/pawpaw.jpg"></CardTitle>}
          >
            <h5>Pawpaw</h5>
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
                header={<CardTitle image="/dates.jpg"></CardTitle>}
>
              <h5>Dates</h5>
              <h6>$5.00</h6>
           </Card>
         </Col>

</Row>

 </div>
    );
}


export default Index;