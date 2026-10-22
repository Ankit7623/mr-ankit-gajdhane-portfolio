import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0e0517]/80 backdrop-blur-lg border-b border-deep-aubergine-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* ── Brand / Logo ── */}
          <div className="flex items-center gap-3">
            <a
              href="#home"
              className="text-xl font-bold tracking-tight text-white select-none
                         hover:text-marigold-400 transition-colors duration-300"
            >
              Ankit Gajdhane<span className="text-marigold-400">.</span>
            </a>

            {/* Signature Color Palette Badge */}
            <div
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded-full
                         bg-deep-aubergine-900/70 border border-deep-aubergine-700/60
                         text-[11px] text-ice-silver-300 select-none"
              title="Theme Palette: Ice Silver, Deep Aubergine, Marigold"
            >
              <span className="w-2 h-2 rounded-full bg-ice-silver shadow-[0_0_6px_rgba(208,219,231,0.6)]" title="Ice Silver" />
              <span className="w-2 h-2 rounded-full bg-deep-aubergine-500 shadow-[0_0_6px_rgba(153,75,192,0.6)]" title="Deep Aubergine" />
              <span className="w-2 h-2 rounded-full bg-marigold-500 shadow-[0_0_6px_rgba(245,158,11,0.6)]" title="Marigold" />
              <span className="ml-1 text-[10px] font-mono tracking-wide text-ice-silver-400">Palette</span>
            </div>
          </div>

          {/* ── Desktop links ── */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  className="relative px-3 py-2 text-sm font-medium text-ice-silver-300
                             hover:text-white transition-colors duration-300
                             after:absolute after:left-1/2 after:-translate-x-1/2
                             after:bottom-0 after:h-[2px] after:w-0
                             after:bg-gradient-to-r after:from-marigold-400 after:to-ice-silver-200
                             after:transition-all after:duration-300
                             hover:after:w-4/5"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Mobile hamburger button ── */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-md text-ice-silver-300 hover:text-white
                       hover:bg-deep-aubergine-900/60 transition-colors duration-200"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* ── Mobile menu (slide‑down) ── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out bg-[#0e0517]/95 border-b border-deep-aubergine-800/60 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-ice-silver-300
                           hover:text-marigold-300 hover:bg-deep-aubergine-900/60
                           transition-colors duration-200"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
