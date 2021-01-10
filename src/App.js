import './App.css';
import Navigation from './components/Navigation';
import SectionStart from './components/SectionStart';
import SectionProjects from './components/SectionProjects';
import React from 'react';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
        <Navigation />
        <SectionStart/>
        <SectionProjects/>
    </Container>
  );
}

export default App;
