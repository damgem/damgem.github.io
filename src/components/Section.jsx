import React from 'react';
import {Row, Col} from 'react-bootstrap';

class Section extends React.Component {
    render() {
        return (
            <Row id={this.props.id} className="py-5">
                <Col xs={12} className="mb-5 mt-4">
                    <h1 className="main-font text-center">
                        {this.props.title}
                    </h1>
                </Col>
                <Col xs={12}>
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}

export default Section;