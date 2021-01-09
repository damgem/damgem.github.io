import React from 'react';
import {Row, Col} from 'react-bootstrap';

function SectionStart() {
    return (
        <Row id="start" style={{height:"100vh"}} >
            <Col lg={6} md={9} sm={10} xs={12} className="text-center m-auto pb-5">
                <h1>
                    Hallo, ich bin <strong>Damian Gleumes</strong>
                </h1>
                <h3>
                    Informatikstudent an der Universität Bonn mit großer
                    Begeisterung für Entwicklung und Programmierung!
                </h3>
            </Col>
        </Row>
    );
}

export default SectionStart; 