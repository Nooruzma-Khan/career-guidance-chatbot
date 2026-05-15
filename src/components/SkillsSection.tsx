import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Terminal,
  Braces,
  Cpu,
  Boxes,
  Layers,
  GitBranch,
  Wrench,
  Atom,
  FileCode,
  Brain,
  Sparkles,
} from "lucide-react";

const coreSkills = [
  { name: "Python", icon: Terminal, color: "green" as const },
  { name: "Java", icon: Code2, color: "blue" as const },
  { name: "C", icon: Cpu, color: "purple" as const },
  { name: "C++", icon: Braces, color: "green" as const },
  { name: "Data Structures", icon: Boxes, color: "blue" as const },
  { name: "OOP Concepts", icon: Layers, color: "purple" as const },
  { name: "Git & GitHub", icon: GitBranch, color: "green" as const },
  { name: "VS Code", icon: Wrench, color: "blue" as const },
];

const learningSkills = [
  { name: "React", icon: Atom, color: "blue" as const },
  { name: "TypeScript", icon: FileCode, color: "purple" as const },
  { name: "Machine Learning", icon: Brain, color: "green" as const },
  { name: "AI Development", icon: Sparkles, color: "blue" as const },
];

const colorMap = {
  green: "neon-border-green",
  blue: "neon-border-blue",
  purple: "neon-border-purple",
};

type Skill = { name: string; icon: typeof Code2; color: "green" | "blue" | "purple" };

const SkillGrid = ({ skills, isInView }: { skills: Skill[]; isInView: boolean }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
    {skills.map((skill, i) => (
      <motion.div
        key={skill.name}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.4, delay: 0.05 * i }}
        className={`bg-card/60 border rounded-xl p-5 flex flex-col items-center justify-center gap-3 hover:scale-105 transition-all duration-300 cursor-default ${colorMap[skill.color]}`}
      >
        <skill.icon className="w-7 h-7 text-foreground/80" />
        <span className="font-heading text-xs sm:text-sm font-semibold tracking-wide text-center">
          {skill.name}
        </span>
      </motion.div>
    ))}
  </div>
);

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
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-secondary neon-glow-blue">{"{"}</span> Skills{" "}
            <span className="text-secondary neon-glow-blue">{"}"}</span>
          </h2>
          <div className="w-20 h-0.5 bg-secondary/50 mx-auto mt-4" />
        </motion.div>

        <SkillGrid skills={coreSkills} isInView={isInView} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-16 mb-8"
        >
          <h3 className="text-xl sm:text-2xl font-bold">
            <span className="text-primary neon-glow-green">~/</span>Currently Learning
          </h3>
          <div className="w-16 h-0.5 bg-primary/50 mx-auto mt-3" />
        </motion.div>

        <SkillGrid skills={learningSkills} isInView={isInView} />
      </div>
    </section>
  );
};

export default SkillsSection;
