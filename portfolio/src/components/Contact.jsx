import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Github,
  Linkedin,
  Mail,
  MapPin,
  User,
  AtSign,
  MessageSquare,
} from "lucide-react";

/* ── animation helpers ── */
const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay } },
});

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up EmailJS / Formspree / your own backend
    console.log("Form data:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#0c0513] py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* background accents */}
      <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-deep-aubergine-600/20 blur-3xl pointer-events-none" />
      <span className="absolute bottom-0 right-10 w-[400px] h-[400px] rounded-full bg-marigold-500/10 blur-3xl pointer-events-none" />

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
            Let's connect
          </motion.span>

          <motion.h2
            variants={fadeUp(0.1)}
            className="text-3xl sm:text-4xl font-bold text-white"
          >
            Get In{" "}
            <span className="bg-gradient-to-r from-marigold-400 via-ice-silver-200 to-deep-aubergine-400 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp(0.2)}
            className="text-ice-silver-400 mt-3 max-w-md mx-auto text-sm"
          >
            Have a question or want to work together? Drop me a message and I'll
            get back to you as soon as possible.
          </motion.p>
        </motion.div>

        {/* ─── grid: form + info ─── */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {/* ════ Contact form (3 cols) ════ */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp(0)}
            className="lg:col-span-3 rounded-2xl border border-deep-aubergine-800/80 bg-[#13071d]/70
                       backdrop-blur p-6 sm:p-8 space-y-5"
          >
            {/* Name */}
            <FormField
              icon={<User size={16} />}
              label="Name"
              name="name"
              type="text"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
            />

            {/* Email */}
            <FormField
              icon={<AtSign size={16} />}
              label="Email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
            />

            {/* Message */}
            <div className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-medium text-ice-silver-300">
                <MessageSquare size={16} className="text-ice-silver-500" />
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Write your message…"
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg bg-deep-aubergine-950/60 border border-deep-aubergine-800
                           text-sm text-ice-silver-100 placeholder-ice-silver-500
                           px-4 py-3 outline-none
                           focus:border-marigold-400/60 focus:ring-1 focus:ring-marigold-400/30
                           transition-colors duration-200 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-lg
                         text-sm font-semibold text-deep-aubergine-950 bg-gradient-to-r from-marigold-500 to-marigold-400
                         hover:from-marigold-400 hover:to-marigold-300 shadow-[0_0_20px_rgba(245,158,11,0.35)]
                         transition-all duration-300 cursor-pointer"
            >
              Send Message
              <Send
                size={16}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </button>

            {/* success toast */}
            {submitted && (
              <p className="text-sm text-emerald-400 mt-2">
                ✓ Message sent successfully!
              </p>
            )}
          </motion.form>

          {/* ════ Info sidebar (2 cols) ════ */}
          <motion.div
            variants={fadeUp(0.15)}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* info cards */}
            <InfoCard
              Icon={Mail}
              title="Email"
              value="ankitgajdhane@gmail.com"
              href="mailto:ankitgajdhane@gmail.com"
              color="marigold"
            />
            <InfoCard
              Icon={MapPin}
              title="Location"
              value="Pune"
              color="deepAubergine"
            />

            {/* social links */}
            <div className="rounded-2xl border border-deep-aubergine-800/80 bg-[#13071d]/70
                            backdrop-blur p-6 mt-auto">
              <h4 className="text-sm font-semibold text-white mb-4">
                Find me on
              </h4>
              <div className="flex items-center gap-3">
                <SocialPill
                  href="https://github.com/Ankit7623"
                  Icon={Github}
                  label="GitHub"
                />
                <SocialPill
                  href="https://www.linkedin.com/in/ankit-gajdhane-569021360/"
                  Icon={Linkedin}
                  label="LinkedIn"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── small helpers ── */

function FormField({ icon, label, name, type, placeholder, value, onChange }) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-2 text-sm font-medium text-ice-silver-300">
        <span className="text-ice-silver-500">{icon}</span>
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg bg-deep-aubergine-950/60 border border-deep-aubergine-800
                   text-sm text-ice-silver-100 placeholder-ice-silver-500
                   px-4 py-3 outline-none
                   focus:border-marigold-400/60 focus:ring-1 focus:ring-marigold-400/30
                   transition-colors duration-200"
      />
    </div>
  );
}

function InfoCard({ Icon, title, value, href, color }) {
  const accent =
    color === "deepAubergine"
      ? "text-deep-aubergine-300 bg-deep-aubergine-500/20"
      : "text-marigold-400 bg-marigold-400/10";
  const Wrapper = href ? "a" : "div";
  const extra = href ? { href, target: "_blank", rel: "noopener noreferrer" } : {};

  return (
    <Wrapper
      {...extra}
      className="flex items-start gap-4 rounded-2xl border border-deep-aubergine-800/80 bg-[#13071d]/70
                 backdrop-blur p-5 hover:border-marigold-500/40 transition-colors duration-300"
    >
      <span className={`p-2.5 rounded-lg ${accent}`}>
        <Icon size={20} />
      </span>
      <div>
        <p className="text-xs text-ice-silver-400">{title}</p>
        <p className="text-sm font-medium text-white mt-0.5">{value}</p>
      </div>
    </Wrapper>
  );
}

function SocialPill({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 rounded-lg border border-deep-aubergine-800
                 text-sm text-ice-silver-300 hover:text-marigold-300 hover:border-marigold-500/40
                 hover:bg-deep-aubergine-900/60 transition-colors duration-300"
    >
      <Icon size={16} />
      {label}
    </a>
  );
}
