function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <div>
          <p className="project-card__category">{project.category}</p>
          <h3>{project.title}</h3>
        </div>
      </div>

      <p className="project-card__description">{project.description}</p>

      <ul className="project-card__list">
        {project.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <div className="project-card__actions">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          {project.githubLabel}
        </a>
      </div>
    </article>
  );
}

export default ProjectCard;