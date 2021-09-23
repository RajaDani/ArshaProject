import React, { Component } from 'react'
import { Card , CardBody, CardHeader } from 'reactstrap'
import {AboutCards} from './AboutCards' ;

class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardDetail : AboutCards 
        }
    }

    
    render() {

        return (
            <div className="container flexContainer">
                 <div className="card-deck ">
                   <Card className="AboutCard">
                        <CardHeader><h3>Why we are best in our town</h3></CardHeader>
                        <CardBody>
                            <p class="card-text">We have 50,000+ reviews from our customers that shows their trust on our furniture</p>
                            <button className="goAwayButton"><span className="fas fa-arrow-right"></span></button>
                        </CardBody>
                    </Card>
                    { this.state.cardDetail.map((detail) => {
                        return(
                            <Card className="about-card">
                                <CardBody className="p-0 text-center">
                                    <img src={detail.img} alt="aboutimg" className="w-100"></img>
                                    <h5 className="mt-4">{detail.heading}</h5>
                                    <p class="card-text">{detail.price}</p>
                                </CardBody>
                            </Card>
                        );
                    })}
                </div>
            </div>   
        );
    }
}

export default AboutComponent ;