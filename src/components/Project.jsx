import React from 'react';
import PropTypes from 'prop-types';

import {Row, Col, Card} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

const tagColors = {
    "HTML5":'#82e0aa',
    "JS":'#f4d03f',
    "JSX":'#f4d03f',
    "React":"#d8e39d",
    "CSS3":'#76d7c4',
    "Bootstrap":'#7dcea0',
    "C++11":'#5dade2',
    "C++":'#5dade2',
    "R":'#95a5a6',
    "MongoDB" : '#abcdd4',
    "Python3":'#f1948a',
    "Flask": '#edbb99',
    "Numpy": '#f5b7b1',
    "Pandas": '#f5b7b1',
    "Matplotlib": '#d2b4de',
    "Bokeh": '#d2b4de'
};

class Project extends React.Component {

    render() {
        const children = React.Children.toArray(this.props.children);
        const bodyChildren = children.filter(c => !c.props.__CARD_FOOTER)
        const footerChildren = children.filter(c => c.props.__CARD_FOOTER)

        return (
            <Card style={{backgroundColor:'#fefbfb', marginTop: '15px', marginBottom: '15px'}}>
                <Card.Body className="d-flex flex-column pb-2">
                    {bodyChildren}
                </Card.Body>
                <Card.Footer className="py-3">
                    {footerChildren}
                </Card.Footer>
            </Card>
        );
    }


    static Title(props) {
        return <Card.Title className="main-font"><h3>{props.children}</h3></Card.Title>;
    }

    static Description(props) {
        return <Card.Text className="secondary-font">{props.children}</Card.Text>;
    }

    static Company(props) {
        return (
            <small className="d-flex align-items-center mt-auto font-weight-bold" style={{color:"#575757", letterSpacing: '-1px'}}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-1"/>
                {props.children}
            </small>
        );
    }

    static TagList(props) {
        // Generate individual Tags
        const tags = props.langs.map(lang => {
            const bgColor = lang in tagColors ? tagColors[lang] : 'grey'; 
            return (
                <Col className="col-auto m-1 badge secondary-font" key={lang} style={{backgroundColor:bgColor, lineHeight:1.25}}>
                    {lang}
                </Col>
            );
        });

        // Return row of tags
        return <Row className="m-n1">{tags}</Row>;
    }
}

Project.Company.propTypes = {children: PropTypes.node, __TYPE: PropTypes.string}
Project.Company.defaultProps = {__CARD_FOOTER: false};

Project.TagList.propTypes = {langs: PropTypes.arrayOf(PropTypes.string), __TYPE: PropTypes.string,};
Project.TagList.defaultProps = {__CARD_FOOTER: true};



export default Project;