import React, { Component } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import { Row , Col , Card , CardBody , Button } from 'reactstrap'

export default class BodyComponent extends Component {

    componentDidMount() {  
        AOS.init({
          duration : 1000
        });
      }

    render() {
        return (
            <div className="parentDiv">
                <div className="container p-3">
                <Row className="flexContainer">
                    <Col md="4" lg="5" data-aos="zoom-in" data-aos-once="true">
                        <Card className="card border-0" id="bodyCard">
            
                               <h1 className="cardHeader border-0"> Better Solutions For Your Business </h1>
                    
                            <CardBody>
                                We have 50,000+ reviews from our customers that shows their trust on our furniture <br></br>
                                <Button color= "light" outline className="bodyButtons">Get Started</Button>
                                <Button color= "light" outline className="bodyButtons">Explore</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md="8" lg="7" data-aos="zoom-in" data-aos-once="true">
                        <div>
                            <img src="astra2.png" alt="furniture" className="astraImage"></img>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>   
        )
    }
}
