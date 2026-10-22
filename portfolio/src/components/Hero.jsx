import { motion } from "framer-motion";
import { Github, Linkedin, ArrowRight } from "lucide-react";
import profileImg from "../assets/profile.jpg";

/* ── animation helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay } },
});

const floatY = {
  animate: {
    y: [0, -14, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const blobDrift = (dx, dy, dur) => ({
  animate: {
    x: [0, dx, 0],
    y: [0, dy, 0],
    transition: { duration: dur, repeat: Infinity, ease: "easeInOut" },
  },
});

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden
                 bg-[#0c0513] pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      {/* ── Floating background blobs: Ice Silver, Deep Aubergine, Marigold ── */}
      <Blob className="w-80 h-80 bg-deep-aubergine-600/30 top-10 -left-20"  {...blobDrift(40, 30, 8)}  />
      <Blob className="w-96 h-96 bg-marigold-500/15 bottom-10 right-0" {...blobDrift(-30, 40, 10)} />
      <Blob className="w-64 h-64 bg-ice-silver-400/15 top-1/3 right-1/4" {...blobDrift(20, -25, 12)} />
      <Blob className="w-56 h-56 bg-deep-aubergine-700/25 bottom-1/4 left-1/3" {...blobDrift(-20, 20, 9)}  />

      {/* ── Content grid ── */}
      <div className="relative z-10 max-w-7xl mx-auto w-full
                      grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* ════════ LEFT — text ════════ */}
        <motion.div
          className="flex flex-col gap-6 text-center lg:text-left"
          initial="hidden"
          animate="visible"
        >
          {/* badge */}
          <motion.span
            variants={fadeUp(0)}
            className="inline-block self-center lg:self-start px-4 py-1.5 rounded-full
                       text-xs font-medium tracking-wide text-marigold-300
                       bg-marigold-500/10 border border-marigold-500/25 shadow-sm shadow-marigold-500/10"
          >
            Welcome to my Portfolio
          </motion.span>

          {/* heading */}
          <motion.h1
            variants={fadeUp(0.15)}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-marigold-400 via-ice-silver-100 to-deep-aubergine-300
                             bg-clip-text text-transparent">
              Ankit Gajdhane
            </span>
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeUp(0.3)}
            className="text-base sm:text-lg text-ice-silver-300 max-w-lg mx-auto lg:mx-0"
          >
            React.js Developer with hands‑on internship experience from{" "}
            <span className="text-marigold-300 font-semibold">Qskill</span>. I build
            modern, responsive web applications that deliver great user
            experiences.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={fadeUp(0.45)}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-2"
          >
            {/* View Projects button */}
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         text-sm font-semibold text-deep-aubergine-950 bg-gradient-to-r from-marigold-500 via-marigold-400 to-marigold-500
                         hover:from-marigold-400 hover:to-marigold-300 shadow-[0_0_25px_rgba(245,158,11,0.35)] transition-all duration-300"
            >
              View Projects
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>

            {/* Social icons */}
            <SocialIcon
              href="https://github.com/Ankit7623"
              label="GitHub"
              Icon={Github}
            />
            <SocialIcon
              href="https://www.linkedin.com/in/ankit-gajdhane-569021360/"
              label="LinkedIn"
              Icon={Linkedin}
            />
          </motion.div>
        </motion.div>

        {/* ════════ RIGHT — profile photo ════════ */}
        <motion.div
          className="flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <motion.div {...floatY}>
            {/* outer glow ring */}
            <div className="relative rounded-full p-[3px]
                            bg-gradient-to-tr from-marigold-400 via-ice-silver-200 to-deep-aubergine-500
                            shadow-[0_0_55px_rgba(245,158,11,0.25),0_0_90px_rgba(153,75,192,0.3)]">
              {/* inner dark ring so gradient acts as a "border" */}
              <div className="rounded-full bg-[#0e0517] p-1">
                <img
                  src={profileImg}
                  alt="Ankit Gajdhane"
                  className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80
                             rounded-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── tiny helper components ── */

function SocialIcon({ href, label, Icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-2.5 rounded-lg border border-deep-aubergine-800 text-ice-silver-300
                 hover:text-marigold-300 hover:border-marigold-500/50 hover:bg-deep-aubergine-900/60
                 transition-colors duration-300"
    >
      <Icon size={20} />
    </a>
  );
}

function Blob({ className = "", animate }) {
  return (
    <motion.span
      animate={animate.animate}
      className={`absolute rounded-full blur-3xl pointer-events-none ${className}`}
    />
  );
}
