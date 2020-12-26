import React from 'react';
import {Row, Col, CardTitle} from 'react-materialize';
import Card from './../../Card/index';

const Index = () => {
     return(
    <div>
    <Row>
        <Col
          m={3}
          s={12}
        >
          <Card
            className="blue-grey darken-1"
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
             className="blue-grey darken-1"
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
            className="blue-grey darken-1"
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
            className="blue-grey darken-1"
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