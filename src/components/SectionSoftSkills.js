import React from 'react';
import Section from './Section';

import {Row, Col} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPalette, faBookOpen, faBrain, faEye} from '@fortawesome/free-solid-svg-icons';

function Icon(props) {
    return <FontAwesomeIcon
            className="square"
            icon={props.icon}
            fixedWidth
            style={{color:props.color,
                    borderRadius: '50%',
                    backgroundColor: '#d9d9d9',
                    fontSize:'3rem',
                    width:'3rem',
                    padding: '0.66rem'}}
    />
}

function SoftSkill(props) {
    return (
        <Col md={6} xm={12}>
            <div className="mx-5 mb-5">
            <Row>
                {/*icon*/}
                <Col xs="auto" className="">
                    <Icon icon={props.icon} color={props.iconColor}/>
                </Col>
                {/*title*/}
                <Col xs="auto" className="mr-auto d-flex align-items-center">
                    <h2 className="main-font">{props.title}</h2>
                </Col>
                {/*description*/}
                <Col xs={12} className="mt-3 secondary-font" style={{fontSize:'1.05em'}}>
                    {props.children}
                </Col>
            </Row>
            </div>
        </Col>
    );
}

function SectionSoftSkills() {
    return (
        <Section id="softskills" title="Soft Skills" >
            <Row className="mb-n5">
                <SoftSkill title="Kreativ" icon={faPalette} iconColor="orange">
                    Ich zeichne, singe gerne und spiele Klarinette und Ukulele.
                    Kniffelige Aufgaben begeistern mich und ich denke gerne über den Tellerrand hinaus. 
                </SoftSkill> 

                <SoftSkill title="Autodidaktisch" icon={faBookOpen} iconColor="forestgreen">
                    Mich zeichnet eine hohe Wissgebierigkeit aus und
                    die Fähigkeit mich schnell in Sachverhältnisse einarbeiten zu können. 
                </SoftSkill>
                
                <SoftSkill title="Mitdenkend" icon={faBrain} iconColor="darkred">
                    Ich bin kein Roboter! Ich versuche stets meinen eigenen hinterfragenden Geist in
                    das Projekt miteinfließen zu lassen, um das Endresultat so wertig wie möglich zu gestalten. 
                </SoftSkill>
                
                <SoftSkill title="Kommunikativ" icon={faEye} iconColor="royalblue">
                    Funktionalität ohne ansprechendes, kommunikatives Design ist nichts!
                    Ich besitze ein präzises Auge mit einem Gespür für Proportionen. 
                </SoftSkill>
            </Row>
        </Section>
    )
}


export default SectionSoftSkills;