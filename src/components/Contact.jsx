import { profile } from "../data";
import Reveal from "./Reveal";
import { GitHubIcon, FacebookIcon, MailIcon, SendIcon } from "./Icons";

export default function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry from ${data.get("name")}`);
    const body = encodeURIComponent(
      `${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`
    );
    // Opens the visitor's mail app with everything pre-filled — no backend needed.
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <div className="section__head">
            <p className="section__eyebrow">Contact</p>
            <h2 className="section__title">Let&apos;s build something smart together</h2>
          </div>
        </Reveal>

        <div className="contact__grid">
          <Reveal>
            <div className="contact__info">
              <p>
                Have a project in mind, a chatbot idea, or just want to say hi? My inbox is
                always open — I&apos;ll get back to you as soon as I can.
              </p>
              <a className="card contact__email" href={`mailto:${profile.email}`}>
                <span className="contact__email-icon">
                  <MailIcon />
                </span>
                <span>
                  <strong>Email me</strong>
                  <em>{profile.email}</em>
                </span>
              </a>
              <div className="contact__socials">
                <a href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href={profile.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                  <FacebookIcon />
                </a>
                {profile.socials.facebookSecondary && (
                  <a
                    href={profile.socials.facebookSecondary}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook (secondary)"
                  >
                    <FacebookIcon />
                  </a>
                )}
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="card contact__form" onSubmit={handleSubmit}>
              <div className="contact__row">
                <label>
                  Your name
                  <input name="name" type="text" placeholder="Juan Dela Cruz" required />
                </label>
                <label>
                  Your email
                  <input name="email" type="email" placeholder="you@email.com" required />
                </label>
              </div>
              <label>
                Message
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Hi Clarence, I have an idea for a chatbot…"
                  required
                />
              </label>
              <button type="submit" className="btn">
                <SendIcon width={16} height={16} /> Send message
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
