import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SectionWrapper({ id, children, className = "" }) {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`relative z-10 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({ eyebrow, title, sub }) {
  return (
    <div className="text-center mb-16">
      <p className="font-mono text-sm text-accent mb-3 tracking-widest uppercase">
        {eyebrow}
      </p>
      <h2 className="section-title text-gradient">{title}</h2>
      {sub && <p className="section-sub mt-4">{sub}</p>}
    </div>
  );
}
