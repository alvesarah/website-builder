import ProjectsItem from "./projects-item";

export default function ProjectsList() {
  return(
    <ul className="grid grid-cols-2 gap-8">
      <ProjectsItem />
    </ul>
  );
}