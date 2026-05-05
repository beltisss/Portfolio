import SectionTitle from './SectionTitle';

function About({ profile }) {
  return (
    <section id="apropos" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Présentation"
          title="À propos de moi"
          text="Une présentation simple, claire et professionnelle, pensée pour aller à l’essentiel."
        />

        <div className="about-grid">
          <div className="card">
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="card stack-sm">
            <div>
              <h3>Compétences principales</h3>
              <div className="chips">
                {profile.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3>Expérience</h3>
              <p className="muted">
                <strong>{profile.experience.title}</strong>
                <br />
                {profile.experience.company} · {profile.experience.period}
              </p>
              <p>{profile.experience.details}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
