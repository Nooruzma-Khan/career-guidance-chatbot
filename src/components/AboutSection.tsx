import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Shield, BookOpen, Lightbulb } from "lucide-react";
import cyberAvatar from "@/assets/cyber-avatar.png";

const points = [
  { icon: Code, text: "Passionate about programming and software development" },
  { icon: Brain, text: "Exploring artificial intelligence and machine learning" },
  { icon: Shield, text: "Interested in cybersecurity and ethical hacking" },
  { icon: BookOpen, text: "Committed to continuous learning and growth" },
  { icon: Lightbulb, text: "Building innovative technology solutions" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-primary neon-glow-green">{"<"}</span> About Me{" "}
            <span className="text-primary neon-glow-green">{"/>"}</span>
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-2xl border-2 border-primary/30 neon-border-green bg-card/50 flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <Shield className="w-20 h-20 text-primary/40 mx-auto mb-3" />
                <p className="text-muted-foreground text-sm font-mono-code">NK</p>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="text-foreground/80 leading-relaxed mb-8">
              I'm <span className="text-primary font-semibold">Nooruzma Khan</span>, a student developer
              with a deep passion for technology. My interests span across programming, artificial intelligence,
              and cybersecurity. I believe in the power of technology to solve real-world problems and I'm
              constantly exploring new tools and techniques to expand my knowledge.
            </p>

            <div className="space-y-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-8 h-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:neon-border-green transition-all">
                    <point.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground/70 text-sm">{point.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
