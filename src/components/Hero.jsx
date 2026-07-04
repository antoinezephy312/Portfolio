import { profile, featuredProject, stats } from "../data";
import useLocalTime from "../hooks/useLocalTime";
import Reveal from "./Reveal";
import {
  BotIcon,
  ShieldIcon,
  TerminalIcon,
  CertificateIcon,
  ArrowUpRightIcon,
} from "./Icons";

const statIcons = {
  bot: BotIcon,
  shield: ShieldIcon,
  terminal: TerminalIcon,
  certificate: CertificateIcon,
};

export default function Hero() {
  const time = useLocalTime("Asia/Manila");

  return (
    <section id="top" className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__text">
            <Reveal>
              <div className="status hero__status">
                <span className="status__dot" />
                {profile.status}
              </div>
            </Reveal>

            <Reveal delay={70}>
              <h1 className="hero__name">
                <span>Clarence</span>
                <span>
                  <span className="outline">Mangigo</span>
                  <span className="accent">.</span>
                </span>
              </h1>
            </Reveal>

            <Reveal delay={130}>
              <p
                className="hero__role"
                dangerouslySetInnerHTML={{ __html: profile.roleLine }}
              />
            </Reveal>

            <Reveal delay={190}>
              <p className="hero__tagline">{profile.tagline}</p>
            </Reveal>

            <Reveal delay={250}>
              <div className="hero__cta">
                <a className="btn" href="#projects">
                  <span className="btn__ico">
                    <ArrowUpRightIcon width={15} height={15} />
                  </span>
                  View my work
                </a>
                <a className="btn btn--ghost" href="#contact">
                  <span className="btn__ico">
                    <ArrowUpRightIcon width={15} height={15} />
                  </span>
                  Get in touch
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="hero__portrait-col">
            <div className="portrait">
              <div className="portrait__blob" aria-hidden="true" />
              <div className="portrait__card">
                <img src={profile.portrait} alt={`Portrait of ${profile.name}`} />
                <div className="portrait__caption">
                  <img src={featuredProject.logo} alt="" />
                  <div>
                    <strong>{featuredProject.name}</strong>
                    <span>
                      <span className="portrait__live" /> live · {time} GMT+8
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="hero__stats">
            {stats.map((s) => {
              const Icon = statIcons[s.icon] ?? BotIcon;
              return (
                <div key={s.value} className="stat">
                  <span className="stat__ico">
                    <Icon width={21} height={21} />
                  </span>
                  <div>
                    <div className="stat__val">{s.value}</div>
                    <div className="stat__label">{s.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
