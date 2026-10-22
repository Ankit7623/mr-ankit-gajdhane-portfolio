import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  FileText,
  Eye,
  ExternalLink,
  Download,
  X,
  BadgeCheck,
  Sparkles,
  Cpu,
} from "lucide-react";

import promptWarsCert from "../assets/promptwars-hackathon-certificate.png";
import buildFastCert from "../assets/buildfastwithai-hackathon-certificate.png";
import qskillCert from "../assets/qskill-internship-certificate.jpg";
import qskillRecLetter from "../assets/qskill-recommendation-letter.jpg";

const certificatesData = [
  {
    id: "promptwars-2026",
    title: "PromptWars Virtual – Build with AI",
    award: "Certificate of Appreciation",
    category: "Hackathons",
    issuer: "Google for Developers & Hack2Skill",
    date: "04 August 2026",
    credentialId: "2026H2S04PWVCHL1-A00793",
    description:
      "Recognized for valuable contribution and successful submission of a verified Generative AI solution for Challenge 1 during PromptWars Virtual.",
    tags: ["Generative AI", "Google for Developers", "Prompt Engineering", "Hack2Skill"],
    image: promptWarsCert,
    accent: "marigold",
    Icon: Sparkles,
  },
  {
    id: "buildfastwithai-2026",
    title: "Build Fast with AI (BFWAI / HACK 26)",
    award: "Certificate of Participation",
    category: "Hackathons",
    issuer: "Build Fast with AI",
    date: "10 October 2026",
    institution: "Sahyadri Valley College of Engineering & Technology",
    description:
      "Successfully participated in the Project Submission hackathon track organized by Build Fast with AI, showcasing innovative AI-driven implementations.",
    tags: ["Build Fast with AI", "AI Hackathon", "Project Submission"],
    image: buildFastCert,
    accent: "deepAubergine",
    Icon: Cpu,
  },
  {
    id: "qskill-internship-cert",
    title: "Frontend Developer Virtual Internship",
    award: "Certificate of Completion",
    category: "Internship",
    issuer: "QSkill & SR INDIA",
    date: "10 August 2026",
    credentialId: "qsfnwd2026071125",
    description:
      "Completed 31-day Virtual Internship Program in Front-End Development (6th July – 6th August 2026), building modern reactive web apps.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Frontend"],
    image: qskillCert,
    accent: "iceSilver",
    Icon: Award,
  },
  {
    id: "qskill-recommendation-letter",
    title: "Letter of Recommendation",
    award: "Official Recommendation",
    category: "Internship",
    issuer: "Co-Founder, SR INDIA",
    date: "10 August 2026",
    credentialId: "qsfnwd2026071125",
    description:
      "Commended for high productivity, proactive assistance, strong collaboration, and quick mastery of emerging technologies.",
    tags: ["Recommendation", "SR INDIA", "Leadership", "Teamwork"],
    image: qskillRecLetter,
    accent: "marigold",
    Icon: FileText,
  },
];

const accentMap = {
  marigold: {
    badge: "bg-marigold-500/10 text-marigold-300 border-marigold-500/25",
    glow: "group-hover:shadow-marigold-500/15",
    text: "text-marigold-400",
  },
  deepAubergine: {
    badge: "bg-deep-aubergine-500/20 text-deep-aubergine-300 border-deep-aubergine-400/30",
    glow: "group-hover:shadow-deep-aubergine-500/20",
    text: "text-deep-aubergine-300",
  },
  iceSilver: {
    badge: "bg-ice-silver-300/10 text-ice-silver-200 border-ice-silver-300/25",
    glow: "group-hover:shadow-ice-silver-400/15",
    text: "text-ice-silver-200",
  },
  cyan: {
    badge: "bg-cyan-400/10 text-cyan-300 border-cyan-400/20",
    glow: "group-hover:shadow-cyan-500/10",
    text: "text-cyan-400",
  },
  blue: {
    badge: "bg-blue-400/10 text-blue-300 border-blue-400/20",
    glow: "group-hover:shadow-blue-500/10",
    text: "text-blue-400",
  },
  amber: {
    badge: "bg-amber-400/10 text-amber-300 border-amber-400/20",
    glow: "group-hover:shadow-amber-500/10",
    text: "text-amber-400",
  },
  purple: {
    badge: "bg-purple-400/10 text-purple-300 border-purple-400/20",
    glow: "group-hover:shadow-purple-500/10",
    text: "text-purple-400",
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function Certificates() {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [activeModalCert, setActiveModalCert] = useState(null);

  const filterOptions = ["All", "Hackathons", "Internship"];

  const filteredCertificates =
    selectedFilter === "All"
      ? certificatesData
      : certificatesData.filter((item) => item.category === selectedFilter);

  return (
    <section
      id="certificates"
      className="relative bg-[#0c0513] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background glow accents: Deep Aubergine & Marigold */}
      <span className="absolute top-1/3 -right-20 w-[450px] h-[450px] rounded-full bg-deep-aubergine-600/20 blur-3xl pointer-events-none" />
      <span className="absolute -bottom-20 -left-20 w-[450px] h-[450px] rounded-full bg-marigold-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeUp(0)}
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide
                       text-marigold-300 bg-marigold-500/10 border border-marigold-500/25 mb-4"
          >
            <BadgeCheck size={14} /> Verified Achievements
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Hackathons &{" "}
            <span className="bg-gradient-to-r from-marigold-400 via-ice-silver-200 to-deep-aubergine-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            className="text-ice-silver-400 mt-3 max-w-xl mx-auto text-sm leading-relaxed"
          >
            Official credentials earned through technical hackathons, Generative AI challenges, and industry internship programs.
          </motion.p>

          {/* Filter Tabs */}
          <motion.div
            variants={fadeUp(0.3)}
            className="flex items-center justify-center gap-2 mt-8"
          >
            {filterOptions.map((filter) => {
              const isActive = selectedFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-marigold-500 to-marigold-400 text-deep-aubergine-950 font-bold shadow-md shadow-marigold-500/20"
                      : "bg-[#13071d]/80 text-ice-silver-400 border border-deep-aubergine-800 hover:text-white hover:border-marigold-500/40"
                  }`}
                >
                  {filter}{" "}
                  <span className="text-[11px] opacity-75">
                    ({filter === "All"
                      ? certificatesData.length
                      : certificatesData.filter((c) => c.category === filter).length})
                  </span>
                </button>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Certificate Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert) => {
              const acc = accentMap[cert.accent] || accentMap.marigold;
              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -6 }}
                  className={`group flex flex-col justify-between rounded-2xl border border-deep-aubergine-800/80
                             bg-[#13071d]/70 backdrop-blur p-6 hover:border-marigold-500/40
                             hover:shadow-xl ${acc.glow} transition-all duration-300`}
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-center justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${acc.badge}`}>
                        <cert.Icon size={14} />
                        {cert.award}
                      </span>
                      <span className="text-xs text-ice-silver-500 font-mono">
                        {cert.date}
                      </span>
                    </div>

                    {/* Preview Thumbnail */}
                    <div
                      onClick={() => setActiveModalCert(cert)}
                      className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-slate-950 border border-deep-aubergine-800/80 mb-4 cursor-pointer"
                    >
                      <img
                        src={cert.image}
                        alt={cert.title}
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-[#0c0513]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-xs font-semibold text-white backdrop-blur-[2px]">
                        <Eye size={16} className="text-marigold-400" />
                        Click to preview full document
                      </div>
                    </div>

                    {/* Title and details */}
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-marigold-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-ice-silver-300 font-medium mb-2">
                      Issued by: {cert.issuer}
                    </p>
                    <p className="text-ice-silver-400 text-xs sm:text-sm leading-relaxed mb-4">
                      {cert.description}
                    </p>

                    {cert.credentialId && (
                      <p className="text-[11px] text-ice-silver-500 font-mono mb-4">
                        Credential ID: <span className="text-ice-silver-300">{cert.credentialId}</span>
                      </p>
                    )}
                  </div>

                  {/* Bottom tags & actions */}
                  <div className="pt-4 border-t border-deep-aubergine-800/80 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {cert.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded text-[11px] font-medium bg-deep-aubergine-900/60 text-ice-silver-300 border border-deep-aubergine-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 ml-auto">
                      <button
                        onClick={() => setActiveModalCert(cert)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold
                                   bg-marigold-500/10 text-marigold-300 border border-marigold-500/25 hover:bg-marigold-400 hover:text-deep-aubergine-950
                                   transition-colors duration-200 cursor-pointer"
                      >
                        <Eye size={13} /> View
                      </button>
                      <a
                        href={cert.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg border border-deep-aubergine-700 text-ice-silver-400 hover:text-white hover:bg-deep-aubergine-900 transition-colors"
                        title="Open in new tab"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeModalCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveModalCert(null)}
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
              {/* Modal Header */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-deep-aubergine-800 bg-[#160822]">
                <div className="flex items-center gap-3 min-w-0">
                  <span className="p-2 rounded-lg bg-marigold-400/10 text-marigold-400 shrink-0">
                    <activeModalCert.Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                      {activeModalCert.title}
                    </h3>
                    <p className="text-xs text-ice-silver-400 truncate">
                      {activeModalCert.issuer} • {activeModalCert.award}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <a
                    href={activeModalCert.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-deep-aubergine-700 text-ice-silver-300 hover:text-marigold-300 hover:bg-deep-aubergine-900 transition-colors"
                    title="Open in new tab"
                  >
                    <ExternalLink size={17} />
                  </a>
                  <button
                    onClick={() => setActiveModalCert(null)}
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
                  src={activeModalCert.image}
                  alt={activeModalCert.title}
                  className="max-h-[64vh] w-auto max-w-full rounded-lg shadow-xl border border-deep-aubergine-800 object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="px-5 py-3 border-t border-deep-aubergine-800 bg-[#160822] flex items-center justify-between text-xs text-ice-silver-400">
                <div>
                  <span>Issued on {activeModalCert.date}</span>
                  {activeModalCert.credentialId && (
                    <span className="hidden sm:inline font-mono ml-2 text-ice-silver-500">
                      (ID: {activeModalCert.credentialId})
                    </span>
                  )}
                </div>
                <a
                  href={activeModalCert.image}
                  download={activeModalCert.title.replace(/\s+/g, "_")}
                  className="inline-flex items-center gap-1.5 text-marigold-400 hover:text-marigold-300 font-medium"
                >
                  <Download size={14} /> Download Certificate
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}