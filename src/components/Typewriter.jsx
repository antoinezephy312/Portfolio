import { useEffect, useState } from "react";

// Types a phrase, holds, deletes it, then cycles to the next one.
// Reduced-motion users just see the first phrase, static.
export default function Typewriter({ words, typeSpeed = 55, deleteSpeed = 28, hold = 1700 }) {
  const [reduced] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
  const [index, setIndex] = useState(0);
  const [len, setLen] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return;
    const word = words[index % words.length];
    let t;
    if (!deleting && len === word.length) {
      t = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && len === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    } else {
      t = setTimeout(
        () => setLen((l) => l + (deleting ? -1 : 1)),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(t);
  }, [len, deleting, index, words, typeSpeed, deleteSpeed, hold, reduced]);

  const word = words[index % words.length];

  return (
    <span className="typewriter">
      {reduced ? words[0] : word.slice(0, len)}
      <span className="type-caret" aria-hidden="true" />
    </span>
  );
}
