import { useEffect } from "react";

// Drives two cursor effects on `.card` elements:
//  • spotlight  — local cursor position as --mx / --my (all cards)
//  • 3D tilt    — perspective rotation as --rx / --ry (cards marked `.tilt`)
// Tilt is skipped when the user prefers reduced motion.
export default function useCardSpotlight() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let lastTilt = null;

    const resetTilt = (el) => {
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    };

    const onMove = (e) => {
      const card = e.target.closest?.(".card");
      if (card) {
        const rect = card.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        card.style.setProperty("--mx", `${px * 100}%`);
        card.style.setProperty("--my", `${py * 100}%`);

        if (!reduce && card.classList.contains("tilt")) {
          const max = 5;
          card.style.setProperty("--rx", `${(px - 0.5) * 2 * max}deg`);
          card.style.setProperty("--ry", `${-(py - 0.5) * 2 * max}deg`);
          if (lastTilt && lastTilt !== card) resetTilt(lastTilt);
          lastTilt = card;
          return;
        }
      }

      if (lastTilt && (!card || !card.classList.contains("tilt"))) {
        resetTilt(lastTilt);
        lastTilt = null;
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
}
