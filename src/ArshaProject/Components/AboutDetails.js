import React , {useEffect} from 'react'
import { Col, Row } from 'reactstrap'
import $ from "jquery" ;
import AOS from 'aos';
import "aos/dist/aos.css";

export default function AboutDetails() {

        const onClickBtn = (e) => {    
              let id = e ;
              console.log(id);
              $("#"+id).toggle("slow");
        }

        $(document).ready(function(){   
              $("#1").hide();
              $("#2").hide();
              $("#3").hide();
          });

          useEffect(() => {
            AOS.init({
                duration : 1000
            });
            
          }, []);
   
    return (
        
        <div className="aboutFlexContainer">
            <div className="container mt-5 ">
                <Row>
                    <Col lg="6" data-aos="zoom-in" data-aos-once="true"> 
                        <h3 className="heading">Eum ipsam laborum deleniti <strong >velit pariatur architecto aut nihil</strong></h3>
                        <p className="aboutParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit</p> 
                            <div className="cardFlex">
                            <div class="card mt-2">
                                <div class="card-header" id="aboutCardHeader" >
                                    <h2 >
                                        <button className="btn btn-link" id="toggleLinks" onClick={e => onClickBtn(e.target.name)} name="1">
                                        <strong className="cardNumber">01</strong> Non consectetur a erat nam at lectus urna duis? <span className="fas fa-chevron-circle-down ml-2 "></span>
                                        </button>
                                    </h2>
                                </div>
                                <div id="1">
                                    <div className="card-body">
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.                                
                                    </div>
                                </div>
                            </div>   
                            <div class="card mt-2">
                                <div class="card-header" id="aboutCardHeader" >
                                    <h2 >
                                        <button className="btn btn-link" id="toggleLinks" onClick={e => onClickBtn(e.target.name)} name="2">
                                        <strong className="cardNumber">02</strong> Non consectetur a erat nam at lectus urna duis? <span className="fas fa-chevron-circle-down ml-2"></span>
                                        </button>
                                    </h2>
                                </div>
                                <div id="2">
                                    <div className="card-body">
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.                                
                                    </div>
                                </div>
                            </div> 
                            <div class="card mt-2">
                                <div class="card-header" id="aboutCardHeader">
                                    <h2>
                                        <button className="btn btn-link" id="toggleLinks" onClick={e => onClickBtn(e.target.name)} name="3">
                                        <strong className="cardNumber">03</strong> Non consectetur a erat nam at lectus urna duis? <span className="fas fa-chevron-circle-down ml-2"></span>
                                        </button>
                                    </h2>
                                </div>
                                <div id="3">
                                    <div className="card-body">
                                        Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.                                
                                    </div>
                                </div>
                            </div>
                            </div> 
                    </Col>
                    <Col lg="6" data-aos="flip-left" data-aos-once="true">
                        <img src="aboutDetailImg.png" alt="detail"></img>
                    </Col>
                </Row>
            </div>    
        </div>
        
    )
}
