import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ExternalLink, Mail } from "lucide-react";

const terminalLines = [
  "> Initializing portfolio...",
  "> AI modules loading...",
  "> Cybersecurity protocols active...",
  "> Access Granted.",
];

const HeroSection = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);

  useEffect(() => {
    if (currentLine >= terminalLines.length) return;

    const line = terminalLines[currentLine];
    if (currentChar < line.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines((prev) => {
          const updated = [...prev];
          updated[currentLine] = line.substring(0, currentChar + 1);
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
        setDisplayedLines((prev) => [...prev, ""]);
      }, 400);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center cyber-grid-bg overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Terminal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 inline-block"
          >
            <div className="bg-card/80 border border-primary/30 rounded-lg p-4 text-left font-mono-code text-xs sm:text-sm max-w-md mx-auto neon-border-green">
              <div className="flex items-center gap-2 mb-3 border-b border-border pb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-destructive" />
                <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                <span className="text-muted-foreground text-xs ml-2">terminal</span>
              </div>
              {displayedLines.map((line, i) => (
                <div key={i} className={`${i === displayedLines.length - 1 && currentLine < terminalLines.length ? "" : ""} ${line.includes("Access Granted") ? "text-primary font-bold" : "text-foreground/80"}`}>
                  {line}
                  {i === displayedLines.length - 1 && currentLine < terminalLines.length && (
                    <span className="inline-block w-2 h-4 bg-primary ml-0.5 animate-pulse-glow" />
                  )}
                </div>
              ))}
              {currentLine >= terminalLines.length && (
                <span className="inline-block w-2 h-4 bg-primary animate-pulse-glow" />
              )}
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-primary neon-glow-green">Nooruzma Khan</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-xl text-secondary font-mono-code mb-4 neon-glow-blue"
          >
            Student Developer | Cybersecurity & AI Enthusiast
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            A passionate student interested in programming, artificial intelligence, and
            cybersecurity, eager to build innovative and intelligent technology solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-heading text-sm font-semibold rounded-lg neon-btn"
            >
              <ExternalLink className="w-4 h-4" /> View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-secondary/50 text-secondary font-heading text-sm font-semibold rounded-lg neon-btn-outline hover:bg-secondary/10"
            >
              <Mail className="w-4 h-4" /> Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown className="w-6 h-6 animate-float" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
