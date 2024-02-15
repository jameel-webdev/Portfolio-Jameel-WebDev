export const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="project-image" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <p className="work__description">{item.description}</p>
      <p className="work__techs">
        <strong>Tech Used: </strong>React, Nodejs, Expressjs, Mongoose,
        {item.techUsed.map((e) => e)}
      </p>
      <div className="work__links">
        <a href={item.live} className="work__button" target="_blank">
          See Live
          <i className="uil uil-external-link-alt work__button-icon"></i>
        </a>

        <a href={item.github} className="work__button" target="_blank">
          Github <i className="uil uil-github-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};
