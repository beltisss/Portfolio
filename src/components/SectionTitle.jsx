function SectionTitle({ eyebrow, title, text }) {
  return (
    <div className="section-title">
      {eyebrow && <p className="section-title__eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {text && <p className="section-title__text">{text}</p>}
    </div>
  );
}

export default SectionTitle;
