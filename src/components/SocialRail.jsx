import { profile } from "../data";
import { GitHubIcon, FacebookIcon, MailIcon } from "./Icons";

// Fixed vertical social rail on the right edge (desktop only).
export default function SocialRail() {
  return (
    <div className="social-rail" aria-label="Social links">
      <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitHubIcon width={18} height={18} />
      </a>
      <a href={profile.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
        <FacebookIcon width={18} height={18} />
      </a>
      <a href={`mailto:${profile.email}`} aria-label="Email">
        <MailIcon width={18} height={18} />
      </a>
    </div>
  );
}
