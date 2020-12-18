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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
    actions={[
      <a key="1" href="/"><i class="small material-icons" title="search">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
                <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
                <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
      </Row>

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
            header={<CardTitle image="/orange.jpg"></CardTitle>}
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
            actions={[
                <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
                <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
                    header={<CardTitle image="/dates.jpg"></CardTitle>}
  >
                 <h5>Dates</h5>
                 <h6>$5.00</h6>
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
            header={<CardTitle image="/carrots.png"></CardTitle>}
          >
            <h5>Carrots</h5>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
            actions={[
              <a key="1" href="/"><i class="small material-icons 1">search</i></a>,
              <a key="2" href="/"><i class="small material-icons">shopping_cart</i></a>
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
                    header={<CardTitle image="/lettuce.jpg"></CardTitle>}
  >
                 <h5>Lettuce</h5>
                 <h6>$5.00</h6>
           </Card>
         </Col>
      </Row>
</div>
);
};


export default Index;