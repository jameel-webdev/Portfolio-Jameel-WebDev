import { Info } from "./Info";
import "./about.css";

export const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My Introduction</span>
      <div className="about__container container grid">
        <div className="about__data">
          <p className="about__description">
            <span className="space-btwn">
              As a full-stack developer currently adept in React, MongoDB,
              Express.js, and Node.js, I thrive on crafting dynamic web
              applications.
            </span>
            <span className="space-btwn">
              I seamlessly navigate between JavaScript and TypeScript for
              optimized code quality and performance.
            </span>
            <span className="space-btwn">
              My joy lies in architecting responsive user experiences and robust
              scalable backend solutions.
            </span>
          </p>
        </div>

        <Info />
      </div>
    </section>
  );
};
