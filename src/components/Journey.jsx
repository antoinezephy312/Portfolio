import { journey } from "../data";
import Reveal from "./Reveal";

export default function Journey() {
  return (
    <section id="journey" className="section section--alt">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <p className="section__eyebrow">Journey</p>
            <h2 className="section__title">Education &amp; experience</h2>
          </div>
        </Reveal>

        <div className="timeline">
          {journey.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="timeline__item">
                <div className="timeline__dot" aria-hidden="true" />
                <div className="card timeline__card">
                  <span className="timeline__period">{item.period}</span>
                  <h3>{item.title}</h3>
                  <p className="timeline__place">{item.place}</p>
                  <p className="timeline__text">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
