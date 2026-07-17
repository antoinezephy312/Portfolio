import { useEffect, useState } from "react";
import { profile } from "../data";
import { BotIcon, ArrowUpRightIcon, TerminalIcon } from "./Icons";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" onClick={() => setOpen(false)}>
          <span className="nav__mark" aria-hidden="true">
            <BotIcon width={19} height={19} />
          </span>
          {profile.name}
          <span className="nav__dot">.</span>
        </a>

        <div className="nav__right">
          <nav className={`nav__links ${open ? "nav__links--open" : ""}`}>
            {links.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--small nav__cta" onClick={() => setOpen(false)}>
              <span className="btn__ico">
                <ArrowUpRightIcon width={14} height={14} />
              </span>
              Get in touch
            </a>
          </nav>

          <button
            className="nav__term"
            aria-label="Open terminal"
            title="Open terminal (`)"
            onClick={() => {
              setOpen(false);
              window.dispatchEvent(new Event("open-terminal"));
            }}
          >
            <TerminalIcon width={17} height={17} />
          </button>

          <button
            className={`nav__burger ${open ? "nav__burger--open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
