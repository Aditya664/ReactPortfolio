import React from 'react';
import './Header.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
];

const Header: React.FC = () => (
  <header className="modern-header">
    <div className="masthead-modern">
      <div className="masthead-main-row">
        <div className="avatar-wrapper">
          <img className="avatar" src="https://avatars.githubusercontent.com/u/67827362?v=4" alt="Aditya Deshmukh avatar" />
        </div>
        <div className="masthead-info">
          <h1 className="name">ADITYA DESHMUKH</h1>
          <div className="name-accent-bar" />
          <div className="headline">Frontend Engineer · UI/UX Enthusiast · React & Angular Specialist</div>
          <div className="subtitle">Satara, Maharashtra, India</div>
          <div className="tagline">Building beautiful, performant web apps with React, Angular, and modern UI/UX.</div>
        </div>
      </div>
      <hr className="masthead-divider" />
      <div className="header-links-row-modern">
        <a href="https://linkedin.com/in/aditya-deshmukh-adb0283" target="_blank" rel="noopener noreferrer" className="header-link-modern"><FaLinkedin size={24} /> LinkedIn</a>
        <a href="https://github.com/Aditya664" target="_blank" rel="noopener noreferrer" className="header-link-modern"><FaGithub size={24} /> GitHub</a>
        <a className="resume-btn-modern" href="src\assets\Resume (6).pdf" target="_blank" rel="noopener noreferrer"><HiOutlineDocumentDownload size={24} /> Resume</a>
      </div>
    </div>
    <div className="header-fade-separator" />
    <nav className="header-nav-modern">
      {navLinks.map(link => (
        <a key={link.id} href={`#${link.id}`} className="header-nav-link-modern">{link.label}</a>
      ))}
    </nav>
  </header>
);

export default Header; 