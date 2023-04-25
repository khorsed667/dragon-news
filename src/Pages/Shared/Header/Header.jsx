import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <div className="my-3 text-center">
                <img src={logo} alt="" />
                <p>Journalism Without Fear or Favour</p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex my-3'>
                <Button variant="danger">Latest</Button>{' '}
                <Marquee pauseOnHover={1} speed={80}>
                    I can be a React component, multiple React components, or just some text......I can be a React component, multiple React components, or just some text......I can be a React component, multiple React components, or just some text......
                </Marquee>
            </div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="white">
                    <Container>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mx-auto">
                                <Nav.Link href="#Home">Home</Nav.Link>
                                <Nav.Link href="#pricing">Career</Nav.Link>
                                <Nav.Link href="#pricing">About</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets">Profile</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    <Button variant="secondary">Login</Button>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </Container>
    );
};

export default Header;