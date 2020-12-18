import React from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';

const Index = () => {
     return(
    <div className="product-1">
    <Row>
        <Col
          m={3}
          s={12}
        >
          <Card
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
            ]}
            className="blue-grey darken-1"
            closeIcon={<Icon>close</Icon>}
            revealIcon={<Icon>more_vert</Icon>}
            textClassName="white-text"
            header={<CardTitle image="/ginger.jpg"></CardTitle>}
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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