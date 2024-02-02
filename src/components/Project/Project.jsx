import { Work } from "./Work";
import "./project.css";

export const Project = () => {
  return (
    <section className="project section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">Most recent works</span>

      <Work />
    </section>
  );
};
