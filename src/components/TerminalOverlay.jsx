import { useEffect, useRef, useState } from "react";
import { profile, skillGroups, featuredProject, upcomingProjects } from "../data";

const BANNER = [
  "clarence.sh — interactive shell",
  "type 'help' to see available commands.",
];

const PROMPT = "guest@clarence:~$";

// Hidden-in-plain-sight easter egg: a working fake terminal. Opens with the
// backtick key, the navbar terminal button, or the "open-terminal" event.
export default function TerminalOverlay() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState([]);
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([]);
  const [histIdx, setHistIdx] = useState(-1);
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const print = (out) =>
    setLines((ls) => [...ls, ...out.map((text) => ({ type: "out", text }))]);

  const commands = {
    help: () => [
      "available commands:",
      "  whoami     — who is this guy",
      "  skills     — what I work with",
      "  projects   — things I've built",
      "  socials    — where to find me",
      "  contact    — get in touch",
      "  clear      — clear the screen",
      "  exit       — close the terminal",
    ],
    whoami: () => [
      `${profile.fullName} — ${profile.role}`,
      `${profile.location} · ${profile.status.toLowerCase()}`,
    ],
    skills: () => skillGroups.map((g) => `${g.title}: ${g.skills.join(", ")}`),
    projects: () => [
      `* ${featuredProject.name} — ${featuredProject.tags.join(" · ")} [live]`,
      ...upcomingProjects.map((p) => `- ${p.title} [${p.status}]`),
    ],
    socials: () => [
      `github    ${profile.socials.github}`,
      `facebook  ${profile.socials.facebook}`,
    ],
    contact: () => [
      `email: ${profile.email}`,
      "or use the form in the contact section.",
    ],
    sudo: () => [
      "[sudo] password for guest:",
      "permission denied. nice try though ;)",
    ],
    hack: () => [
      "initiating breach protocol ...",
      "bypassing firewall ......... FAILED",
      "just kidding — I only hack in CTFs, legally.",
      "try 'whoami' instead.",
    ],
  };

  const run = (raw) => {
    const cmd = raw.trim();
    setLines((ls) => [...ls, { type: "in", text: cmd }]);
    if (!cmd) return;
    setHistory((h) => [...h, cmd]);
    setHistIdx(-1);

    const [name] = cmd.toLowerCase().split(/\s+/);
    if (name === "clear") {
      setLines([]);
    } else if (name === "exit") {
      setOpen(false);
    } else if (commands[name]) {
      print(commands[name]());
    } else {
      print([`command not found: ${name} — type 'help'`]);
    }
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "`" || e.ctrlKey || e.metaKey || e.altKey) return;
      const t = e.target;
      if (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return;
      e.preventDefault();
      setOpen(true);
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-terminal", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-terminal", onOpen);
    };
  }, []);

  useEffect(() => {
    if (!open) return;
    setLines(BANNER.map((text) => ({ type: "out", text })));
    setValue("");
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => inputRef.current?.focus(), 60);
    return () => {
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open]);

  useEffect(() => {
    const el = bodyRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const onInputKey = (e) => {
    if (e.key === "Enter") {
      run(value);
      setValue("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!history.length) return;
      const idx = histIdx < 0 ? history.length - 1 : Math.max(0, histIdx - 1);
      setHistIdx(idx);
      setValue(history[idx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (histIdx < 0) return;
      const idx = histIdx + 1;
      if (idx >= history.length) {
        setHistIdx(-1);
        setValue("");
      } else {
        setHistIdx(idx);
        setValue(history[idx]);
      }
    }
  };

  if (!open) return null;

  return (
    <div className="term-overlay" onClick={() => setOpen(false)} role="dialog" aria-label="Terminal">
      <div className="term" onClick={(e) => { e.stopPropagation(); inputRef.current?.focus(); }}>
        <div className="term__bar">
          <span />
          <span />
          <span />
          <em className="term__title">guest@clarence — zsh</em>
          <button className="term__close" onClick={() => setOpen(false)} aria-label="Close terminal">
            ✕
          </button>
        </div>
        <div className="term__body" ref={bodyRef}>
          {lines.map((line, i) => (
            <p key={i} className={`term__line ${line.type === "in" ? "term__line--in" : ""}`}>
              {line.type === "in" && <span className="term__prompt">{PROMPT}</span>}
              {line.text}
            </p>
          ))}
          <div className="term__input-row">
            <span className="term__prompt">{PROMPT}</span>
            <input
              ref={inputRef}
              className="term__input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onInputKey}
              spellCheck="false"
              autoComplete="off"
              autoCapitalize="off"
              aria-label="Terminal input"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
