import { useEffect, useState } from "react";

const LINES = [
  "boot: clarence.sh v2.0",
  "load: ai · security · react modules",
  "auth: establishing secure session ...",
  "ok: access granted — welcome",
];

// Terminal-style boot screen shown once per session, then never again until
// the tab is closed. Skipped entirely for reduced-motion users.
export default function Preloader() {
  const [phase, setPhase] = useState(() => {
    const skip =
      sessionStorage.getItem("booted") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return skip ? "done" : "boot";
  });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (phase !== "boot") return;
    document.documentElement.style.overflow = "hidden";
    const id = setInterval(() => {
      setShown((n) => {
        if (n >= LINES.length) {
          clearInterval(id);
          setTimeout(() => setPhase("exit"), 420);
          return n;
        }
        return n + 1;
      });
    }, 230);
    return () => clearInterval(id);
  }, [phase]);

  useEffect(() => {
    if (phase !== "exit") return;
    sessionStorage.setItem("booted", "1");
    const t = setTimeout(() => {
      document.documentElement.style.overflow = "";
      setPhase("done");
    }, 650);
    return () => clearTimeout(t);
  }, [phase]);

  if (phase === "done") return null;

  const pct = Math.round((Math.min(shown, LINES.length) / LINES.length) * 100);

  return (
    <div className={`preloader ${phase === "exit" ? "preloader--exit" : ""}`} aria-hidden="true">
      <div className="preloader__box">
        <div className="preloader__lines">
          {LINES.slice(0, shown).map((line) => (
            <p key={line}>
              <span className="preloader__prompt">$</span> {line}
            </p>
          ))}
        </div>
        <div className="preloader__bar">
          <span style={{ width: `${pct}%` }} />
        </div>
        <div className="preloader__pct">{pct}%</div>
      </div>
    </div>
  );
}
