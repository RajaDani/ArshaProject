import React, { Component } from 'react'
import BrandsName from '../BrandsName'
import Services from './Services';
import BodyComponent from './BodyComponent';
import ArshaHeader from './Navbar'
import About from './About' ;
import './header.css' ;
import Portfolio from './Portfolio';
import Footer from './Footer';
import { BrowserRouter as Router , Route , Switch } from 'react-router-dom';
import Team from './Team';
import Contact from './Contact';
import Login from './Login';

export default class MainComponent extends Component {
    render() {
        return (

            <Router>
                <Switch>
                        <Route exact path="/">
                            <ArshaHeader />
                            <BodyComponent />
                            <BrandsName />
                            <About />
                            <Portfolio />
                            <Footer />
                        </Route>
                        <Route exact path="/about">
                            <ArshaHeader />
                            <About />
                            <Footer />
                        
                        </Route>
                        <Route exact path="/portfolio">
                            <ArshaHeader />
                            <Portfolio />
                            <Footer />
                       
                        </Route>
                        <Route exact path="/services">
                            <ArshaHeader />
                            <Services />
                            <Footer />
                            
                        </Route>
                        <Route exact path="/team">
                            <ArshaHeader />
                            <Team />
                            <Footer />
                            
                        </Route>   
                        <Route exact path="/contact">
                            <ArshaHeader />
                            <Contact />
                            <Footer />
                        </Route> 
                        <Route exact path="/login">
                            <Login />
                        </Route>
                </Switch>
            
            </Router>
        )
    }
}
