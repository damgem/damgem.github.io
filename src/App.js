import './App.css';
import Navigation from './components/Navigation';
import SectionStart from './components/SectionStart';
import SectionProjects from './components/SectionProjects';

function App() {
  return (
    <div className="App">
        <Navigation/>
        <SectionStart/>
        <SectionProjects/>
    </div>
  );
}

export default App;
