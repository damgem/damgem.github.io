import React from 'react';
import {Row, Col} from 'react-bootstrap';

function SectionStart() {
    return (
        <Row id="start" style={{height:"100vh"}} >
            <Col xs={12} className="text-center mx-auto mt-auto mb-4">
                <h1>
                    Hi, my name is <strong>Damian Gleumes</strong>
                </h1>
            </Col>
            <Col lg={7} md={11} sm={10} xs={12} className="text-center mx-auto mb-auto pb-5">
                <p style={{fontSize:'1.75rem'}}>
                    I'm studying informatics @University Bonn <br/>
                    I have a strong passion for coding and love applying
                    my knowledge in real world projects! 
                </p>
            </Col>
        </Row>
    );
}

export default SectionStart; 