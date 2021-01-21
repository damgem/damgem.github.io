import React from 'react';
import {CardColumns, Card, Row, Col} from 'react-bootstrap';

import Section from './Section';

function SkillPoint(props) {
    const bgColor = props.active ? 'orange' : 'grey';
    return (
        <div style={{display:'inline-block', height:'100%', width:'20%'}}>
            <i style={{display:'inline-block', height:'100%', width:'80%', backgroundColor:bgColor, transform: "skew(-35deg)"}}></i>
        </div>
    );
}

function Skill(props) {

    const skillPoints = Array.from({length: 5}, (v, i) => <SkillPoint active={i<props.confidence} key={i}/>);

    return (
        <Row noGutters className="my-3 align-items-center">
            <Col xl={6} lg={5} md={6} xs={5} className="main-font mb-0" style={{fontSize:"1.75em", lineHeight:1, zIndex: 1}}>
                {props.children}
            </Col>
            <Col xl={6} lg={7} md={6} xs={7} style={{height: "1.75em"}}>
                {skillPoints}
            </Col>
        </Row>
    );
}

function SkillGroup(props) {
    return (
        <div style={{paddingTop:"2em"}}>
            <Card xs={12} lg={6} style={{border:"None", display:"inline-block"}}>
                <label className="main-font" style={{position: 'absolute', top: "-1.2em", left: "1.75em", margin: 0, color:"grey", fontSize:"1.25em"}}>
                    {props.heading}
                </label>
                <div style={{border:"1px solid grey", borderRadius:"1.5em", padding: "1.5em"}}>
                    <div className="my-n3">
                        {props.children}
                    </div>
                </div>
            </Card>
        </div>
    );
}



function SectionHardSkills() {
    return (
        <Section id="hardskills" heading="Hardskills">
            <CardColumns style={{columnGap: "2.75rem"}}>
                <SkillGroup heading="Coding Languages">
                    <Skill confidence={5}>Python</Skill>
                    <Skill confidence={4}>C / C++</Skill>
                    <Skill confidence={4}>Java</Skill>
                    <Skill confidence={2}>R</Skill>
                </SkillGroup>
                <SkillGroup heading="Basic Web Development">
                    <Skill confidence={5}>HTML</Skill>
                    <Skill confidence={4}>CSS</Skill>
                    <Skill confidence={3}>Java Script</Skill>
                </SkillGroup>
                <SkillGroup heading="Web Development Frameworks">
                    <Skill confidence={5}>Boots&shy;trap</Skill>
                    <Skill confidence={4}>React</Skill>
                    <Skill confidence={2}>Flask</Skill>
                </SkillGroup>
                <SkillGroup heading="Data Base">
                    <Skill confidence={5}>Mongo DB</Skill>
                    <Skill confidence={2}>SQL</Skill>
                </SkillGroup>
                <SkillGroup heading="Linux">
                    <Skill confidence={3}>Ubuntu</Skill>
                    <Skill confidence={4}>Docker</Skill>
                </SkillGroup>
                <SkillGroup heading="SVC">
                    <Skill confidence={4}>Git</Skill>
                    <Skill confidence={3}>GitHub/Lab</Skill>
                </SkillGroup>
                <SkillGroup heading="Programms">
                    <Skill confidence={3}>GIMP</Skill>
                    <Skill confidence={2}>Figma</Skill>
                </SkillGroup>
            </CardColumns>
        </Section>
    );
}

export default SectionHardSkills;