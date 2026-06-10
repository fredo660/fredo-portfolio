import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Accueil",      href: "#hero" },
  { name: "À propos",     href: "#about" },
  { name: "Services",     href: "#services" },
  { name: "Compétences",  href: "#skills" },
  { name: "Expériences",  href: "#experience" },
  { name: "Projets",      href: "#projects" },
  { name: "Contact",      href: "#contact" },
];

export default function Navbar({ toggleDarkMode, darkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-zinc-200 dark:border-white/10 px-4 sm:px-6 py-3 transition-colors duration-300">

      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Fredo
        </h1>

        {/* MENU DESKTOP */}
        <ul className="hidden lg:flex items-center gap-5 text-sm text-zinc-600 dark:text-gray-300">
          {navLinks.map((link, i) => (
            <li key={i}>
              <a
                href={link.href}
                className="hover:text-blue-500 dark:hover:text-blue-400 transition duration-200 hover:scale-105 inline-block"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-2">

          {/* DARK MODE TOGGLE */}
          <button
            onClick={toggleDarkMode}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs hover:scale-105 transition-all duration-200 shadow-sm"
            aria-label="Changer le thème"
          >
            {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            <span className="hidden sm:inline">{darkMode ? "Light" : "Dark"}</span>
          </button>

          {/* BURGER MOBILE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 transition"
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="lg:hidden mt-3 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 shadow-xl">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-zinc-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-zinc-800 hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-150"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 opacity-60" />
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}