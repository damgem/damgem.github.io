import './App.css';

import React from 'react';
import {Container} from 'react-bootstrap';

import Navigation from './components/Navigation';
import SectionStart from './components/SectionStart';
import SectionProjects from './components/SectionProjects';
import SectionSoftSkills from './components/SectionSoftSkills';

function App() {
  return (
    <Container className="App">
        <Navigation />
        <SectionStart/>
        <SectionProjects/>
        <SectionSoftSkills/>
    </Container>
  );
}

export default App;
