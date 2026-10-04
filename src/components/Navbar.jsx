import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className="bg-brand-navy py-4 text-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-site flex-col items-center justify-between gap-3 px-4 sm:flex-row">
        <h1 className="text-2xl font-bold">Romar Alaman</h1>
        <ul className="flex gap-6">
          {LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="font-medium transition-colors duration-200 hover:text-brand-accent"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
