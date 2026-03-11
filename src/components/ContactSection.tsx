import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:knooruzma@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
  };

  return (
    <section id="contact" className="py-24 relative cyber-grid-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-primary neon-glow-green">$</span> Contact
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <div>
              <label className="text-xs text-muted-foreground font-mono-code mb-1 block">name:</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-card/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:neon-border-green transition-all"
                placeholder="Enter your name"
                required
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-mono-code mb-1 block">email:</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-card/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:neon-border-green transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-mono-code mb-1 block">message:</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                className="w-full bg-card/60 border border-border rounded-lg px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 focus:neon-border-green transition-all resize-none"
                placeholder="Your message..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading text-sm font-semibold rounded-lg neon-btn w-full justify-center"
            >
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              Feel free to reach out for collaborations, project ideas, or just a friendly conversation
              about technology, AI, and cybersecurity.
            </p>

            <div className="space-y-4">
              <a href="mailto:knooruzma@gmail.com" className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:neon-border-green transition-all">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <span className="text-sm font-mono-code">knooruzma@gmail.com</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-foreground/70 hover:text-foreground transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center group-hover:neon-border-green transition-all">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-sm font-mono-code">GitHub</span>
              </a>

              <a href="#" className="flex items-center gap-3 text-foreground/70 hover:text-secondary transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center group-hover:neon-border-blue transition-all">
                  <Linkedin className="w-5 h-5 text-secondary" />
                </div>
                <span className="text-sm font-mono-code">LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
