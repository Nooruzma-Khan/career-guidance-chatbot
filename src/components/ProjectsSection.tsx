import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "Cyber Threat Analyzer",
    description: "A tool to analyze and detect potential cybersecurity threats using pattern recognition algorithms.",
    tech: ["Python", "SQL", "Security"],
    github: "#",
    demo: "#",
  },
  {
    title: "AI Chatbot Assistant",
    description: "An intelligent chatbot built with natural language processing to assist with student queries.",
    tech: ["Java", "AI", "NLP"],
    github: "#",
    demo: "#",
  },
  {
    title: "Smart Attendance System",
    description: "An automated attendance tracking system using facial recognition and database management.",
    tech: ["Python", "C++", "SQL"],
    github: "#",
    demo: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-primary neon-glow-green">~/</span>Projects
          </h2>
          <div className="w-20 h-0.5 bg-primary/50 mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card/60 border border-border rounded-xl overflow-hidden group hover:-translate-y-2 hover:neon-border-green transition-all duration-300"
            >
              {/* Preview area */}
              <div className="h-40 bg-muted/30 flex items-center justify-center border-b border-border">
                <Folder className="w-12 h-12 text-primary/30 group-hover:text-primary/60 transition-colors" />
              </div>

              <div className="p-5">
                <h3 className="font-heading text-sm font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs font-mono-code bg-primary/10 text-primary rounded border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </a>
                  <a href={project.demo} className="text-muted-foreground hover:text-secondary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
