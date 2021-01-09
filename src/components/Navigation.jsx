
import React from 'react';
import {Navbar, NavItem, NavLink} from 'react-bootstrap';

function Entry(props) {
    return (
        <NavItem>
            <NavLink href={props.href}>
                {props.children}
            </NavLink>
        </NavItem>
    );
}

function Navigation() {
    return (
        <div className="slanted-outer" style={{zIndex:10}}>
            <Navbar className="navbar-expand">
                <div class ="navbar-nav list-unstyled">
                    <Entry href="#start">Start</Entry>
                    <Entry href="#projects">Projects</Entry>
                    <Entry href="#softskills">Soft Skills</Entry>
                    <Entry href="#hardskills">Hard Skills</Entry>
                    <Entry href="#contact">Contact</Entry>
                </div>
            </Navbar>
        </div>
    )
}

export default Navigation;