import React, {useEffect} from 'react'
import { Col, Row ,Button } from 'reactstrap'
import './login.css'
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Login() {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        
      }, []);

    return (
        <div className="container" id="loginFlex">
            <Row >
                <Col md="8" data-aos="zoom-in" data-aos-once="true">
                    <img src="/loginImg.png" alt="login" className="loginImg mt-4"></img>
                </Col>
                <Col md="4">
                    <div className="signInIcons">
                        <h5>Sign in With</h5>
                        <span className="fab fa-twitter "></span>
                        <span className="fab fa-facebook "></span>
                        <span className="fab fa-instagram "></span>
                    </div>
                    <div className="p-4 ml-5">
                        <p>___________<strong className="p-2">Or</strong>____________</p>
                    </div>
                    <div >
                        <input className="form-control" type="text" placeholder="Email Address.."></input>
                    </div>
                    <div >
                        <input className="form-control mt-4" type="text" placeholder="Password.."></input>
                    </div>
                    <div className="checkBox mt-4">
                        <p>  <input type="checkbox" /> Remember Me</p>
                        <p>Forgot Password ?</p>
                    </div>
                    <div className="loginFlex">
                    <Button outline className="loginBtn">Login</Button>
                    </div>
                    <div className="loginFlex">
                        <p>Don't have an Account ? <strong>Register</strong></p>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
