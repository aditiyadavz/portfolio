import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from "react-icons/fi";
import { personalInfo } from "../data";

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative z-10 border-t border-border py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <p className="font-display font-bold text-xl text-gradient">
          &lt;{personalInfo.name.split(" ")[0]} /&gt;
        </p>

        {/* Text */}
        <p className="font-mono text-xs text-muted text-center">
          Built with React + Vite + Tailwind + Framer Motion &nbsp;·&nbsp; {new Date().getFullYear()}
        </p>

        {/* Social + back to top */}
        <div className="flex items-center gap-5">
          {[
            { icon: FiGithub, href: personalInfo.github },
            { icon: FiLinkedin, href: personalInfo.linkedin },
            { icon: FiMail, href: `mailto:${personalInfo.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent transition-colors"
            >
              <Icon size={18} />
            </a>
          ))}

          <motion.button
            onClick={scrollTop}
            whileHover={{ y: -3 }}
            className="w-9 h-9 glass rounded-lg flex items-center justify-center text-accent border border-accent/20 hover:shadow-glow transition-all ml-2"
          >
            <FiArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
