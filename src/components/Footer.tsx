import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              Kwesi's Portfolio
            </h3>
            <p className="text-muted-foreground">Building intelligent scalable AI and Data solutions</p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/Kwesisbits"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:shadow-glow"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/nana-kwesi-amponsah/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:shadow-glow"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:nanaamponsah391@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-gradient-primary hover:text-primary-foreground transition-all hover:shadow-glow"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Kwesi's Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
