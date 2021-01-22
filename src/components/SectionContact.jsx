
import React from 'react';
import {Button} from 'react-bootstrap';
import Section from './Section';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';

function SectionContact(props) {
    return (
        <Section heading="Contact" >
            <div className="d-flex flex-column align-items-center">
                <p className="secondary-font text-center" style={{fontSize:"1.5em"}}>
                    Schreibe mir eine Mail!
                </p>
                <Button style={{backgroundColor:"darkred", borderColor:"darkred", outlineColor: 'darkred', margin: "auto"}} href="mailto:damgem@zoho.com">
                    <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2"/>
                    damgem@zoho.com
                </Button>
            </div>
        </Section>
    );
}

export default SectionContact;