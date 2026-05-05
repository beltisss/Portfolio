function Hero({ profile }) {
  return (
    <section id="accueil" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="hero__kicker">Portfolio personnel</p>
          <h1>
            {profile.firstName} {profile.lastName}
          </h1>
          <p className="hero__role">{profile.role}</p>
          <p className="hero__headline">{profile.headline}</p>

          <div className="hero__actions">
            <a className="button button--primary" href="#projets">
              Voir mes projets
            </a>
            <a
              className="button button--ghost"
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
            >
              Voir mon CV
            </a>
          </div>
        </div>

        <aside className="hero-card">
          <span className="badge">Recherche d’alternance</span>
          <h2>Ce que je recherche</h2>
          <p>{profile.availability}</p>
          <ul>
            <li>Master orienté Génie logiciel ou MIAGE</li>
            <li>Environnement sérieux, formateur et concret</li>
            <li>Développement, qualité logicielle, projets applicatifs</li>
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
