import React from 'react';
import {Row, Col} from 'react-bootstrap';

class Section extends React.Component {
    render() {
        const {id, ...childProps} = this.props;
        return (
            <Row id={id} className="py-5 d-flex flex-column align-items-center">
                <Col xs={12} className="mb-5 mt-4">
                    <h1 className="main-font text-center">
                        {this.props.title}
                    </h1>
                </Col>
                <Col {...childProps} className="">
                    {this.props.children}
                </Col>
            </Row>
        );
    }
}

export default Section;