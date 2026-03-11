import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Cpu, Zap, Network } from "lucide-react";

const interests = [
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Exploring algorithms that enable computers to learn from data and make intelligent predictions.",
  },
  {
    icon: Cpu,
    title: "AI Applications",
    description: "Building practical applications powered by artificial intelligence to automate and optimize tasks.",
  },
  {
    icon: Network,
    title: "Intelligent Systems",
    description: "Designing systems that can perceive, reason, and act autonomously in complex environments.",
  },
  {
    icon: Zap,
    title: "AI Problem Solving",
    description: "Leveraging AI-powered techniques to tackle challenging computational problems efficiently.",
  },
];

const AIInterestsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="ai-interests" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-secondary neon-glow-blue">AI</span> Interests
          </h2>
          <div className="w-20 h-0.5 bg-secondary/50 mx-auto mt-4" />
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {interests.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card/60 border border-border rounded-xl p-6 hover:neon-border-blue hover:scale-[1.03] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover:neon-border-blue transition-all">
                <item.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-heading text-sm font-bold mb-2 group-hover:text-secondary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIInterestsSection;
