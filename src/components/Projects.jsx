import { featuredProject, upcomingProjects } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { CodeIcon, ArrowUpRightIcon } from "./Icons";

export default function Projects() {
  const { links } = featuredProject;
  const hasLinks = links.live || links.code;

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead
          index="03"
          label="// projects"
          title={<>Things I&apos;ve <em>built</em></>}
          description="One shipped product, and what I'm building next — in the open."
        />

        <Reveal>
          <article className="card featured tilt">
            <div className="featured__media">
              <div className="chat">
                <div className="chat__head">
                  <img className="chat__avatar" src={featuredProject.logo} alt="" />
                  <div>
                    <strong>{featuredProject.name}</strong>
                    <span>
                      <span className="chat__online" /> Active now
                    </span>
                  </div>
                </div>
                <div className="chat__body">
                  <div className="chat__bubble chat__bubble--in">Hi! I&apos;m ClarenceAI 👋</div>
                  <div className="chat__bubble chat__bubble--in">How can I help you today?</div>
                  <div className="chat__bubble chat__bubble--out">What can you do?</div>
                  <div className="chat__bubble chat__bubble--in">Ask me anything — I reply 24/7 ✨</div>
                </div>
              </div>
            </div>
            <div className="featured__body">
              <span className="featured__label">{featuredProject.label}</span>
              <h3 className="featured__name">{featuredProject.name}</h3>
              <p>{featuredProject.description}</p>
              <div className="featured__tags">
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="featured__actions">
                {links.live && (
                  <a className="btn btn--small" href={links.live} target="_blank" rel="noreferrer">
                    <span className="btn__ico">
                      <ArrowUpRightIcon width={13} height={13} />
                    </span>
                    Visit ClarenceAI
                  </a>
                )}
                {links.code && (
                  <a className="btn btn--small btn--ghost" href={links.code} target="_blank" rel="noreferrer">
                    <span className="btn__ico">
                      <CodeIcon width={13} height={13} />
                    </span>
                    Source code
                  </a>
                )}
                {!hasLinks && <span className="featured__soon">Public demo coming soon</span>}
              </div>
            </div>
          </article>
        </Reveal>

        <div className="upcoming__grid">
          {upcomingProjects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120}>
              <article className="card terminal tilt">
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
