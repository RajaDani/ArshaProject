import React, { Component } from 'react'
import { Col, Row , CardBody  } from 'reactstrap'
import './footer.css' ;
import CopyrightFooter from './CopyrightFooter';

export default class Footer extends Component {

    render() {
        return (
            <>
            <div className="footerFlex" >
                <div className="container">
                    <Row>
                        <Col lg="3" md="6">
                            <div className="footerSmallFlex">
                                <h3 className="footerBrand">ARSHA</h3> 
                                <CardBody>
                                    <p className="address">A108 Adam Street
                                        New York, NY 535022
                                        United States</p>
                                   <div className="d-flex"><strong>Phone:</strong> <p className="phoneEmail">+92 340 0576761</p></div>
                                   <div className="d-flex"><strong>Email:</strong> <p className="phoneEmail">danishimran889@gmail.com</p></div>
                                </CardBody>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="footerSmallFlex">
                                <h5 className="footerLinksHeader">Useful Links</h5>
                                <CardBody>
                                    <ul className="footerLinks">
                                        <li><span className="fas fa-angle-right"></span>Home</li>
                                        <li><span className="fas fa-angle-right"></span>About us</li>
                                        <li><span className="fas fa-angle-right"></span>Services</li>
                                        <li><span className="fas fa-angle-right"></span>Terms of Service</li>
                                        <li><span className="fas fa-angle-right"></span>Privacy Policy</li>
                                    </ul>
                                </CardBody>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="footerSmallFlex">
                                <h5 className="footerLinksHeader">Our Services</h5>
                                <CardBody>
                                    <ul className="footerLinks">
                                        <li><span className="fas fa-angle-right"></span>Web Design</li>
                                        <li><span className="fas fa-angle-right"></span>Web Development</li>
                                        <li><span className="fas fa-angle-right"></span>Product Management</li>
                                        <li><span className="fas fa-angle-right"></span>Marketing</li>
                                        <li><span className="fas fa-angle-right"></span>Graphic Designing</li>
                                    </ul>
                                </CardBody>
                            </div>
                        </Col>
                        <Col lg="3" md="6">
                            <div className="footerSmallFlex">
                                <h5 className="footerLinksHeader ml-0">Our Social Networks</h5>
                                <CardBody>
                                    <p className="address">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies</p>
                                    <div className="icons">
                                        <span className="fab fa-twitter "></span>
                                        <span className="fab fa-facebook "></span>
                                        <span className="fab fa-instagram "></span>
                                        <span className="fab fa-skype"></span>
                                        <span className="fab fa-google-plus-g"></span>
                                    </div>
                                </CardBody>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <CopyrightFooter />
            </>
        )
    }
}
