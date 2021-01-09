import React from 'react';
import {Row, Col, Card} from 'react-bootstrap';

const tagColors = {
    "HTML":'#82e0aa',
    "JS":'#f4d03f',
    "CSS":'#76d7c4',
    "Bootstrap":'#7dcea0',
    "C++":'#5dade2',
    "R":'#95a5a6',
    "MongoDB" : 'purple',
    "Python":'#f1948a',
    "Flask": '#edbb99',
    "Numpy": '#f5b7b1',
    "Pandas": '#f5b7b1',
    "Matplotlib": '#d2b4de',
    "Bokeh": '#d2b4de'
};

class Project extends React.Component {

    render() {
        return (
            <Col ls={3} md={4} sm={6}>
                <Card>
                    <Card.Body>
                        {this.props.children}
                    </Card.Body>
                </Card>
            </Col>
        );
    }


    static Title(props) {
        return <Card.Title>{props.children}</Card.Title>;
    }

    static Description(props) {
        return <Card.Text>{props.children}</Card.Text>;
    }

    static Company(props) {
        return (
            <small className="d-block">
                <i className="fas fa-map-marker-alt mr-1"></i>
                {props.children}
            </small>
        );
    }

    static TagList(props) {
        // Generate individual Tags
        const tags = props.langs.map(lang => {
            const bgColor = lang in tagColors ? tagColors[lang] : 'grey'; 
            return (
                <Col className="col-auto m-1 badge" style={{backgroundColor:bgColor}}>
                    {lang}
                </Col>
            );
        });

        // Return row of tags
        return <Row>{tags}</Row>;
    }
}

export default Project;