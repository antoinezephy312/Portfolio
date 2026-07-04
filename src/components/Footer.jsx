import { profile } from "../data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React <span aria-hidden="true">⚛️</span>
        </p>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
