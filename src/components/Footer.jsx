import { profile } from "../data";
import useLocalTime from "../hooks/useLocalTime";
import { ArrowUpRightIcon } from "./Icons";

export default function Footer() {
  const time = useLocalTime("Asia/Manila");

  return (
    <footer className="footer">
      <div className="container">
        <a href={`mailto:${profile.email}`} className="footer__cta">
          Let&apos;s work <em>together</em>
        </a>
        <p className="footer__lead">
          Have something in mind? I&apos;m one message away — I usually reply within a day.
        </p>

        <div className="footer__links">
          <div className="footer__col">
            <h4>Navigate</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#journey">Journey</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer__col">
            <h4>Elsewhere</h4>
            <a href={profile.socials.github} target="_blank" rel="noreferrer">
              GitHub <ArrowUpRightIcon width={12} height={12} />
            </a>
            <a href={profile.socials.facebook} target="_blank" rel="noreferrer">
              Facebook <ArrowUpRightIcon width={12} height={12} />
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
          <div className="footer__col">
            <h4>Now</h4>
            <span>{profile.location}</span>
            <span>{time} — local time</span>
            <span>{profile.status}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} {profile.fullName} · built with React &amp; Vite</p>
          <a href="#top" className="footer__top">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
