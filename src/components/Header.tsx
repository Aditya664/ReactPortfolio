import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';
import { useTheme } from '../theme-context';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <header className="modern-header">
      <div className="masthead-modern">
        <div className="masthead-main-row">
          <div className="avatar-wrapper">
            <img className="avatar" src="https://avatars.githubusercontent.com/u/67827362?v=4" alt="Aditya Deshmukh avatar" />
          </div>
          <div className="masthead-info">
            <h1 className="name">ADITYA DESHMUKH</h1>
            <div className="name-accent-bar" />
            <div className="headline">Frontend Engineer 3 UI/UX Enthusiast 3 React & Angular Specialist</div>
            <div className="subtitle">Satara, Maharashtra, India</div>
            <div className="tagline">Building beautiful, performant web apps with React, Angular, and modern UI/UX.</div>
          </div>
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            style={{ marginLeft: 'auto', marginRight: '1rem', padding: '0.5em 1em', borderRadius: '2em', border: 'none', background: '#e0e7ff', color: '#2563eb', fontWeight: 700, cursor: 'pointer', fontSize: '1.1rem', transition: 'background 0.18s, color 0.18s' }}
          >
            {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
          </button>
        </div>
        <hr className="masthead-divider" />
        <div className="header-links-row-modern">
          <a href="https://linkedin.com/in/aditya-deshmukh-adb0283" target="_blank" rel="noopener noreferrer" className="header-link-modern"><FaLinkedin size={24} /> LinkedIn</a>
          <a href="https://github.com/Aditya664" target="_blank" rel="noopener noreferrer" className="header-link-modern"><FaGithub size={24} /> GitHub</a>
          <a className="resume-btn-modern" href="src\\assets\\Resume (6).pdf" target="_blank" rel="noopener noreferrer"><HiOutlineDocumentDownload size={24} /> Resume</a>
        </div>
      </div>
      <div className="header-fade-separator" />
      {navLinks.map(link => (
        <a key={link.id} href={`#${link.id}`} className="header-nav-link-modern">{link.label}</a>
      ))}
    </header>
  );
};

export default Header; 