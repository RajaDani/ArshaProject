import React, {useEffect} from 'react'
import { Col, Row , Button } from 'reactstrap'
import AboutDetails from './AboutDetails';
import AboutStatus from './AboutStatus';
import './About.css' ;
import AOS from 'aos';
import "aos/dist/aos.css";

export default function About() {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        
      }, []);

    return (
        <div className="container" data-aos="zoom-in" data-aos-once = "true">
            <Row>
                <Col xs="12"><h1 className="aboutHeader">ABOUT US</h1> </Col>
            </Row>
            <Row>
                
                <Col md="6">
                    <div className="aboutDetails">
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> 
                        <div className="flexAbout"> <span className="fas fa-check-double mr-3"></span><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
                        <div className="flexAbout"> <span className="fas fa-check-double mr-3"></span><p>Duis aute irure dolor in reprehenderit in voluptate velit</p></div>
                        <div className="flexAbout"> <span className="fas fa-check-double mr-3"></span><p>Ullamco laboris nisi ut aliquip ex ea commodo consequat</p></div>
                    </div>
                </Col>
                <Col>
                    <div className="flexAbout aboutDetails">
                        <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="flexAbout ml-4"><Button className="learnMoreBtn " outline>Learn More</Button></div>
                </Col>
            </Row>
            <AboutDetails />
            <AboutStatus />
        </div>
    )
}
