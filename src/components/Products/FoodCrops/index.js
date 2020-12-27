import React from 'react';
import {Row, Col, CardTitle} from 'react-materialize';
import Card from './../../Card/index';
//import Button from '../../Button/index';
//import MaterialButton from '../../MaterialButton/index';


const Index = () => {
    return(
      <div className="container">
        <Row>
        <Col
          m={3}
          s={12}
        >
           <Card
            className="blue-grey darken-1"
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
            className="blue-grey darken-1"
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
            className="blue-grey darken-1"
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
            className="blue-grey darken-1"
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
              className="blue-grey darken-1"
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
    className="blue-grey darken-1"
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