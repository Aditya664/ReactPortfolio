import React from 'react';
import './ProfessionalExperience.css';

const ProfessionalExperience: React.FC = () => (
  <section className="experience-section">
    <h2 className="section-title">Professional Experience</h2>
    <div className="experience-list">
      <article className="experience-article">
        <div className="exp-header">
          <div>
            <h3>Civica Pvt Ltd</h3>
            <span className="exp-location">Vadodara, Gujarat, India</span>
          </div>
          <span className="exp-date">Jul 2024 - Present</span>
        </div>
        <h4>Software Engineer</h4>
        <p className="exp-desc">
          <strong>Description:</strong> Leading UI development and integration for ERP modules (Utility Management, Asset Management) in a cloud-based municipal platform. Responsible for building reusable components, optimizing Angular modules, integrating reports, and mentoring junior developers. Collaborated with cross-functional teams and resolved production issues.
        </p>
        <ul>
          <li>Led UI module for front-end and back-end integration.</li>
          <li>Built reusable components and optimized performance for critical Angular modules.</li>
          <li>Integrated reports using DevExpress and .repx files.</li>
          <li>Mentored and supported junior team members.</li>
          <li>Collaborated with cross-functional teams and coordinated team members from different regions.</li>
          <li>Resolved production issues and provided application support.</li>
        </ul>
      </article>
      <article className="experience-article">
        <div className="exp-header">
          <div>
            <h3>Civica Pvt Ltd</h3>
            <span className="exp-location">Vadodara, Gujarat, India</span>
          </div>
          <span className="exp-date">Jul 2022 - Jun 2024</span>
        </div>
        <h4>Junior Software Engineer</h4>
        <p className="exp-desc">
          <strong>Description:</strong> Developed and maintained ERP modules for municipal finance and operations. Involved in requirement analysis, UI design, API integration, report integration, and team coordination. Contributed to building Angular components, creating mockups, and writing unit tests.
        </p>
        <ul>
          <li>Participated in requirement analysis, sprint planning, and estimations.</li>
          <li>Developed Angular 12 components and UI designs with API integrations.</li>
          <li>Created mockups and wrote unit test cases for UI components.</li>
          <li>Integrated reports using DevExpress and .repx files.</li>
          <li>Coordinated team members from different regions.</li>
        </ul>
      </article>
    </div>
  </section>
);

export default ProfessionalExperience; 