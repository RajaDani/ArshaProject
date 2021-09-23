import {Component} from 'react' ;
import {Navbar , Nav , NavbarToggler ,  NavbarBrand , NavItem , NavLink , Collapse , Button} from 'reactstrap' ;

class Header extends Component {
    constructor(props){
        super(props);   
        this.state = {
            isNavOpen : false 
        }
        this.toggleNav = this.toggleNav.bind(this) ;
    };
    toggleNav () {
        this.setState ({
            isNavOpen : !this.state.isNavOpen
        })
    }
    render() {
        return(
            <div  id="navbar">
                <div className="container"  >

                    <Navbar light expand="lg" id="navbarHead">
                        
                        <NavbarBrand>
                            <img src="/brandLogo.png" id="brandImage" alt="brand"></img>
                        </NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link">Pages</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link">Portfolio</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link">Blog</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    
                        <Button id="loginButton">Login</Button>
                        <Button id="createAccountButton">Create Account</Button>
                        </Collapse>
                    </Navbar>
                </div>
            </div>    
        );
    }
}

export default Header ;