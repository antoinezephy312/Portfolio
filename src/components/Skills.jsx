import { skillGroups } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";
import { BotIcon, ShieldIcon, TerminalIcon } from "./Icons";

const icons = {
  bot: BotIcon,
  shield: ShieldIcon,
  terminal: TerminalIcon,
};

export default function Skills() {
  return (
    <section id="skills" className="section section--alt">
      <div className="container">
        <SectionHead
          index="02"
          label="// skills"
          title="What I work with"
          description="The tools and areas I reach for most, grouped by where they fit."
        />

        <div className="skills__grid">
          {skillGroups.map((group, i) => {
            const Icon = icons[group.icon] ?? TerminalIcon;
            return (
              <Reveal key={group.title} delay={i * 90}>
                <article className="card skills__card tilt">
                  <span className="skills__num">0{i + 1}</span>
                  <div className="skills__icon">
                    <Icon width={22} height={22} />
                  </div>
                  <h3>{group.title}</h3>
                  <ul className="skills__list">
                    {group.skills.map((skill) => (
                      <li key={skill}>{skill}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
