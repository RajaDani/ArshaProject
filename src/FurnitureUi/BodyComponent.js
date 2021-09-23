import React, { Component } from 'react'
import { Row , Col , Card , CardBody , Button } from 'reactstrap'

export default class BodyComponent extends Component {
    render() {
        return (
            <div className="container mb-5">
                <Row className="flexContainer">
                    <Col sm="6" lg="5">
                        <Card className="card border-0" id="bodyCard">
                            <div className="cardHeader">
                               <h1 className="cardHeader border-0"> Furniture That Everyone Loves </h1>
                            </div>
                            <CardBody>
                                We have 50,000+ reviews from our customers that shows their trust on our furniture <br></br>
                                <Button color= "light" outline className="bodyButtons">Buy Now</Button>
                                <Button color= "light" outline className="bodyButtons">Explore</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="6" lg="7">
                        <div>
                            <img src="furniture.jpeg" alt="furniture" className="furnitureImage"></img>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
