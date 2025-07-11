import React from 'react';
import './Sidebars.css';

const educationData = [
  {
    degree: 'Bachelor of Computer Science',
    institution: 'Shivaji University, Kolhapur',
    date: 'June 2022',
    location: 'Karad - Maharashtra, India',
    icon: '🎓',
  },
  {
    degree: 'Higher Secondary Education (Science - PCM)',
    institution: 'Maharashtra Board, India',
    date: 'March 2019',
    location: 'Aundh - Maharashtra, India',
    icon: '🏫',
  },
];

const Sidebars: React.FC = () => (
  <section className="sidebars-section" id="education">
    <div className="sidebar-heading">Education</div>
    <div className="education-grid">
      {educationData.map((edu, idx) => (
        <div className="education-card" key={idx}>
          <span className="education-accent" />
          <h3 className="education-title">
            <span className="education-icon">{edu.icon}</span> {edu.degree}
          </h3>
          <div className="education-institution">{edu.institution}</div>
          <div className="education-details-row">
            <span className="education-date">{edu.date}</span>
            <span className="education-location">{edu.location}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Sidebars; 