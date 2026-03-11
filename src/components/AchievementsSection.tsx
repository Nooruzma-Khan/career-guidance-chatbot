import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Trophy } from "lucide-react";

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24 relative cyber-grid-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-2">
            <span className="text-accent">⚡</span> Achievements
          </h2>
          <div className="w-20 h-0.5 bg-accent/50 mx-auto mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-card/60 border rounded-xl overflow-hidden neon-border-purple group hover:scale-[1.02] transition-all duration-300">
            {/* Certificate display */}
            <div className="h-48 bg-accent/5 flex items-center justify-center border-b border-border">
              <div className="text-center">
                <Trophy className="w-16 h-16 text-accent/40 mx-auto mb-2 group-hover:text-accent/70 transition-colors" />
                <p className="text-muted-foreground text-xs font-mono-code">SIH Certificate</p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="font-heading text-lg font-bold">Smart India Hackathon</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Participated in the prestigious Smart India Hackathon, gaining hands-on experience in
                solving real-world problems through technology. This experience enhanced my skills in
                teamwork, rapid prototyping, and innovative problem-solving under competitive conditions.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;
