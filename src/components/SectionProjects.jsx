import React from 'react';
import Section from './Section';
import Project from './Project';
import Break from './Break'

import {CardDeck} from 'react-bootstrap';

function SectionProjects() {
    return (
        <Section id="projects" heading="Projects">
            <CardDeck style={{marginTop:'-15px', marginBottom:'-15px'}}>

                <Project>
                    <Project.Title>Excel Web-Add-In</Project.Title>
                    <Project.Description>
                        Eine Add-In, das eine Portfolio-Verwaltung direkt in Excel via runter- und hochladbarer Tabellen ermöglicht.
                        Umgesetzt als Website mit Flask Backend.
                    </Project.Description>
                    <Project.Company href="http://www.quanvest.de">QUANVEST GmbH</Project.Company>
                    <Project.TagList langs={['Python3', 'Flask', 'Bootstrap', 'CSS3', 'HTML5', 'JS', 'RESTful API']}/>
                </Project>

                <Break on={['sm', 'xs']}/>
            
                <Project>
                    <Project.Title>Tweetsentiment Analyse</Project.Title>
                    <Project.Description>
                        Analyse des Zusammenhangs zwischen positiv und negativ geprägten Wortfeldern auf Twitter und dem historischem Markttrend.
                        Interaktive Visualisierung im Browser.
                    </Project.Description>
                    <Project.Company href="http://www.quanvest.de">QUANVEST GmbH</Project.Company>
                    <Project.TagList langs={['Python3', 'Bokeh', 'Matplotlib', 'Pandas', 'Bootstrap', 'CSS3', 'JS', 'MongoDB']}/>
                </Project>

                <Break on={['lg', 'md', 'sm', 'xs']}/>

                <Project>
                    <Project.Title>React Portfolio-Website</Project.Title>
                    <Project.Description>
                        Entwicklung dieser Website als persönliches Lernprojekt für React und React-Bootstrap.
                    </Project.Description>
                    <Project.TagList langs={['JSX', 'React', 'Bootstrap', 'CSS3',  'HTML5', 'Github-pages']}/>
                </Project>

                <Break on={['xl', 'sm', 'xs']}/>

                <Project>
                    <Project.Title>Rcpp Filter</Project.Title>
                    <Project.Description>
                        C++ Implementierung eines zeitkritischen Filters
                        für Datensätze in einem in R geschriebenen Backend.
                    </Project.Description>
                    <Project.Company href="http://www.quanvest.de">QUANVEST GmbH</Project.Company>
                    <Project.TagList langs={['C++11', 'R', 'Rcpp']}/>
                </Project>
                
                <Break on={['lg', 'md', 'sm', 'xs']}/>

                <Project>
                    <Project.Title>C++ Workshops</Project.Title>
                    <Project.Description>
                        Leitung von Anfänger- und Fortgeschrittene-Programmierkurse für Jugendliche im Alter von 13 bis 16 Jahren.
                    </Project.Description>
                    <Project.Company href="http://www.sk-jugend.de">SK-Jugend</Project.Company>
                    <Project.TagList langs={['C++']}/>
                </Project>
                
                <Break on={['sm', 'xs']}/>

                <Project>
                    <Project.Title>Python Workshop</Project.Title>
                    <Project.Description>
                        Spielerische Heranführung von Jugendlichen zwischen 11 und 13 an das Programmieren via einer Python-Minecraft-Schnittstelle.
                    </Project.Description>
                    <Project.Company href="http://www.sk-jugend.de">SK-Jugend</Project.Company>
                    <Project.TagList langs={['Python3', 'RaspberryJuice']}/>
                </Project>
                
                
            </CardDeck>
        </Section>
    );
}

export default SectionProjects;