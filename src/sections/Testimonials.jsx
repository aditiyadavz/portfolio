import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="// testimonials"
          title="What People Say"
          sub="Feedback from mentors, seniors, and collaborators."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 relative group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <FiStar key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-sm text-dim leading-relaxed mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm"
                  style={{ background: `${t.color}25`, color: t.color, border: `1px solid ${t.color}30` }}
                >
                  {t.avatar}
                </div>
                <div>
                  <p className="font-body font-medium text-sm text-text">{t.name}</p>
                  <p className="font-mono text-xs text-muted">{t.role}</p>
                </div>
              </div>

              {/* Quote mark */}
              <div
                className="absolute top-4 right-4 font-display text-5xl leading-none opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ color: t.color }}
              >
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
