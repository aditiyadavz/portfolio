import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { projects } from "../data";

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      viewport={{ once: true }}
      className={`relative glass rounded-2xl p-7 card-hover group overflow-hidden ${
        project.featured ? "ring-1 ring-accent/30" : ""
      }`}
    >
      {/* Background glow */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
        style={{ background: project.color }}
      />

      {/* Top row */}
      <div className="flex items-start justify-between mb-5">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ background: `${project.color}20`, border: `1px solid ${project.color}30` }}
        >
          {project.icon}
        </div>
        <div className="flex items-center gap-3">
          {project.featured && (
            <span
              className="font-mono text-xs px-3 py-1 rounded-full"
              style={{
                background: `${project.color}20`,
                color: project.color,
                border: `1px solid ${project.color}30`,
              }}
            >
              {project.status}
            </span>
          )}
        </div>
      </div>

      {/* Title & Description */}
      <h3 className="font-display font-bold text-xl text-text mb-3 group-hover:text-gradient transition-all">
        {project.title}
      </h3>
      <p className="font-body text-sm text-dim leading-relaxed mb-5">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="font-mono text-xs px-2.5 py-1 rounded-md"
            style={{
              background: "#1e1e3f",
              color: "#8888aa",
              border: "1px solid #2a2a4a",
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-body text-sm text-dim hover:text-accent transition-colors"
        >
          <FiGithub size={16} /> GitHub
        </a>
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-body text-sm text-dim hover:text-accent2 transition-colors"
          >
            <FiExternalLink size={16} /> Live Demo
          </a>
        )}
        {!project.live && (
          <span className="font-mono text-xs text-muted">
            // live coming soon
          </span>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="// projects"
          title="Things I've Built"
          sub="Real full-stack products, not just tutorials."
        />

        {/* Featured 3-col */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {featured.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* Other projects row */}
        {others.length > 0 && (
          <>
            <p className="font-mono text-xs text-muted text-center mb-6 tracking-widest">
              // other projects
            </p>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {others.map((p, i) => (
                <ProjectCard key={p.id} project={p} index={i} />
              ))}
            </div>
          </>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/aditiyadavz"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            <FiGithub /> View All on GitHub
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
