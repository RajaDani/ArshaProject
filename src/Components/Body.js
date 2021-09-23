import {Row , Col , Button} from 'reactstrap' ;

function Body () {
    return(
        <div className="container p-5">
            <Row className="container">
                <Col md-4 sm-6 col-12 className="mt-5 ml-5">
                    <h1 id="bodyHeader">Realize Your <br></br> Full Potential</h1>
                    <p id="bodyParagraphTop">We help our clients make realize <br></br> their most business important business goals</p>
                    <Button id="contactButton">Contact Us</Button>
                    <Button id="similarOrderButton">Order Similar <span className="fas fa-arrow-right "></span></Button>
                </Col>
                <Col md-6 sm-6 col-12>
                    <img src="/bodyImage.png" alt="girl" id="bodyImage"></img>
                </Col>
            </Row>



            <Row className="container ml-3">
                <Col md-4 sm-4 col-12 className="mt-5 ">
                    <div id="bodyComponents">
                    <div id="dollarIcon">
                        <span className="fas fa-dollar-sign ml-1"></span>
                    </div>
                    <h4 id="bodyHeader" className="mt-4">Corporate Finance</h4>
                    <p id="bodyParagraph">Leverage agile framework to <br></br> provide a robust synaptics</p>
                    </div>
                </Col>
                <Col md-4 sm-4 col-12 className="mt-5 ">
                    <div id="bodyComponents">
                    <div id="dollarIcon">
                        <span className="fas fa-calendar-times "></span>
                    </div>
                    <h4 id="bodyHeader" className="mt-4">Corporate Finance</h4>
                    <p id="bodyParagraph">Lorem ipsum is placeholder text  <br></br> used in the graphic, print</p>
                    </div>
                </Col>
                <Col sm="4"  className="custom-card">
                    <div id="marketDiv">
                   
                    <h5 id="marketAnalysis" className="mt-2">Market Analysis</h5>
                    <p id="marketParagraph" className="mb-4">Leverage agile framework to <br></br> provide a robust synaptics</p>
                    <button id="readMoreButton">Read More <span className="fas fa-arrow-right"></span></button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Body ;