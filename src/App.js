import './App.css';

import React from 'react';
import {Container} from 'react-bootstrap';

import Navigation from './components/Navigation';
import SectionStart from './components/SectionStart';
import SectionProjects from './components/SectionProjects';
import SectionSoftSkills from './components/SectionSoftSkills';
import SectionHardSkills from './components/SectionHardSkills';

function App() {
  return (
    <Container className="App">
        <Navigation />
        <SectionStart/>
        <SectionProjects/>
        <SectionSoftSkills/>
        <SectionHardSkills/>
    </Container>
  );
}

export default App;
