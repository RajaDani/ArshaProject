import React, { Component } from 'react'
// import BodyComponent from './BodyComponent';
import { NavbarBrand, NavItem, NavLink , Nav , Navbar , Button , NavbarToggler , Collapse } from 'reactstrap'

export default class NavbarHeader extends Component {
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
        return (
            <div className="parentDiv">
            <div className="container p-3">
                <Navbar expand="md" >
                    <NavbarBrand className="navbarBrand">Fundo</NavbarBrand>
                    <span onClick={this.toggleNav} className="fas fa-bars"></span>
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar className="ml-auto">
                         <NavItem>
                             <NavLink>Home</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink>About us</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink>Furniture</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink>Blog</NavLink>
                         </NavItem>
                         <NavItem>
                             <NavLink>Contact us</NavLink>
                         </NavItem>
                    </Nav>
                    <Button id="navbarLoginButton">Login</Button>
                    </Collapse>
                    
                </Navbar>
                {/* <BodyComponent /> */}
            </div>
        </div>
        )
    }
}
