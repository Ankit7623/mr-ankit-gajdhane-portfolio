import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

/* ── project data (edit freely) ── */
const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern, responsive personal portfolio showcasing my skills, experience, and projects with smooth animations and a dark glassmorphism theme.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    live: "#",
    github: "https://github.com/Ankit7623",
    accent: "marigold",
  },
  {
    title: "E‑Commerce Dashboard",
    description:
      "An interactive admin dashboard featuring product management, sales analytics charts, and a responsive sidebar layout for an online store.",
    tech: ["React", "Tailwind CSS", "JavaScript"],
    live: "#",
    github: "https://github.com/Ankit7623",
    accent: "deepAubergine",
  },
  {
    title: "Task Management App",
    description:
      "A full‑featured to‑do application with drag‑and‑drop reordering, priority labels, and local‑storage persistence for offline usage.",
    tech: ["React", "Tailwind CSS", "HTML/CSS"],
    live: "#",
    github: "https://github.com/Ankit7623",
    accent: "iceSilver",
  },
];

/* ── colour tokens: Ice Silver, Deep Aubergine, Marigold ── */
const colors = {
  marigold: {
    badge: "bg-marigold-500/10 text-marigold-300 border-marigold-500/25",
    glow: "group-hover:shadow-marigold-500/15",
    accent: "text-marigold-400",
  },
  deepAubergine: {
    badge: "bg-deep-aubergine-500/20 text-deep-aubergine-300 border-deep-aubergine-500/30",
    glow: "group-hover:shadow-deep-aubergine-500/20",
    accent: "text-deep-aubergine-300",
  },
  iceSilver: {
    badge: "bg-ice-silver-300/10 text-ice-silver-200 border-ice-silver-300/25",
    glow: "group-hover:shadow-ice-silver-400/15",
    accent: "text-ice-silver-200",
  },
  cyan: {
    badge: "bg-cyan-400/10 text-cyan-400 border-cyan-400/20",
    glow: "group-hover:shadow-cyan-500/8",
    accent: "text-cyan-400",
  },
  purple: {
    badge: "bg-purple-400/10 text-purple-400 border-purple-400/20",
    glow: "group-hover:shadow-purple-500/8",
    accent: "text-purple-400",
  },
  blue: {
    badge: "bg-blue-400/10 text-blue-400 border-blue-400/20",
    glow: "group-hover:shadow-blue-500/8",
    accent: "text-blue-400",
  },
};

/* ── animation variants ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

const stagger = { visible: { transition: { staggerChildren: 0.15 } } };

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

/* ── component ── */
export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-[#0c0513] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* background glow */}
      <span className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-deep-aubergine-600/20 blur-3xl pointer-events-none" />
      <span className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-marigold-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── heading ─── */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide
                       text-marigold-300 bg-marigold-500/10 border border-marigold-500/25 mb-4"
          >
            What I've built
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-marigold-400 via-ice-silver-200 to-deep-aubergine-400 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            className="text-ice-silver-400 mt-3 max-w-md mx-auto text-sm"
          >
            A selection of projects that reflect my skills and passion for frontend development.
          </motion.p>
        </motion.div>

        {/* ─── card grid ─── */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── ProjectCard ── */
function ProjectCard({ title, description, tech, live, github, accent }) {
  const c = colors[accent] || colors.marigold;

  return (
    <motion.div
      variants={cardVariant}
      whileHover={{ y: -8, transition: { duration: 0.25 } }}
      className={`group flex flex-col justify-between rounded-2xl border border-deep-aubergine-800/80
                  bg-[#13071d]/70 backdrop-blur p-6
                  hover:border-marigold-500/40 hover:shadow-xl ${c.glow}
                  transition-all duration-300`}
    >
      {/* top */}
      <div>
        {/* icon + links row */}
        <div className="flex items-center justify-between mb-4">
          <span className={`p-2.5 rounded-lg bg-deep-aubergine-900/80 ${c.accent}`}>
            <Folder size={22} />
          </span>

          <div className="flex items-center gap-3">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repo"
              className="text-ice-silver-400 hover:text-white transition-colors duration-200"
            >
              <Github size={18} />
            </a>
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-ice-silver-400 hover:text-white transition-colors duration-200"
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        {/* title */}
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-marigold-400 transition-colors duration-300">
          {title}
        </h3>

        {/* description */}
        <p className="text-ice-silver-400 text-sm leading-relaxed mb-5">{description}</p>
      </div>

      {/* tech tags */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className={`px-2.5 py-1 rounded-full text-[11px] font-medium border ${c.badge}`}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
