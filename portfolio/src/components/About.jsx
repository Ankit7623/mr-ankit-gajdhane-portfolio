import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Code2,
  GitBranch,
  Layout,
  FileCode2,
  Paintbrush,
  User,
  Sparkles,
  Monitor,
  Cpu,
  Bot,
  Users,
  Zap,
  Terminal,
  Award,
  FileText,
  Eye,
  ExternalLink,
  X,
  BadgeCheck,
  Download,
  ArrowRight,
} from "lucide-react";
import promptWarsCert from "../assets/promptwars-hackathon-certificate.png";
import buildFastCert from "../assets/buildfastwithai-hackathon-certificate.png";
import certImg from "../assets/qskill-internship-certificate.jpg";
import recLetterImg from "../assets/qskill-recommendation-letter.jpg";

/* ── animation presets ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardPop = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

/* ── data ── */
const skills = [
  { name: "React.js",                  Icon: Code2,       color: "marigold"      },
  { name: "Frontend Development",     Icon: Monitor,     color: "iceSilver"     },
  { name: "JavaScript",                Icon: FileCode2,   color: "yellow"        },
  { name: "Python",                    Icon: Terminal,    color: "emerald"       },
  { name: "C (Programming Language)",  Icon: Cpu,         color: "deepAubergine" },
  { name: "Tailwind CSS",              Icon: Paintbrush,  color: "cyan"          },
  { name: "HTML / CSS",                Icon: Layout,      color: "orange"        },
  { name: "Git / GitHub",              Icon: GitBranch,   color: "purple"        },
  { name: "Prompt Engineering",        Icon: Sparkles,    color: "marigold"      },
  { name: "AI Tools",                  Icon: Bot,         color: "iceSilver"     },
  { name: "Team Leadership",           Icon: Users,       color: "deepAubergine" },
  { name: "Quick Learner",             Icon: Zap,         color: "amber"         },
];

const colorMap = {
  iceSilver:     { bg: "bg-ice-silver-300/10",      border: "border-ice-silver-300/30",      text: "text-ice-silver-200",      shadow: "hover:shadow-ice-silver-400/10" },
  deepAubergine: { bg: "bg-deep-aubergine-500/20",  border: "border-deep-aubergine-400/30",  text: "text-deep-aubergine-300",  shadow: "hover:shadow-deep-aubergine-500/20" },
  marigold:      { bg: "bg-marigold-500/15",        border: "border-marigold-400/30",        text: "text-marigold-400",        shadow: "hover:shadow-marigold-500/20" },
  cyan:          { bg: "bg-cyan-400/10",            border: "border-cyan-400/20",            text: "text-cyan-400",            shadow: "hover:shadow-cyan-500/10"   },
  yellow:        { bg: "bg-yellow-400/10",          border: "border-yellow-400/20",          text: "text-yellow-400",          shadow: "hover:shadow-yellow-500/10" },
  blue:          { bg: "bg-blue-400/10",            border: "border-blue-400/20",            text: "text-blue-400",            shadow: "hover:shadow-blue-500/10"   },
  orange:        { bg: "bg-orange-400/10",          border: "border-orange-400/20",          text: "text-orange-400",          shadow: "hover:shadow-orange-500/10" },
  purple:        { bg: "bg-purple-400/10",          border: "border-purple-400/20",          text: "text-purple-400",          shadow: "hover:shadow-purple-500/10" },
  emerald:       { bg: "bg-emerald-400/10",         border: "border-emerald-400/20",         text: "text-emerald-400",         shadow: "hover:shadow-emerald-500/10" },
  indigo:        { bg: "bg-indigo-400/10",          border: "border-indigo-400/20",          text: "text-indigo-400",          shadow: "hover:shadow-indigo-500/10" },
  violet:        { bg: "bg-violet-400/10",          border: "border-violet-400/20",          text: "text-violet-400",          shadow: "hover:shadow-violet-500/10" },
  teal:          { bg: "bg-teal-400/10",            border: "border-teal-400/20",            text: "text-teal-400",            shadow: "hover:shadow-teal-500/10"   },
  rose:          { bg: "bg-rose-400/10",            border: "border-rose-400/20",            text: "text-rose-400",            shadow: "hover:shadow-rose-500/10"   },
  amber:         { bg: "bg-amber-400/10",           border: "border-amber-400/20",           text: "text-amber-400",           shadow: "hover:shadow-amber-500/10"  },
  sky:           { bg: "bg-sky-400/10",             border: "border-sky-400/20",             text: "text-sky-400",             shadow: "hover:shadow-sky-500/10"    },
};

const certificates = [
  {
    title: "PromptWars Virtual – Build with AI",
    type: "Hackathon Award",
    issuer: "Google for Developers & Hack2Skill",
    id: "2026H2S04PWVCHL1-A00793",
    date: "04 August 2026",
    role: "Verified GenAI Solution Submission",
    image: promptWarsCert,
    Icon: Sparkles,
  },
  {
    title: "Build Fast with AI (BFWAI / HACK 26)",
    type: "Hackathon Participation",
    issuer: "Build Fast with AI",
    id: "BFWAI-HACK26",
    date: "10 October 2026",
    role: "Project Submission Track",
    image: buildFastCert,
    Icon: Cpu,
  },
  {
    title: "Certificate of Completion",
    type: "Internship Certificate",
    issuer: "QSkill & SR INDIA",
    id: "qsfnwd2026071125",
    date: "10th August 2026",
    role: "Front-End Development Intern",
    image: certImg,
    Icon: Award,
  },
  {
    title: "Letter of Recommendation",
    type: "Recommendation Letter",
    issuer: "Co-Founder, SR INDIA",
    id: "qsfnwd2026071125",
    date: "10th August 2026",
    role: "Front-End Development Intern",
    image: recLetterImg,
    Icon: FileText,
  },
];

export default function About() {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  return (
    <section
      id="about"
      className="relative bg-[#0c0513] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* subtle background accent: Deep Aubergine & Marigold */}
      <span className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-deep-aubergine-600/20 blur-3xl pointer-events-none" />
      <span className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full bg-marigold-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* ─── Section heading ─── */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-block px-4 py-1.5 rounded-full text-xs font-medium tracking-wide
                       text-marigold-300 bg-marigold-500/10 border border-marigold-500/25 mb-4"
          >
            Get to know me
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            About{" "}
            <span className="bg-gradient-to-r from-marigold-400 via-ice-silver-200 to-deep-aubergine-300 bg-clip-text text-transparent">
              & Experience
            </span>
          </motion.h2>
        </motion.div>

        {/* ─── About + Experience grid ─── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* About card */}
          <motion.div
            variants={fadeUp(0)}
            className="group rounded-2xl border border-deep-aubergine-800/80 bg-[#13071d]/70
                       backdrop-blur p-6 sm:p-8 hover:border-marigold-500/30 transition-colors duration-300 space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="p-2 rounded-lg bg-marigold-400/10 text-marigold-400">
                <User size={20} />
              </span>
              <h3 className="text-lg font-semibold text-white">About Me</h3>
            </div>

            <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-marigold-300 bg-marigold-500/10 border border-marigold-500/20">
              Hey visitor! ✨
            </div>

            <p className="text-ice-silver-200 leading-relaxed text-sm sm:text-base">
              👋 Hi, I'm <span className="text-white font-medium">Ankit Gajdhane</span>, an aspiring Frontend Developer passionate about building responsive, user-friendly, and modern web applications.
            </p>

            <p className="text-ice-silver-400 leading-relaxed text-sm">
              💻 I work with <span className="text-ice-silver-100 font-medium">HTML</span>, <span className="text-ice-silver-100 font-medium">CSS</span>, and <span className="text-marigold-400 font-medium">JavaScript</span>, <span className="text-marigold-400 font-medium">React.JS</span> to build dynamic and interactive user interfaces. I also enjoy exploring <span className="text-deep-aubergine-300 font-medium">Prompt Engineering</span> and using <span className="text-ice-silver-200 font-medium">AI tools</span> to improve productivity and solve real-world problems.
            </p>

            <p className="text-ice-silver-400 leading-relaxed text-sm">
              🚀 I believe in learning by building. Every project helps me strengthen my problem-solving skills, write cleaner code, and improve my understanding of frontend development.
            </p>

            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-ice-silver-300 flex items-center gap-2 mb-2.5">
                <span>🛠️</span> Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  "HTML5",
                  "CSS3",
                  "JavaScript (ES6+)",
                  "React.js",
                  "Responsive Web Design",
                  "Git & GitHub",
                  "Prompt Engineering",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-deep-aubergine-900/60 text-ice-silver-200 border border-deep-aubergine-700/60"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-marigold-400"></span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-ice-silver-400 leading-relaxed text-sm pt-1">
              🌱 I'm currently looking for <span className="text-white font-medium">Frontend Developer Internship</span> opportunities where I can learn from experienced developers, contribute to real projects, and grow as a software developer.
            </p>

            <p className="text-ice-silver-400 leading-relaxed text-sm border-t border-deep-aubergine-800/80 pt-3">
              📫 Feel free to <a href="#contact" className="text-marigold-400 hover:underline">connect with me</a> to discuss frontend development, web technologies, React, or AI. I'm always excited to learn, collaborate, and build something meaningful together!
            </p>
          </motion.div>

          {/* Experience card */}
          <motion.div
            id="experience"
            variants={fadeUp(0.15)}
            className="group rounded-2xl border border-deep-aubergine-800/80 bg-[#13071d]/70
                       backdrop-blur p-6 sm:p-8 hover:border-marigold-500/30 transition-colors duration-300 space-y-6"
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <span className="p-2 rounded-lg bg-deep-aubergine-500/20 text-deep-aubergine-300">
                  <Briefcase size={20} />
                </span>
                <h3 className="text-lg font-semibold text-white">Experience</h3>
              </div>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium text-marigold-300 bg-marigold-500/10 border border-marigold-500/20">
                <BadgeCheck size={14} /> Verified
              </span>
            </div>

            {/* timeline */}
            <div className="relative pl-6 border-l border-deep-aubergine-800 space-y-6">
              <TimelineItem
                Icon={GraduationCap}
                title="Frontend Developer Intern"
                place="Qskill"
                period="6th July 2026 – 6th August 2026 (31 Days)"
                description="Successfully completed the Virtual Internship Program in Front-End Development at Qskill. Developed responsive, modern web interfaces with React.js and Tailwind CSS. Recognized by SR INDIA leadership for high productivity, excellent analytical skills, and rapid adaptability to emerging technologies."
                color="marigold"
              />

              <TimelineItem
                Icon={Sparkles}
                title="Hackathon Innovator & GenAI Solution Submitter"
                place="Google for Developers (PromptWars) & Build Fast with AI"
                period="August 2026 – October 2026"
                description="Awarded Certificate of Appreciation in PromptWars Virtual by Google for Developers / Hack2Skill for verified Generative AI solution submission. Participated in project submission track at Build Fast with AI Hackathon."
                color="deepAubergine"
              />
            </div>

            {/* Certificates & Verification block */}
            <div className="pt-4 border-t border-deep-aubergine-800/80">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-xs uppercase tracking-wider font-semibold text-ice-silver-300 flex items-center gap-2">
                  <Award size={15} className="text-marigold-400" />
                  Credentials & Certificates
                </h4>
                <span className="text-[11px] text-ice-silver-500">Click to preview</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certificates.map((cert) => (
                  <button
                    key={cert.title}
                    type="button"
                    onClick={() => setSelectedCertificate(cert)}
                    className="group/cert text-left relative overflow-hidden rounded-xl border border-deep-aubergine-800/80 bg-[#0e0517]/80 p-3 hover:border-marigold-500/40 hover:bg-[#150720] transition-all duration-300 flex flex-col gap-2.5 focus:outline-none focus:ring-2 focus:ring-marigold-400/40 cursor-pointer"
                  >
                    {/* Thumbnail preview */}
                    <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-slate-900 border border-deep-aubergine-800/80">
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top transition-transform duration-300 group-hover/cert:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#0e0517]/70 opacity-0 group-hover/cert:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1.5 text-xs font-semibold text-white backdrop-blur-[2px]">
                        <Eye size={16} className="text-marigold-400" /> View Document
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-col gap-1 w-full">
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-semibold text-ice-silver-200 group-hover/cert:text-marigold-400 transition-colors line-clamp-1">
                          {cert.title}
                        </span>
                        <ExternalLink size={13} className="text-ice-silver-500 group-hover/cert:text-marigold-400 transition-colors shrink-0" />
                      </div>
                      <span className="text-[11px] text-ice-silver-400 line-clamp-1">{cert.issuer}</span>
                      <div className="flex items-center justify-between text-[10px] text-ice-silver-500 font-mono mt-0.5">
                        <span className="truncate max-w-[120px]">ID: {cert.id}</span>
                        <span className="shrink-0">{cert.date}</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-deep-aubergine-800/80 flex items-center justify-between">
                <span className="text-xs text-ice-silver-400">4 verified credentials earned</span>
                <a
                  href="#certificates"
                  className="inline-flex items-center gap-1.5 text-xs text-marigold-400 hover:text-marigold-300 font-medium transition-colors"
                >
                  View full Hackathons section <ArrowRight size={13} />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* ─── Skills heading ─── */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h3
            variants={fadeUp(0)}
            className="text-2xl font-bold text-white"
          >
            Skills &{" "}
            <span className="bg-gradient-to-r from-marigold-400 via-ice-silver-200 to-deep-aubergine-300 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h3>
          <motion.p variants={fadeUp(0.1)} className="text-ice-silver-400 mt-2 text-sm">
            Technologies, tools, and professional strengths I bring to every project
          </motion.p>
        </motion.div>

        {/* ─── Skills grid ─── */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {skills.map(({ name, Icon, color }) => (
            <SkillCard key={name} name={name} Icon={Icon} color={color} />
          ))}
        </motion.div>
      </div>

      {/* ─── Lightbox Modal for Certificate / Letter Preview ─── */}
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl max-h-[92vh] flex flex-col rounded-2xl border border-deep-aubergine-700 bg-[#12061c] shadow-2xl overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-deep-aubergine-800 bg-[#160822]">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-marigold-400/10 text-marigold-400 shrink-0">
                    <selectedCertificate.Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                      {selectedCertificate.title}
                    </h3>
                    <p className="text-xs text-ice-silver-400 truncate">
                      {selectedCertificate.issuer} • <span className="font-mono">SID: {selectedCertificate.id}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={selectedCertificate.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-deep-aubergine-700 text-ice-silver-300 hover:text-marigold-300 hover:bg-deep-aubergine-900 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={17} />
                  </a>
                  <button
                    onClick={() => setSelectedCertificate(null)}
                    className="p-2 rounded-lg border border-deep-aubergine-700 text-ice-silver-300 hover:text-white hover:bg-deep-aubergine-900 transition-colors cursor-pointer"
                    title="Close"
                  >
                    <X size={17} />
                  </button>
                </div>
              </div>

              {/* Document Image */}
              <div className="p-3 sm:p-6 overflow-y-auto flex items-center justify-center bg-[#09030e]/80 max-h-[68vh]">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="max-h-[64vh] w-auto max-w-full rounded-lg shadow-xl border border-deep-aubergine-800 object-contain"
                />
              </div>

              {/* Footer */}
              <div className="px-5 py-3 border-t border-deep-aubergine-800 bg-[#160822] flex items-center justify-between text-xs text-ice-silver-400">
                <span>Issued on {selectedCertificate.date}</span>
                <a
                  href={selectedCertificate.image}
                  download={selectedCertificate.title.replace(/\s+/g, "_")}
                  className="inline-flex items-center gap-1.5 text-marigold-400 hover:text-marigold-300 font-medium"
                >
                  <Download size={14} /> Download File
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* ── helper components ── */

function TimelineItem({ Icon, title, place, period, description, color }) {
  const c = colorMap[color] || colorMap.cyan;
  return (
    <div className="relative">
      {/* dot on the timeline */}
      <span
        className={`absolute -left-[13px] top-1 w-[10px] h-[10px] rounded-full
                    ${c.bg} border-2 ${c.border}`}
      />
      <div className="flex items-center gap-2 mb-1">
        <Icon size={16} className={c.text} />
        <h4 className="text-sm font-semibold text-white">{title}</h4>
      </div>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs mb-2">
        <span className={`font-medium ${c.text}`}>{place}</span>
        {period && (
          <>
            <span className="text-slate-600">•</span>
            <span className="text-slate-400">{period}</span>
          </>
        )}
      </div>
      <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function SkillCard({ name, Icon, color }) {
  const c = colorMap[color] || colorMap.cyan;
  return (
    <motion.div
      variants={cardPop}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className={`flex flex-col items-center justify-center text-center gap-3 p-5 rounded-xl border min-h-[115px]
                  ${c.border} ${c.bg} backdrop-blur
                  hover:shadow-lg ${c.shadow}
                  transition-shadow duration-300 cursor-default`}
    >
      <Icon size={28} className={c.text} />
      <span className="text-sm font-medium text-slate-200 leading-snug">{name}</span>
    </motion.div>
  );
}
