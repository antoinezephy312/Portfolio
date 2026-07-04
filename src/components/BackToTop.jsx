import { useEffect, useState } from "react";
import { ArrowUpRightIcon } from "./Icons";

// Floating button that fades in once the user scrolls past the hero.
export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`to-top${show ? " to-top--show" : ""}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <ArrowUpRightIcon width={18} height={18} style={{ transform: "rotate(-45deg)" }} />
    </button>
  );
}
