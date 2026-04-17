
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projetos">
      <h2>Meus Projetos</h2>
      <div className="projects">
        {projects.map((proj, index) => (
          <ProjectCard key={index} projeto={proj} />
        ))}
      </div>
    </section>
  );
}
