import {Col , Row , Button } from 'reactstrap' ;

function DetailComponent () {
    return(
        <div className="container mt-5">
            <Row>
                <Col offset-1 md-4 sm-12>
                    <img src="/girlImage.png" alt="girl" id="bodyImage"></img>
                </Col>
                <Col md-5 sm-12 className="mt-5 ml-5">
                    <h2 id="bodyHeader">Get the ultimate tool and <br></br> learn how to grow your <br></br> audience </h2>
                    <p id="bodyParagraphTop">Lorem ipsum is placeholder text commonly <br></br> used in the graphic, print, and publishing <br></br> industries for previewing layouts and visual mockups</p>
                    <Button id="contactButton">Contact Us</Button>
                    <Button id="similarOrderButton">Order Similar <span className="fas fa-arrow-right"></span></Button>
                </Col>
            </Row>
        </div>
    );
}

export default DetailComponent ;