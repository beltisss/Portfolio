import SectionTitle from './SectionTitle';

function Passions({ passions }) {
  return (
    <section className="section section--soft">
      <div className="container">
        <SectionTitle
          eyebrow="Ce qui me motive"
          title="Mes centres d’intérêt dans le développement"
          text="J’ai volontairement gardé cette partie sobre : elle complète les projets sans prendre toute la place."
        />

        <div className="passions-grid">
          {passions.map((passion) => (
            <article key={passion.title} className="card">
              <h3>{passion.title}</h3>
              <p>{passion.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Passions;
