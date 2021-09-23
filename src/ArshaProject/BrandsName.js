import React from 'react'
import { Col, Row } from 'reactstrap'

export default function BrandsName() {

    return (
        <div className="brandNameContainer">
            <div className="container" >
                <Row>
                    <Col md="2" xs = "4">
                        <div className="brandName">
                            <img src="/client-1.png" alt="client" className="brandImg"></img>
                        </div> 
                    </Col>
                    <Col md="2" xs = "4">
                        <div className="brandName">
                            <img src="/client-2.png" alt="client" className="brandImg"></img>
                        </div>
                    </Col>
                    <Col md="2" xs = "4">
                        <div className="brandName">
                            <img src="/client-3.png" alt="client" className="brandImg"></img>
                        </div>
                    </Col>
                    <Col md="2" xs = "4">
                        <div className="brandName">
                            <img src="/client-4.png" alt="client" className="brandImg"></img>
                        </div>
                    </Col>
                    <Col md="2" xs = "4">
                        <div className="brandName">
                            <img src="/client-5.png" alt="client" className="brandImg"></img>
                        </div>
                    </Col>
                    <Col md="2" xs = "4">
                        <div className="brandName">
                            <img src="/client-6.png" alt="client" className="brandImg"></img>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
