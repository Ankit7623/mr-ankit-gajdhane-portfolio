import { Github, Linkedin, Heart } from "lucide-react";

const socials = [
  { href: "https://github.com/Ankit7623",                               Icon: Github,   label: "GitHub"   },
  { href: "https://www.linkedin.com/in/ankit-gajdhane-569021360/",       Icon: Linkedin,  label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="border-t border-deep-aubergine-800/80 bg-[#0c0513] px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* left — copyright */}
        <p className="text-sm text-ice-silver-400 text-center sm:text-left">
          Designed &amp; Built with{" "}
          <Heart size={14} className="inline text-marigold-500 fill-marigold-500 align-[-2px]" />{" "}
          by{" "}
          <span className="text-white font-medium hover:text-marigold-400 transition-colors">
            Ankit Gajdhane
          </span>{" "}
          &copy; {new Date().getFullYear()}
        </p>

        {/* right — social icons & palette tag */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-deep-aubergine-900/40 border border-deep-aubergine-800 text-[11px] text-ice-silver-400 mr-2">
            <span className="w-2 h-2 rounded-full bg-ice-silver" title="Ice Silver" />
            <span className="w-2 h-2 rounded-full bg-deep-aubergine-500" title="Deep Aubergine" />
            <span className="w-2 h-2 rounded-full bg-marigold-500" title="Marigold" />
          </div>

          {socials.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-ice-silver-400 hover:text-marigold-300
                         hover:bg-deep-aubergine-900/60 transition-colors duration-200"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
