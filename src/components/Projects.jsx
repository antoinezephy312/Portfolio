import { featuredProject, upcomingProjects } from "../data";
import Reveal from "./Reveal";
import { ExternalLinkIcon, CodeIcon } from "./Icons";

export default function Projects() {
  const { links } = featuredProject;
  const hasLinks = links.live || links.code;

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <p className="section__eyebrow">Projects</p>
            <h2 className="section__title">Things I&apos;ve built</h2>
          </div>
        </Reveal>

        <Reveal>
          <article className="card featured">
            <div className="featured__media">
              <img src={featuredProject.logo} alt={`${featuredProject.name} logo`} />
            </div>
            <div className="featured__body">
              <span className="featured__label">{featuredProject.label}</span>
              <h3 className="featured__name">{featuredProject.name}</h3>
              <p>{featuredProject.description}</p>
              <div className="featured__tags">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="featured__actions">
                {links.live && (
                  <a className="btn btn--small" href={links.live} target="_blank" rel="noreferrer">
                    <ExternalLinkIcon width={16} height={16} /> Live demo
                  </a>
                )}
                {links.code && (
                  <a className="btn btn--small btn--ghost" href={links.code} target="_blank" rel="noreferrer">
                    <CodeIcon width={16} height={16} /> Source code
                  </a>
                )}
                {!hasLinks && <span className="featured__soon">🚀 Public demo coming soon</span>}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="upcoming__grid">
          {upcomingProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <article className="card terminal">
                <div className="terminal__bar">
                  <span />
                  <span />
                  <span />
                  <em>{project.status}</em>
                </div>
                <div className="terminal__body">
                  <p className="terminal__command">
                    <span className="terminal__prompt">$</span> {project.command}
                    <span className="caret caret--small" aria-hidden="true" />
                  </p>
                  <h3>{project.title}</h3>
                  <p className="terminal__blurb">{project.blurb}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
