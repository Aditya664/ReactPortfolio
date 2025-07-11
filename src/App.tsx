import Header from './components/Header';
import TechnicalExpertise from './components/TechnicalExpertise';
import Projects from './components/Projects';
import ProfessionalExperience from './components/ProfessionalExperience';
import Sidebars from './components/Sidebars';
import './App.css';
import { ThemeProvider } from './theme-context';

function App() {
  return (
    <ThemeProvider>
      <div className="fullpage-container">
        <div id="about" /><Header />
        <div id="skills" /><TechnicalExpertise />
        <div id="projects" /><Projects />
        <div id="experience" /><ProfessionalExperience />
        <div id="education" /><Sidebars />
      </div>
    </ThemeProvider>
  );
}

export default App;
