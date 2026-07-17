import { useEffect, useRef } from "react";

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

// Infinite scrolling keyword band — a full-width accent between hero and
// about. Skews slightly with scroll velocity for a bit of physicality.
export default function Marquee() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    let last = window.scrollY;
    let skew = 0;
    let target = 0;
    let raf = 0;

    const onScroll = () => {
      const y = window.scrollY;
      target = Math.max(-10, Math.min(10, (y - last) * 0.35));
      last = y;
    };

    const loop = () => {
      target *= 0.88;
      skew += (target - skew) * 0.12;
      el.style.setProperty("--skew", `${skew.toFixed(2)}deg`);
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(loop);
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="marquee" ref={ref} aria-hidden="true">
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
