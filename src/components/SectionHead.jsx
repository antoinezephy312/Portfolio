import Reveal from "./Reveal";

// Editorial section header: index + label on a hairline rule, then a large
// serif title with an optional description alongside it.
export default function SectionHead({ index, label, title, description }) {
  return (
    <Reveal>
      <header className="section__head">
        <div className="section__meta">
          <span className="section__index">{index}</span>
          <span className="kicker">{label}</span>
        </div>
        <div className="section__title-row">
          <h2 className="section__title">{title}</h2>
          {description && <p className="section__desc">{description}</p>}
        </div>
      </header>
    </Reveal>
  );
}
