import React from 'react';

import {Row, Col} from 'react-materialize'


const Index = () => {
    return (
        <div className="description-image white-text">

        <Row>
            <Col m={3} s={12}>
                <img src="./icon1.PNG" alt="image1"/>
            <h5 className="description-image-h5">ALWAYS FRESH</h5>
            <p>Thanks to innovative organic technologies, 
                our products are always fresh and don’t 
                need any treatment.</p>
            </Col>

            <Col m={3} s={12}>
                <img src="./icon2.PNG" alt="image2"/>
            <h5 className="description-image-h5">100% ORGANICS</h5>
            <p>We adhere to our organic philosophy, 
                which implies avoiding pesticides and 
                non-organic fertilizers.</p>
            </Col>

            <Col m={3} s={12}>
                <img src="./icon3.PNG" alt="image3"/>
            <h5 className="description-image-h5"> NO ADDITIVES</h5>
            <p>We avoid any artificial additives after 
                harvesting the crops to offer you the <br/>
                best organic products.</p>
            </Col>

            <Col m={3} s={12}>
                <img src="./icon4.PNG" alt="image4"/>
            <h5 className="description-image-h5">MODERN FARM</h5>
            <p>Though we rely on traditional organic 
                farming a lot, we also use the latest
                 farming innovations.</p>
            </Col>
        </Row>



        </div>
    )
}
export default Index;