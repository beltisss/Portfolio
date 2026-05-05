import SectionTitle from './SectionTitle';

function Parcours({ profile }) {
  return (
    <section id="parcours" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Parcours"
          title="Formation"
          text="Un parcours progressif, avec une base généraliste solide et un intérêt de plus en plus marqué pour le développement logiciel."
        />

        <div className="timeline">
          {profile.education.map((item) => (
            <article key={`${item.title}-${item.period}`} className="timeline-card">
              <p className="timeline-card__period">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="timeline-card__school">{item.school}</p>
              <p>{item.details}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Parcours;
