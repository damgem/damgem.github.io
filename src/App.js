import './App.css';

import React from 'react';
import {Container} from 'react-bootstrap';

import Navigation from './components/Navigation';
import SectionStart from './components/SectionStart';
import SectionProjects from './components/SectionProjects';
import SectionSoftSkills from './components/SectionSoftSkills';
import SectionHardSkills from './components/SectionHardSkills';
import SectionContact from './components/SectionContact';

function App() {
  return (
    <Container className="App mb-5">
        <Navigation />
        <SectionStart/>
        <SectionProjects/>
        <SectionSoftSkills/>
        <SectionHardSkills/>
        <SectionContact/>
    </Container>
  );
}

export default App;
