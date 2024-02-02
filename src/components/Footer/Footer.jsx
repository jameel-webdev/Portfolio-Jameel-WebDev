import "./footer.css";

export const Footer = () => {
  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  return (
    <div className="footer container">
      <div className="footer__container container">
        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#project" className="footer__link">
              Projects
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://github.com/jameel-webdev"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.instagram.com/jameel.webdev"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-instagram"></i>
          </a>
        </div>

        <div className="footer__copy">
          Copyright &#169; {currentYear}, Jameel Ahmed
        </div>
      </div>
    </div>
  );
};
