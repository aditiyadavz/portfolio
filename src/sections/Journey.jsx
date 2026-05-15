import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { timeline } from "../data";

export default function Journey() {
  return (
    <SectionWrapper id="journey" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          eyebrow="// journey"
          title="My Story So Far"
          sub="From writing first HTML to building full-stack AI apps."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="timeline-line hidden md:block" />

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                viewport={{ once: true }}
                className={`relative flex items-start gap-6 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Card */}
                <div
                  className={`w-full md:w-5/12 glass rounded-2xl p-6 card-hover group ${
                    i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <span
                        className="font-mono text-xs font-medium"
                        style={{ color: item.color }}
                      >
                        {item.year}
                      </span>
                      <h3 className="font-display font-bold text-base text-text">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <p className="font-body text-sm text-dim leading-relaxed">
                    {item.desc}
                  </p>
                  <div
                    className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
                  />
                </div>

                {/* Center dot */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full z-10 items-center justify-center"
                  style={{ background: item.color, boxShadow: `0 0 12px ${item.color}` }}
                >
                  <div className="w-2 h-2 rounded-full bg-bg" />
                </div>

                {/* Mobile line */}
                <div
                  className="md:hidden flex-shrink-0 w-4 h-4 rounded-full mt-1"
                  style={{ background: item.color, boxShadow: `0 0 10px ${item.color}` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
