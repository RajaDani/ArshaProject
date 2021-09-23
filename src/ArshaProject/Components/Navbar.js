import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { NavbarBrand, NavItem, NavLink, Nav, Navbar, Button, NavbarToggler, Collapse } from 'reactstrap'
export default class ArshaHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this);
    };
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }
    render() {
        return (
            <div className="parentDiv">
                <div className="container p-3">
                    <Navbar expand="md" >
                        <NavbarBrand className="navbarBrand">ARSHA</NavbarBrand>
                        <NavbarToggler className="fas fa-bars" onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto">
                                <NavItem className="nav-item">
                                    <Link className="navLink" to="/"> <NavLink className="nav-link">Home</NavLink> </Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="navLink" to="/about"> <NavLink className="nav-link">Aboutus</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="navLink" to="Services"> <NavLink className="nav-link" >Services</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="navLink" to="/portfolio"> <NavLink className="nav-link">Portfolio</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="navLink" to="/team"> <NavLink className="nav-link">Team</NavLink></Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="navLink" to="/contact"> <NavLink className="nav-link">Contact</NavLink></Link>
                                </NavItem>
                            </Nav>
                            <Link to="/login"> <Button className="ml-5" color="light" outline >Login</Button> </Link>
                        </Collapse>
                    </Navbar>

                </div>
            </div>
        )
    }
}
