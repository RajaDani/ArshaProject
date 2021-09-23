import React , {useEffect} from 'react'
import {Row , Col , Button} from 'reactstrap'
import './Services.css' ;
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Services() {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        
      }, []);

    return (

        <div className="servicesFlex">
            <div className="container mb-5">
                <Row>
                    <Col xs="12"><h1 className="aboutHeader">Services</h1> </Col>
                    <Col xs="12" className="p-3">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                </Row>

                <Row className="servicesCardFlex" data-aos="zoom-out" data-aos-once="true">
                <Col md="6" lg="3" >
                    <div className="bodyComponents">
                    <div className="dollarIcon">
                        <span className="fal fa-basketball-ball fa-2x ml-1"></span>
                    </div>
                    <h4 className ="bodyHeader" >Lorem Ipsum</h4>
                    <p  className ="bodyParagraph">Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
                    </div>
                </Col>
                <Col md="6" lg="3">
                    <div className="bodyComponents">
                    <div className="dollarIcon">
                        <span className="fas fa-passport fa-2x ml-1"></span>
                    </div>
                    <h4 className="bodyHeader" >Sed ut perspici</h4>
                    <p  className="bodyParagraph">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                    </div>
                </Col>
                <Col md="6" lg="3" >
                    <div className="bodyComponents">
                    <div className="dollarIcon">
                        <span className="fas fa-tachometer fa-2x"></span>
                    </div>
                    <h4 className="bodyHeader" >Magni Dolores</h4>
                    <p  className="bodyParagraph">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                    </div>
                </Col>
                <Col md="6" lg="3" >
                    <div className="bodyComponents">
                    <div className="dollarIcon">
                        <span className="fas fa-air-freshener fa-2x "></span>
                    </div>
                    <h4 className="bodyHeader" >Nemo Enim</h4>
                    <p  className="bodyParagraph">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
                    </div>
                </Col>
            </Row>
            </div>

            <Row className="jumbotron" data-aos="zoom-out" data-aos-once="true">
                <Col xs="12"><h1 className="container p-4 jumbotronHeader">Call to Action</h1> </Col>
                <div className="jumbotronFlex container mt-1">
                    <Col sm="9" >
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </Col>
                    <Col sm="3">    
                        <Button color="light" outline>Call To Action</Button>
                    </Col>
                </div>    
            </Row>
            
        </div>
    )
}
