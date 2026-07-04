const words = [
  "AI Chatbots",
  "ClarenceAI",
  "Conversational UX",
  "Prompt Engineering",
  "CTF",
  "Penetration Testing",
  "Ethical Hacking",
  "React",
  "JavaScript",
  "Network Security",
];

// Infinite scrolling keyword band — a full-width accent between hero and about.
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[0, 1].map((group) => (
          <div className="marquee__group" key={group}>
            {words.map((word) => (
              <span className="marquee__item" key={word}>
                {word}
                <span className="marquee__star">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
