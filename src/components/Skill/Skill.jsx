import { Backend } from "./Backend";
import { Frontend } from "./Frontend";
import "./skill.css";

export const Skill = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Tech Stack</h2>
      <span className="section__subtitle">My Arsenals</span>

      <div className="skills__container container grid">
        <Frontend />

        <Backend />
      </div>
    </section>
  );
};
