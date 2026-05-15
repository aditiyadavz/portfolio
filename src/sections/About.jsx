import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { personalInfo, stats } from "../data";

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="// about me"
          title="Who I Am"
          sub="A passionate developer building real products from scratch."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-8">
              <p className="font-mono text-xs text-accent mb-6 tracking-widest">
                &gt; cat about.txt
              </p>
              <div className="space-y-4 text-dim leading-relaxed">
                <p>
                  I'm a <span className="text-text font-medium">3rd year BTech CSE student</span> with a
                  deep passion for full stack development. I love turning ideas into
                  real products — from pixel-perfect React UIs to scalable backends.
                </p>
                <p>
                  I've built projects like an{" "}
                  <span className="text-accent">AI Interview Platform</span>, a{" "}
                  <span className="text-accent2">Job Board</span>, and an{" "}
                  <span className="text-accent3">Alumni Network Portal</span> — each one
                  pushing me to learn something new.
                </p>
                <p>
                  Currently grinding <span className="text-text font-medium">DSA on LeetCode</span>,
                  exploring DevOps & AI tools, and actively preparing for{" "}
                  <span className="text-text font-medium">2025–26 internships and placements</span>.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-3">
                  {["React", "Node.js", "MongoDB", "DSA", "Full Stack", "DevOps"].map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-xs px-3 py-1 rounded-full glass text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Stats grid */}
          <div ref={ref} className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-2xl p-6 text-center card-hover group"
              >
                <div className="font-display font-bold text-4xl text-gradient mb-2">
                  {inView ? (
                    <>
                      <CountUp
                        end={stat.value}
                        duration={2}
                        delay={i * 0.2}
                      />
                      {stat.suffix}
                    </>
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
                <p className="font-body text-sm text-dim">{stat.label}</p>
                <div
                  className="w-8 h-0.5 mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16"
                  style={{
                    background: ["#6c63ff", "#00d4ff", "#ff6b9d", "#ffd93d"][i],
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
