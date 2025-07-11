import React from 'react';
import './SideNav.css';

const navLinks = [
  { id: 'about', label: 'About', icon: '📰' },
  { id: 'skills', label: 'Skills', icon: '🛠️' },
  { id: 'experience', label: 'Experience', icon: '💼' },
  { id: 'education', label: 'Education', icon: '🎓' },
  { id: 'achievements', label: 'Achievements', icon: '🏆' },
  { id: 'certifications', label: 'Certifications', icon: '📜' },
  { id: 'softskills', label: 'Soft Skills', icon: '🤝' },
  { id: 'languages', label: 'Languages', icon: '🌐' },
];

const SideNav: React.FC = () => (
  <nav className="sidenav-newspaper">
    <div className="sidenav-title">Sections</div>
    <ul className="sidenav-list">
      {navLinks.map(link => (
        <li key={link.id}>
          <a href={`#${link.id}`}>
            <span className="sidenav-icon" aria-hidden="true">{link.icon}</span> {link.label}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default SideNav; 