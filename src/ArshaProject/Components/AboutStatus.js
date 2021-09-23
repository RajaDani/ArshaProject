import React, {useEffect} from 'react'
import { Col, Row } from 'reactstrap'
import AOS from 'aos';
import "aos/dist/aos.css";

export default function AboutStatus() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return (
        <div className="container aboutStatusFlex">
            <Row>
                <Col lg="6" data-aos="flip-right" data-aos-once="true">
                    <img src="statusImg.png" alt="statusImage" className="statusImg"></img>
                </Col>
                <Col lg="6" data-aos="zoom-in" data-aos-once="true">
                    <h2 className="heading"><strong>Voluptatem dignissimos provident quasi corporis voluptates</strong></h2>
                    <p className="aboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                    <div className="progressDiv">
                        <p className="heading">HTML</p>
                        <p className="heading">100%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{width:"100%"}}></div>
                    </div> 
                    <div className="progressDiv">
                        <p className="heading">CSS</p>
                        <p className="heading">90%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{width:"90%"}}></div>
                    </div> 
                    <div className="progressDiv">
                        <p className="heading">JAVASCRIPT</p>
                        <p className="heading">75%</p>
                    </div>
                    <div className="progress ">
                        <div className="progress-bar" style={{width:"75%"}}></div>
                    </div> 
                    <div className="progressDiv">
                        <p className="heading">PHOTOSHOP</p>
                        <p className="heading">50%</p>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" style={{width:"50%"}}></div>
                    </div> 
                </Col>
            </Row>
        </div>
    )
}
