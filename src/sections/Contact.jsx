import { useState } from "react";
import { motion } from "framer-motion";
import { FiSend, FiGithub, FiLinkedin, FiMail, FiMapPin } from "react-icons/fi";
import toast, { Toaster } from "react-hot-toast";
import SectionWrapper, { SectionHeader } from "../components/SectionWrapper";
import { personalInfo } from "../data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all required fields.");
      return;
    }
    setSending(true);
    // Replace with your EmailJS/Formspree integration
    await new Promise((r) => setTimeout(r, 1500));
    toast.success("Message sent! I'll get back to you soon 🚀");
    setForm({ name: "", email: "", subject: "", message: "" });
    setSending(false);
  };

  const inputClass =
    "w-full glass rounded-xl px-4 py-3 font-body text-sm text-text placeholder-muted outline-none focus:ring-1 focus:ring-accent/50 transition-all duration-300 bg-transparent";

  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <Toaster position="top-right" toastOptions={{ style: { background: "#111128", color: "#e2e2f0", border: "1px solid #1e1e3f" } }} />
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="// contact"
          title="Let's Connect"
          sub="Open to internships, collaborations, and freelance projects."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs text-accent mb-4 tracking-widest">
                // reach me at
              </p>
              <div className="space-y-4">
                {[
                  { icon: FiMail, label: personalInfo.email, href: `mailto:${personalInfo.email}` },
                  { icon: FiMapPin, label: personalInfo.location, href: null },
                  { icon: FiGithub, label: "github.com/aditiyadavz", href: personalInfo.github },
                  { icon: FiLinkedin, label: "linkedin.com/in/aditi-yadav04/", href: personalInfo.linkedin },
                ].map(({ icon: Icon, label, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-9 h-9 glass rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-accent" />
                    </div>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer" className="font-body text-sm text-dim hover:text-accent transition-colors">
                        {label}
                      </a>
                    ) : (
                      <span className="font-body text-sm text-dim">{label}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="font-mono text-xs text-muted mb-3">// availability</p>
              <div className="flex items-center gap-3">
                <span className="glow-dot animate-pulse" />
                <p className="font-body text-sm text-dim">
                  Available for <span className="text-accent">internships</span> &{" "}
                  <span className="text-accent2">placements</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name *"
                className={inputClass}
              />
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                placeholder="Your email *"
                className={inputClass}
              />
            </div>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className={inputClass}
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Your message... *"
              className={`${inputClass} resize-none`}
            />
            <motion.button
              type="submit"
              disabled={sending}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary w-full text-white flex items-center justify-center gap-3"
            >
              {sending ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <FiSend size={16} /> Send Message
                </>
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </SectionWrapper>
  );
}
