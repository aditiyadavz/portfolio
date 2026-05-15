import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { skillCategories } from "../data";

function SkillCard({ category, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-6 card-hover group"
      style={{ "--card-color": category.color }}
    >
      <div className="flex items-center gap-3 mb-6">
        <div
          className="w-2 h-8 rounded-full"
          style={{ background: category.color }}
        />
        <h3 className="font-display font-bold text-lg text-text">
          {category.title}
        </h3>
      </div>

      <div className="space-y-4">
        {category.skills.map((skill, i) => (
          <div key={skill.name}>
            <div className="flex justify-between mb-1.5">
              <span className="font-body text-sm text-dim">{skill.name}</span>
              <span
                className="font-mono text-xs"
                style={{ color: category.color }}
              >
                {skill.level}%
              </span>
            </div>
            <div className="h-1.5 bg-border rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, delay: i * 0.1 + 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${category.color}99, ${category.color})`,
                  boxShadow: `0 0 8px ${category.color}66`,
                }}
              />
            </div>
          </div>
        ))}
      </div>

      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at top left, ${category.color}08, transparent 60%)`,
        }}
      />
    </motion.div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="// skills"
          title="What I Work With"
          sub="Technologies I use to build end-to-end products."
        />
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillCategories.map((cat, i) => (
            <SkillCard key={cat.title} category={cat} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
