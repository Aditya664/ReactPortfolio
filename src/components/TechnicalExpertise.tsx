import React from 'react';
import './TechnicalExpertise.css';

const skillBadges = [
  { name: 'React', icon: '⚛️' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'TypeScript', icon: '🟦' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'HTML5', icon: '🟧' },
  { name: 'CSS3', icon: '🟦' },
  { name: 'Redux', icon: '🔄' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'Tailwind', icon: '🌬️' },
];

const TechnicalExpertise: React.FC = () => (
  <section className="tech-expertise" id="skills">
    <h2 className="section-title">Frontend Skills</h2>
    <div className="skill-badges-row">
      {skillBadges.map(skill => (
        <span className="skill-badge" key={skill.name} title={skill.name}>
          <span className="skill-badge-icon">{skill.icon}</span> {skill.name}
        </span>
      ))}
    </div>
    <div className="tech-columns">
      <div className="tech-col">
        <h3>Languages & Frameworks</h3>
        <ul>
          <li>JavaScript (ES6+), TypeScript</li>
          <li>React, Angular 12+, Redux</li>
        </ul>
        <h3>UI Libraries & Styling</h3>
        <ul>
          <li>Bootstrap 5, Tailwind CSS, Kendo UI, DevExpress, PrimeNG</li>
        </ul>
      </div>
      <div className="tech-col">
        <h3>Tools & Platforms</h3>
        <ul>
          <li>Visual Studio Code, Postman, Git, Figma (UI/UX)</li>
        </ul>
        <h3>Other Skills</h3>
        <ul>
          <li>Responsive Design, RESTful APIs (integration), Agile/Scrum</li>
        </ul>
      </div>
    </div>
  </section>
);

export default TechnicalExpertise; 