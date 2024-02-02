export const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <div>
          <i className="uil uil-arrow info-icon"></i>
        </div>
        <div>
          <h3 className="about__title">End-to-End Development</h3>

          <span className="about__subtitle">
            Understand, design, code, test, integrate, deploy
          </span>
        </div>
      </div>

      <div className="about__box">
        <div>
          <i className="uil uil-lightbulb-alt info-icon"></i>
        </div>
        <div>
          <h3 className="about__title">Technical Problem Solving</h3>

          <span className="about__subtitle">
            Analyze, solve, optimize, debug, research, adapt
          </span>
        </div>
      </div>

      <div className="about__box">
        <div>
          <i className="uil uil-users-alt info-icon"></i>
        </div>
        <div>
          <h3 className="about__title">Collaboration and Communication</h3>

          <span className="about__subtitle">
            Teamwork, planning, updates, feedback
          </span>
        </div>
      </div>
    </div>
  );
};
