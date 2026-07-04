import { profile, about } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHead
          index="01"
          label="// about"
          title={about.heading}
          description="A quick look at who I am, what I build, and where I'm headed."
        />

        <div className="about__grid">
          <Reveal className="about__photo-col">
            <div className="about__media">
              <div className="about__blob" aria-hidden="true" />
              <div className="about__photo">
                <img src={profile.aboutPhoto} alt={`${profile.name} coding on a laptop`} />
                <div className="about__photo-badge">~/davao</div>
              </div>
              <div className="about__exp">
                <strong>NC II</strong>
                <span>TESDA certified technician</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="about__text">
              {about.paragraphs.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
              <div className="about__highlights">
                {about.highlights.map((h) => (
                  <span key={h} className="tag">
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
