import Header from './components/Header';
import TechnicalExpertise from './components/TechnicalExpertise';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Sidebars from './components/Sidebars';
import './App.css';

function App() {
  return (
    <div className="fullpage-container">
      <div id="about" /><Header />
      <div id="skills" /><TechnicalExpertise />
      <div id="projects" /><Projects />
      <div id="experience" /><ProfessionalExperience />
      <div id="education" /><Sidebars />
    </div>
  );
}

export default App;
