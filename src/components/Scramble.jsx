import { useEffect, useRef, useState } from "react";

const POOL = "!<>-_\\/[]{}=+*^?#";

// Text that decodes from glyph noise, left to right, the first time it
// scrolls into view. Falls back to plain text for reduced-motion users.
export default function Scramble({ text, className = "" }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let interval = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        let frame = 0;
        const total = 22;
        interval = setInterval(() => {
          frame += 1;
          if (frame >= total) {
            clearInterval(interval);
            setDisplay(text);
            return;
          }
          const progress = frame / total;
          setDisplay(
            text
              .split("")
              .map((ch, i) => {
                if (ch === " ") return " ";
                if (i / text.length < progress) return ch;
                return POOL[(Math.random() * POOL.length) | 0];
              })
              .join("")
          );
        }, 28);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [text]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
