const links = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#apropos', label: 'À propos' },
  { href: '#projets', label: 'Projets' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' }
];

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <a href="#accueil" className="brand">
          Belkiss <span>Tiss</span>
        </a>

        <nav className="nav">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
