import { ArrowUp, Github, Linkedin, Mail, Shield } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-mono-code">
              © 2026 Nooruzma Khan. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:knooruzma@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>

          <a
            href="#home"
            className="w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center text-primary hover:bg-primary/10 transition-all neon-btn-outline"
          >
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
