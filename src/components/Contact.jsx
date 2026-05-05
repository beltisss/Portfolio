import SectionTitle from './SectionTitle';

function Contact({ profile }) {
  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionTitle
          eyebrow="Contact"
          title="Me contacter"
          text="Si mon profil vous intéresse pour une alternance, vous pouvez me contacter directement par mail ou par téléphone."
        />

        <div className="contact-card">
          <div>
            <p className="contact-label">Email</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <p className="contact-label">Téléphone</p>
            <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
          </div>
          <div>
            <p className="contact-label">Localisation</p>
            <p>{profile.city}</p>
          </div>
          <div className="contact-actions">
            <a className="button button--primary" href={`mailto:${profile.email}`}>
              Envoyer un mail
            </a>
            <a
              className="button button--ghost"
              href={profile.cvPath}
              target="_blank"
              rel="noreferrer"
            >
              Ouvrir le CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
