import React from 'react';
import Project from './Project';

import {Row, Col} from 'react-bootstrap';

function SectionProjects() {
    return (
        <Row id="projekte" className="py-5">
            <Col xs={12} className="mb-5 mt-4">
                <h1 className="text-center">Projects</h1>
            </Col>
                
            <Project>
                <Project.Title>Excel Web-Add-In</Project.Title>
                <Project.Description>
                    Eine Schnittstelle zur Portfolio-Verwaltung via
                    synchronisierbarer Excel-Tabellen.
                </Project.Description>
                <Project.Company>QUANVEST GmbH</Project.Company>
                <Project.TagList langs={['CSS', 'Bootstrap', 'HTML', 'Flask', 'Python', 'MongoDB']}/>
            </Project>
        
            <Project>
                <Project.Title>Twitter Analyse</Project.Title>
                <Project.Description>
                    Tweetanalysen bezüglich Sentiment sowie positiv und negativ
                    geprägter Wortfelder. Interaktive Visualisierung der Ergebnisse.
                </Project.Description>
                <Project.Company>QUANVEST GmbH</Project.Company>
                <Project.TagList langs={['Python', 'Numpy', 'Pandas', 'Matplotlib', 'Bokeh']}/>
            </Project>

            <Project>
                <Project.Title>Rcpp Filter</Project.Title>
                <Project.Description>
                    Ein R Package für effiziente und flexible Filterung
                    eines DataFrames implementiert in C++. 
                </Project.Description>
                <Project.Company>QUANVEST GmbH</Project.Company>
                <Project.TagList langs={['C++', 'R']}/>
            </Project>

            <Project>
                <Project.Title>C++ & Python Workshops</Project.Title>
                <Project.Description>
                    Programmierkurs für Jugendliche im Alter von 11 - 13 Jahren bzw. 13 bis 16 Jahren.
                    Sowohl Anfänger-, als auch Fortgeschrittene-Kurse.
                </Project.Description>
                <Project.Company>SK-Jugend</Project.Company>
                <Project.TagList langs={['C++', 'Python']}/>
            </Project>
        </Row>
    );
}

export default SectionProjects;