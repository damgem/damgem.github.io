
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation() {
    return (
        <div className="slanted-outer" style={{zIndex:10, position: 'fixed', top: 0, left: 0}}>
            <Navbar expand="sm">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Nav.Link href="#start">Damian Gleumes</Nav.Link>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#softskills">Soft Skills</Nav.Link>
                        <Nav.Link href="#hardskills">Hard Skills</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;