import React , {useState , useEffect} from 'react'
import { TeamDetail } from './TeamDetails'
import { Row, Col, Card , CardBody } from 'reactstrap'
import './Team.css';
import AOS from 'aos';
import "aos/dist/aos.css";

export default function Team() {

    useEffect(() => {
        AOS.init({
            duration : 1000
        });
        
      }, []);

    const [teamMember , setTeamMember] = useState(TeamDetail) ;

    return (
        <div className="TeamFlex">
            <div className="container mb-5" >
                <Row>
                    <Col xs="12"><h1 className="aboutHeader">TEAM</h1> </Col>
                    <Col xs="12" className="p-3">
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </Col>
                </Row>
                <Row className="mt-3" data-aos="zoom-out">
                    {
                        teamMember.map(team =>
                            <Col lg="6" className="p-3">
                                <Card className="teamCards"> 
                                    <Row>
                                        <Col md="4">
                                            <img src={team.img} alt="teamMember" className='teamMemberImg rounded-circle'></img>
                                        </Col>
                                        <Col md="8">
                                            <CardBody>
                                                    <h5 className="teamMemberName">{team.name}</h5>
                                                    <p className="teamMemberDesignation">{team.designation}<br></br>&nbsp;&nbsp;________</p>
                                                    <p className="teamMemberDetails">{team.details}</p>
                                                    <div className="teamSocialIcons d-flex">
                                                        <span className="fab fa-twitter "></span>
                                                        <span className="fab fa-facebook "></span>
                                                        <span className="fab fa-instagram "></span>
                                                        <span className="fab fa-skype"></span>
                                                    </div>
                                                </CardBody>
                                        </Col>
                                    </Row>
                                </Card>
                            </Col>   
                            )
                        }
                </Row>   
            </div>
        </div>
    )
}
