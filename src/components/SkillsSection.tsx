import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Terminal, Cpu, Braces, Wrench } from "lucide-react";

const skills = [
  { name: "Java", icon: Code2, level: 80, color: "green" as const },
  { name: "Python", icon: Terminal, level: 75, color: "blue" as const },
  { name: "SQL", icon: Database, level: 70, color: "purple" as const },
  { name: "C++", icon: Braces, level: 72, color: "green" as const },
  { name: "C", icon: Cpu, level: 68, color: "blue" as const },
  { name: "Dev Tools", icon: Wrench, level: 65, color: "purple" as const },
];

const colorMap = {
  green: "neon-border-green",
  blue: "neon-border-blue",
  purple: "neon-border-purple",
};

const barColorMap = {
  green: "bg-primary",
  blue: "bg-secondary",
  purple: "bg-accent",
};

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative cyber-grid-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-secondary neon-glow-blue">{"{"}</span> Skills{" "}
            <span className="text-secondary neon-glow-blue">{"}"}</span>
          </h2>
          <div className="w-20 h-0.5 bg-secondary/50 mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className={`bg-card/60 border rounded-xl p-6 hover:scale-105 transition-all duration-300 cursor-default ${colorMap[skill.color]}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <skill.icon className="w-6 h-6 text-foreground/80" />
                <span className="font-heading text-sm font-semibold tracking-wide">{skill.name}</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.3 + i * 0.1 }}
                  className={`h-full rounded-full ${barColorMap[skill.color]}`}
                />
              </div>
              <p className="text-right mt-1 text-xs text-muted-foreground font-mono-code">{skill.level}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
