import React from 'react';
import {Slider, Slide, Caption} from 'react-materialize';
import './index.css';
const Index = () => {
return(
 <div className="clients">
   <div className="later">
        <h6>Latest Testimonials</h6>
        <h4>OUR CLIENTS</h4>
    </div>
    <div className="Please">
     <Slider
        fullscreen={false}
        options={{
          height: 400,
          indicators: true,
          interval: 6000,
          inDuration: 200
        
        }}
        
      >
      <Slide>
              <Caption placement="center" className="dark black-text">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
                <h5 className="agro">
                  AgroKonnect always satisfy my food needs. I appreciate the fact that they provide me with
                  quality products everytime.
                </h5>
                < div className="image">
                  <img src="MEEE.jpg" alt="Dolapo" className="circle team-img responsive-img" />
                  <div className="names">
                    <h5>DOLAPO</h5>
                    <h6>Client</h6>
                  </div>
                  </ div>
                
                
              </Caption>
          </Slide>

            <Slide >
              <Caption placement="center" className="dark black-text">
              <i className="fa fa-quote-left" aria-hidden="true"></i>
                <h5 className="agro">
                  Best food plug ever. Thanks for making life easy for me.
                </h5>
                <div className="image">
                  <img src="/fatima.png" alt="Fatima" className="circle team-img responsive-img" />
                  <div className="names">
                    <h5>FATIMA</h5>
                    <h6>Client</h6>
                  </div>
                </div>
                
              </Caption>
            </Slide>
            <Slide >
              <Caption placement="center" className="dark black-text">
                
              <i className="fa fa-quote-left" aria-hidden="true"></i>
                <h5 className="agro">
                  I do not have to worry about qualitative food produces,
                    all thanks to AgroKonnet for the organic products they offer.
                </h5>
                <div className="image">
                  <img className="circle team-img responsive-img" alt="Ive" src="/ivie.png"/>
                  <div className="names">
                    <h5>IVIE</h5>
                    <h6>Client</h6>
                  </div>
                  </div>
                  
              </Caption>
            </Slide>
      </Slider>
     </div>
 </div>
);
};

export default Index;