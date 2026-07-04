import { skillGroups } from "../data";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <p className="section__eyebrow">Skills</p>
            <h2 className="section__title">What I work with</h2>
          </div>
        </Reveal>

        <div className="skills__grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 120}>
              <article className="card skills__card">
                <div className="skills__icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <div className="skills__pills">
                  {group.skills.map((skill) => (
                    <span key={skill} className="pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
