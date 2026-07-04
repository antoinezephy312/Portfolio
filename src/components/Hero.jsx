import { profile, featuredProject } from "../data";
import useTypewriter from "../hooks/useTypewriter";
import Reveal from "./Reveal";
import { GitHubIcon, FacebookIcon, MailIcon, ArrowDownIcon, PinIcon } from "./Icons";

export default function Hero() {
  const typed = useTypewriter(profile.typingRoles);

  return (
    <section id="top" className="hero">
      <div className="hero__grid-bg" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="hero__text">
          <Reveal>
            <p className="hero__eyebrow">
              <span className="hero__wave">👋</span> Hello, I&apos;m
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero__name">{profile.name}</h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="hero__role">
              <span className="hero__typed">{typed}</span>
              <span className="caret" aria-hidden="true" />
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="hero__tagline">{profile.tagline}</p>
          </Reveal>

          <Reveal delay={320}>
            <div className="hero__cta">
              <a className="btn" href="#projects">
                View my work
              </a>
              <a className="btn btn--ghost" href="#contact">
                Get in touch
              </a>
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="hero__meta">
              <div className="hero__socials">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href={profile.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  <MailIcon />
                </a>
              </div>
              <span className="hero__location">
                <PinIcon width={16} height={16} /> {profile.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="hero__portrait-col">
          <div className="portrait">
            <div className="portrait__glow" aria-hidden="true" />
            <div className="portrait__card">
              <img src={profile.portrait} alt={`Portrait of ${profile.name}`} />
            </div>

            <div className="chip chip--ai float-slow">
              <img src={featuredProject.logo} alt="" />
              <div>
                <strong>{featuredProject.name}</strong>
                <span>My AI chatbot</span>
              </div>
            </div>

            <div className="chip chip--role float-fast">
              <span className="chip__emoji">💬</span>
              <div>
                <strong>Chatbots</strong>
                <span>Conversational AI</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll down to About section">
        <ArrowDownIcon width={18} height={18} />
      </a>
    </section>
  );
}
