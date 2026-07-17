import { useEffect, useRef, useState } from "react";
import { featuredProject, upcomingProjects } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { CodeIcon, ArrowUpRightIcon } from "./Icons";

// Types the terminal command out character by character once the card
// scrolls into view.
function TypedCommand({ text }) {
  const ref = useRef(null);
  const [len, setLen] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLen(text.length);
      return;
    }
    const el = ref.current;
    let interval = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        interval = setInterval(() => {
          setLen((l) => {
            if (l >= text.length) {
              clearInterval(interval);
              return l;
            }
            return l + 1;
          });
        }, 45);
      },
      { threshold: 0.4 }
    );
    // The span itself starts empty (zero size), which would never reach the
    // visibility threshold — observe the surrounding command line instead.
    observer.observe(el.parentElement ?? el);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [text]);

  return <span ref={ref}>{text.slice(0, len)}</span>;
}

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
                    <span className="terminal__prompt">$</span>{" "}
                    <TypedCommand text={project.command} />
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
