import { projectsData } from "./Details";
import { WorkItems } from "./WorkItems";
export const Work = () => {
  return (
    <div className="work__container container grid">
      {projectsData.map((item) => {
        return <WorkItems item={item} key={item.id} />;
      })}
    </div>
  );
};
