import { profile, about } from "../data";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <p className="section__eyebrow">About me</p>
            <h2 className="section__title">{about.heading}</h2>
          </div>
        </Reveal>

        <div className="about__grid">
          <Reveal className="about__photo-col">
            <div className="about__photo">
              <img src={profile.aboutPhoto} alt={`${profile.name} coding on a laptop`} />
              <div className="about__photo-badge">&lt;/&gt; in my element</div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about__text">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <div className="about__highlights">
                {about.highlights.map((h) => (
                  <span key={h} className="pill pill--glow">
                    {h}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
