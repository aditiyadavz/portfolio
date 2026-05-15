import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personalInfo, roles } from "../data";

const typeSequence = roles.flatMap((r) => [r, 2000]);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
    >
      {/* Floating tech labels */}
      {["React", "Node.js", "MongoDB", "Next.js", "DSA"].map((tech, i) => (
        <motion.div
          key={tech}
          className="absolute hidden lg:flex items-center gap-2 glass px-3 py-1.5 rounded-full text-xs font-mono text-dim"
          style={{
            top: `${20 + i * 14}%`,
            left: i % 2 === 0 ? "5%" : "auto",
            right: i % 2 !== 0 ? "5%" : "auto",
          }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{ background: ["#6c63ff", "#00d4ff", "#ff6b9d", "#ffd93d", "#6c63ff"][i] }}
          />
          {tech}
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-8"
        >
          <span className="glow-dot animate-pulse" />
          <span className="font-mono text-xs text-dim">
            Open to internships & placements 2025–26
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
        >
          Hi, I'm{" "}
          <span className="text-gradient">{personalInfo.name}</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="font-display text-2xl md:text-3xl text-dim mb-6 h-10"
        >
          <TypeAnimation
            sequence={typeSequence}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-accent2"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-dim text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <a href="#projects" className="btn-primary text-white flex items-center gap-2">
            View Projects <HiArrowDown className="text-sm" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download
            className="btn-outline flex items-center gap-2"
          >
            <HiDownload /> Download Resume
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: FiGithub, href: personalInfo.github, label: "GitHub" },
            { icon: FiLinkedin, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: FiMail, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-10 h-10 glass rounded-full flex items-center justify-center text-dim hover:text-accent hover:border-accent/40 transition-all duration-300 hover:shadow-glow"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="font-mono text-xs text-muted tracking-widest">SCROLL</span>
        <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
