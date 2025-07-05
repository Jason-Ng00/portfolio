import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Button } from './ui/button';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { projects, skills, contact } from '@/pages/portfolio';

const navLinks = [
  { label: 'Projects', href: '#projects', show: projects.length > 0 },
  { label: 'Skills', href: '#skills', show: skills.length > 0 },
  { label: 'Contact', href: '#contact', show: !!contact.email },
];

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const [showNav, setShowNav] = useState(false);

  return (
    <nav className="relative flex items-center">
      {/* Desktop nav */}
      <ul className="hidden md:flex items-center gap-8 text-base font-medium">
        {navLinks.filter(l => l.show).map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              className="relative text-foreground hover:text-primary transition-colors px-1"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          </li>
        ))}
      </ul>
      {/* Mobile menu button */}
      <button
        className="md:hidden ml-2 p-2 rounded-md text-foreground hover:bg-accent transition-colors"
        type="button"
        aria-label="Toggle navigation"
        onClick={() => setShowNav(v => !v)}
      >
        {showNav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>
      {/* Mobile nav */}
      {showNav && (
        <div className="absolute top-12 right-0 w-48 bg-background border border-border rounded-lg shadow-lg z-40 py-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4">
          {navLinks.filter(l => l.show).map(link => (
            <a
              key={link.href}
              href={link.href}
              className="block px-6 py-2 text-foreground hover:text-primary transition-colors"
              onClick={() => setShowNav(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
      {/* Theme toggle */}
      <Button
        variant="ghost"
        size="icon"
        className="ml-2"
        aria-label="Toggle theme"
        onClick={toggleTheme}
      >
        {theme === 'dark' ? <FaSun size={18} /> : <FaMoon size={18} />}
      </Button>
    </nav>
  );
};

export default Navbar;
