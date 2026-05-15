import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { codingStats, personalInfo } from "../data";

export default function Coding() {
  return (
    <SectionWrapper id="coding" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          eyebrow="// dsa & coding"
          title="Problem Solving"
          sub="Consistently grinding algorithms and data structures."
        />

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {codingStats.map((stat, i) => (
            <motion.a
              key={stat.platform}
              href={
                stat.platform === "LeetCode"
                  ? personalInfo.leetcode
                  : stat.platform === "GeeksForGeeks"
                  ? personalInfo.gfg
                  : personalInfo.github
              }
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 group cursor-pointer block"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <p
                    className="font-display font-bold text-lg"
                    style={{ color: stat.color }}
                  >
                    {stat.platform}
                  </p>
                  <p className="font-mono text-xs text-muted">{stat.rank}</p>
                </div>
              </div>
              <p className="font-display font-bold text-3xl text-text mb-1">
                {stat.problems}
              </p>
              <p className="font-body text-sm text-dim">Problems Solved</p>
              <div
                className="w-full h-px mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
              />
            </motion.a>
          ))}
        </div>

        {/* Contribution-style grid (decorative) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-6"
        >
          <p className="font-mono text-xs text-accent mb-4 tracking-widest">
            // activity heatmap
          </p>
          <div className="flex gap-1 flex-wrap">
            {Array.from({ length: 365 }).map((_, i) => {
              const intensity = Math.random();
              const color =
                intensity > 0.85
                  ? "#6c63ff"
                  : intensity > 0.65
                  ? "#6c63ff99"
                  : intensity > 0.4
                  ? "#6c63ff44"
                  : "#1e1e3f";
              return (
                <div
                  key={i}
                  className="w-3 h-3 rounded-sm transition-transform hover:scale-125"
                  style={{ background: color }}
                  title={`Day ${i + 1}`}
                />
              );
            })}
          </div>
          <p className="font-mono text-xs text-muted mt-3">
            Consistent daily practice on LeetCode & GFG
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
