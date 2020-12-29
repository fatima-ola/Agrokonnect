import React from 'react'
import { Row, Col } from 'react-materialize'

export default function About() {
    return (
        <div className="parent-div">
            <Row>
                <Col m={6} s={12}>
                    <img src="/orange.jpg" alt="fruit" className="fruit-img center-align"/>
                
                </Col>
                <Col m={6} s={12}>
                    <div className="child-div">
                    <h6 className=" green-text" id="distinction"> Distinctions from AgroKonnect</h6>   
                    <h4> ABOUT US </h4> 
                    <p className="center-align p-text"> We are a fast growing e-commerce start-up, from our online platform called <b>agrokonnet,</b> farmers and masses
                         are provided with the platform to buy and sell organic,
                          fresh and consumable agricultural produce.
                    </p> 
                    </div>           
                </Col>
            </Row>
            
        </div>
    )
}
