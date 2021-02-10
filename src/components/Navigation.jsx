
import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function SectionLink(props) {

    var style = {
        transform: 'skew(-30deg)',
        marginLeft: (props.base? '-20px':'-1px'),
        marginRight: '-1px',
        marginTop: '-1px',
        paddingLeft: (props.base? '33px':'14px'),
        paddingRight: '14px'
    }

    return (
        <Nav.Link href={props.href} style={style}>
            <p style={{transform: 'skew(30deg)'}} className='mb-0 secondary-font'>
                {props.children}
            </p>
        </Nav.Link>
    );
}

function Navigation() {
    return (
        <div className="slanted-outer" style={{zIndex:10, position: 'fixed', top: 0, left: 0}}>
            <Navbar expand="sm" className="p-0">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <SectionLink href="#start" base>Damian Gleumes</SectionLink>

                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <SectionLink href="#projects">Projects</SectionLink>
                        <SectionLink href="#softskills">Soft Skills</SectionLink>
                        <SectionLink href="#hardskills">Hard Skills</SectionLink>
                        <SectionLink href="#contact">Contact</SectionLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;