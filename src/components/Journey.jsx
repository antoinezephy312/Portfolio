import { journey } from "../data";
import Reveal from "./Reveal";
import SectionHead from "./SectionHead";

export default function Journey() {
  return (
    <section id="journey" className="section section--alt">
      <div className="container">
        <SectionHead
          index="04"
          label="// journey"
          title={<>Education &amp; <em>experience</em></>}
          description="How I got here — school, certifications, and the path so far."
        />

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
