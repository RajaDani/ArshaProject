import React from 'react'
import {Row , Col , Card , CardBody , Form , Button} from 'reactstrap'
import './Contact.css' ;

export default function Contact() {
    return (
        <div className="contactFlex">
            <div className="container">
                <Row>
                    <Col xs="12"><h1 className="aboutHeader">Contact</h1> </Col>
                    <Col xs="12" className="p-3">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col lg="5" >
                        <Card className="contactCard">
                            <CardBody>
                                <div className="contactOuterDiv">
                                    <div className="contactIcons"><span className="fas fa-map-marker-alt fa-2x "></span></div>
                                    <div className="contactInnerDiv">
                                        <h6 className="headings">Location</h6> 
                                        <p >A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className="contactOuterDiv">
                                    <div className="contactIcons"><span className="fas fa-envelope fa-2x"></span></div>
                                    <div className="contactInnerDiv">
                                        <h6 className="headings">Email</h6> 
                                        <p >danishimran889@gmail.com</p>
                                    </div>
                                </div>
                                <div className="contactOuterDiv">
                                    <div className="contactIcons"><span className="fas fa-phone fa-2x"></span></div>
                                    <div className="contactInnerDiv">
                                        <h6 className="headings">Call</h6> 
                                        <p >+92 340 0576761</p>
                                    </div>
                                </div>
                                <div className="contactOuterDivImg">    
                                    <img src="./portfolio-7.jpg" alt="map" ></img>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col lg="7" >
                        <Card className="contactCard">
                        <Form className='contactForm'>
                            <Row>
                                <Col>
                                    <label for="name">Your Name</label>
                                    <input type="text" class="form-control" id="name"  />
                                </Col>
                                <Col>
                                    <label for="email">Your Email</label>
                                    <input type="email" class="form-control" id="email"  />
                                </Col>
                            </Row>
                                <div class="form-group mt-4">
                                    <label for="subject">Subject</label>
                                    <input className="form-control" id="subject" type="text"></input>
                                </div>
                                <div class="form-group mt-4">
                                    <label for="message">Message</label>
                                    <textarea className="form-control" id="message" type="text" rows="10"></textarea>
                                </div>
                                <div class="formBtn mt-4">
                                    <Button className="contactBtn" outline>Send Message</Button>
                                </div>
                        </Form>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
