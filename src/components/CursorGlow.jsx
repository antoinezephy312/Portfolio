import { useEffect, useRef } from "react";

// Soft accent glow that trails the cursor in the background. Pointer-only
// (skipped on touch) and rAF-throttled so it stays cheap.
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const el = ref.current;
    let x = 0;
    let y = 0;
    let raf = 0;

    const render = () => {
      raf = 0;
      el.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      el.style.opacity = "1";
    };

    const onMove = (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) raf = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
