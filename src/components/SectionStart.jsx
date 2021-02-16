import React from 'react';
import {Row, Col} from 'react-bootstrap';

function SectionStart() {
    return (
        <Row id="start" style={{height:"100vh"}} >
            <Col xs={12} className="text-center main-font mx-auto mt-auto mb-4">
                <h1>
                    Hi, ich bin <strong>Damian Gleumes</strong>
                </h1>
            </Col>
            <Col lg={8} md={11} sm={10} xs={12} className="text-center secondary-font mx-auto mb-auto pb-5">
                <p style={{fontSize:'1.75rem'}}>
                    Ich studiere Informatik an der Uni Bonn.<br/>
                    Mich prägt eine große Leidenschaft fürs Coden und ich habe viel Spaß am gemeinsamen Gestalten<br/>
                    von 'real-life'-Projekten.
                </p>
            </Col>
        </Row>
    );
}

export default SectionStart; 