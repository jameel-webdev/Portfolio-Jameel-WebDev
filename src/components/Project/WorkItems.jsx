export const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="project-image" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="work__links">
        <a href="#" className="work__button">
          Description
          <i className="uil uil-sort-amount-down work__button-icon"></i>
        </a>
        <a href="#" className="work__button">
          Github <i className="uil uil-github-alt work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};
