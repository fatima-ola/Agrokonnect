import React from 'react';
import {Row, Col, Icon, Slider, Slide, Caption, Collapsible, CollapsibleItem} from 'react-materialize';

const Benefit = () => {
    return (
        <div className="container benefit-section">
            <Row>
                <Col className="black-text rightcol" m={5} s={12} l={6}> 
                <Slider
                fullscreen={false}
                options={{
                duration: 500,
                height: 400,
                indicators: true,
                interval: 6000
                }}
                >
                <Slide image={<img alt="" src="product1.png" className="responsive-img"/>}>
                <Caption className="imagecaption ">
                    <h4><a href="#peach">PEACHES</a></h4>
                    <h5 className="light grey-text text-lighten-3">
                        <div className="product-price-old black-text">&#8358; 1800:00</div>
                        <div className="product-price-new black-text">&#8358; 1300.00</div>
                    </h5>
                </Caption>
                </Slide>
                <Slide image={<img alt="" src="product2.png" className="responsive-img"/>}>
                <Caption className="imagecaption">
                    <h4><a href="#peach">WHITE RICE</a></h4>
                    <h5 className="light grey-text text-lighten-3">
                        <div className="product-price-old black-text">&#8358; 1800:00</div>
                        <div className="product-price-new black-text">&#8358; 1300.00</div>
                    </h5>
                </Caption>
                </Slide>
                <Slide image={<img alt="" src="product3.png" className="responsive-img"/>}>
                <Caption className="imagecaption">
                    <h4><a href="#peach">PEACHES</a></h4>
                    <h5 className="light grey-text text-lighten-3">
                        <div className="product-price-old black-text">&#8358; 1800:00</div>
                        <div className="product-price-new black-text">&#8358; 1300.00</div>
                    </h5>
                </Caption>
                </Slide>
                </Slider>
                            
                 </Col>
                <Col className=" black-text leftcol" m={7} s={12} l={6}> 
                    <h4 className="h4-title">Benefit of Organic Produce</h4>
                    <h3 className="faq">ORGANIC FOOD FAQ</h3>
                <Collapsible accordion>
                <CollapsibleItem
                    expanded={false}
                    header='What does "organic" mean?'
                        
                    icon={<Icon className="drop">expand_more</Icon>}
                    node="div"
                >
                    <p>
                    Organic products are grown in environmentally friendly ways. Toxic or persistent pesticides and other agricultural chemicals are prohibited. There is also a focus on renewable resources and the conservation of soil and water.
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Why eat organic?"
                    icon={<Icon className="drop">expand_more</Icon>}
                    node="div"
                >
                    <p>
                    Avoiding agricultural chemicals is one of the top reasons to eat organic food. In general, according to the latest research, consumers who buy organic products cite health/nutrition, taste and food safety as the top motivators for their purchases. Environmental effects are also a strong reason to buy and eat organic products.
                    </p>
                </CollapsibleItem>
                <CollapsibleItem
                    expanded={false}
                    header="Is organic food healthier?"
                    icon={<Icon className="drop">expand_more</Icon>}
                    node="div"
                >
                    <p>
                    There is growing research that indicate greater amounts of certain nutrients in organic crops compared to conventional crops. If you’re concerned about pesticides, the application of potentially harmful, long-lasting pesticides and fertilizers are not allowed in organic agriculture. The EPA considers 60% of all herbicides, 90% of all fungicides, and 30% of all insecticides as potentially cancer-causing.
                    </p>
                </CollapsibleItem>
                </Collapsible>
                </Col>
            </Row>
        </div>
    )
}

export default Benefit
