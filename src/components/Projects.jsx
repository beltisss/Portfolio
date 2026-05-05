import SectionTitle from './SectionTitle';
import ProjectCard from './ProjectCard';

function Projects({ projects }) {
  return (
    <section id="projets" className="section section--soft">
      <div className="container">
        <SectionTitle
          title="Mes projets"
          text="Les projets sont le meilleur moyen de montrer ma manière de travailler, ma progression et les sujets qui me motivent vraiment."
        />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
