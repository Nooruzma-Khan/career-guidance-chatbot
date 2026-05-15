import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Folder, Sparkles } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  demo?: string;
  comingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Career Guidance Chatbot",
    description:
      "An AI-powered career assistant built with React and TypeScript. Users can ask career-related questions and get intelligent guidance. Deployed live on Vercel.",
    tech: ["React", "TypeScript", "AI"],
    demo: "https://nooruzmakhan.vercel.app",
  },
  {
    title: "More Coming Soon",
    description: "Currently building new AI and Python projects. Check back soon!",
    tech: ["AI", "Python"],
    comingSoon: true,
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

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              className="bg-card/60 border border-border rounded-xl overflow-hidden group hover:-translate-y-2 hover:neon-border-green transition-all duration-300"
            >
              <div className="h-40 bg-muted/30 flex items-center justify-center border-b border-border">
                {project.comingSoon ? (
                  <Sparkles className="w-12 h-12 text-primary/30 group-hover:text-primary/60 transition-colors" />
                ) : (
                  <Folder className="w-12 h-12 text-primary/30 group-hover:text-primary/60 transition-colors" />
                )}
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

                {project.demo && (
                  <div className="flex gap-3">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-secondary hover:text-primary transition-colors text-xs font-mono-code"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
