import "./header.css";
import { useState } from "react";

export const Header = () => {
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 560) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  return (
    <header className="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          JWD
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#about"
                onClick={() => {
                  setActiveNav("#about");
                }}
                className={
                  activeNav === "about" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                onClick={() => {
                  setActiveNav("#skills");
                }}
                className={
                  activeNav === "skills"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#project"
                onClick={() => {
                  setActiveNav("#project");
                }}
                className={
                  activeNav === "project"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-scenery nav__icon"></i> Project
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => {
                  setActiveNav("#contact");
                }}
                className={
                  activeNav === "contact"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};
