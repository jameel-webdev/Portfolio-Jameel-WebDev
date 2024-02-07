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
            With a Bachelor of Engineering degree and five years of experience
            as an intrapreneur, I seamlessly merge business acumen with
            technical expertise. My unwavering curiosity and passion for
            exploring new technologies have ignited a lifelong dedication to
            innovation and problem-solving. This drive propelled me into the
            dynamic world of development, where I excel. My problem-solving
            approach, honed through navigating the intricacies of the food
            packaging industry's dynamic market conditions, highlights my
            adaptability and strategic insight. Beyond work, I maintain balance
            through pursuits like badminton, table tennis, and media
            consumption. As a full-stack developer currently adept in React,
            MongoDB, Express.js, and Node.js, I seamlessly transition between
            JavaScript and TypeScript to ensure optimized code quality and
            performance while crafting dynamic web applications.
            {/* <span className="space-btwn">
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
            </span> */}
          </p>
        </div>

        <Info />
      </div>
    </section>
  );
};
