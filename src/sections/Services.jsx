import { motion } from "framer-motion";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { services } from "../data";

export default function Services() {
  return (
    <SectionWrapper id="services" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="// services"
          title="What I Can Do For You"
          sub="Open to freelance projects, collabs, and part-time work."
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="glass rounded-2xl p-6 group relative overflow-hidden"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{
                  background: `${service.color}15`,
                  border: `1px solid ${service.color}25`,
                }}
              >
                {service.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-text mb-3">
                {service.title}
              </h3>
              <p className="font-body text-sm text-dim leading-relaxed">
                {service.desc}
              </p>

              {/* Corner accent */}
              <div
                className="absolute top-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-15 transition-opacity duration-500"
                style={{
                  background: `radial-gradient(circle, ${service.color}, transparent)`,
                }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-b-2xl"
                style={{ background: service.color }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary text-white inline-flex">
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
