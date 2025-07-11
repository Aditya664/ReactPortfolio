import React, { useEffect, useState } from 'react';
import './Projects.css';

const fallbackProjects = [
  {
    title: 'developer-portfolio',
    description: 'Software Developer Portfolio Website built with Next.js and Tailwind CSS that helps you showcase your work and skills as a software developer.',
    tech: ['Next.js', 'Tailwind CSS', 'JavaScript'],
    code: 'https://github.com/Aditya664/developer-portfolio',
    demo: 'https://developer-portfolio-aditya664.vercel.app/',
    stars: 0,
  },
  {
    title: 'react-walkthrough',
    description: 'A React project demonstrating guided walkthroughs and onboarding for web apps.',
    tech: ['React', 'TypeScript'],
    code: 'https://github.com/Aditya664/react-walkthrough',
    demo: '',
    stars: 0,
  },
  {
    title: 'portfolio-responsive-complete',
    description: 'Responsive Personal Portfolio Website using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    code: 'https://github.com/Aditya664/portfolio-responsive-complete',
    demo: '',
    stars: 0,
  },
  {
    title: 'commclassroom',
    description: 'Open source classroom platform for community learning.',
    tech: ['HTML'],
    code: 'https://github.com/Aditya664/commclassroom',
    demo: '',
    stars: 0,
  },
  {
    title: 'INCOMEEXPENSE1',
    description: 'A TypeScript project for managing income and expenses.',
    tech: ['TypeScript'],
    code: 'https://github.com/Aditya664/INCOMEEXPENSE1',
    demo: '',
    stars: 0,
  },
];

const GITHUB_USER = 'Aditya664';
const MAX_PROJECTS = 6;

const Projects: React.FC = () => {
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100`)
      .then(res => res.json())
      .then(data => {
        if (!Array.isArray(data)) throw new Error('Invalid data');
        // Sort by stargazers_count desc
        const sorted = data
          .filter(repo => !repo.fork && !repo.private)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
          .slice(0, MAX_PROJECTS);
        setRepos(sorted);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  const displayProjects = !error && repos.length > 0
    ? repos.map(repo => ({
        title: repo.name,
        description: repo.description,
        tech: repo.language ? [repo.language] : [],
        code: repo.html_url,
        demo: repo.homepage || '',
        stars: repo.stargazers_count,
      }))
    : fallbackProjects;

  return (
    <section className="projects-section" id="projects">
      <div className="projects-heading">Featured Projects</div>
      {loading ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>Loading projects…</div>
      ) : (
        <div className="projects-grid">
          {displayProjects.map((project, idx) => (
            <div className="project-card" key={idx}>
              <span className="project-accent" />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tech-row">
                {project.tech.map((t: string) => (
                  <span className="project-tech-badge" key={t}>{t}</span>
                ))}
              </div>
              <div className="project-links">
                <a className="project-btn" href={project.code} target="_blank" rel="noopener noreferrer">GitHub</a>
                {project.demo && (
                  <a className="project-btn" href={project.demo} target="_blank" rel="noopener noreferrer">Live Demo</a>
                )}
                {typeof project.stars === 'number' && (
                  <span className="project-stars" title="GitHub Stars">⭐ {project.stars}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {error && (
        <div style={{ color: 'red', textAlign: 'center', marginTop: '1rem' }}>
          Could not load projects from GitHub. Showing featured projects instead.
        </div>
      )}
    </section>
  );
};

export default Projects; 