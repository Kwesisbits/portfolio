import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in">
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-gradient-primary text-primary-foreground text-sm font-semibold">
              AI Engineer & Data Scientist
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Transforming Data Into{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Intelligent Solutions
            </span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Building intelligent scalable{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              AI and Data solutions
            </span>
          </p>
          <div className="flex gap-4">
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-primary text-primary-foreground hover:shadow-glow transition-all group"
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10"
            >
              Get In Touch
            </Button>
            <Button 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              asChild
            >
              <a href="/Resume_Nana_Amponsah.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4 pt-4">
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
        <div className="relative animate-fade-in-delay">
          <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-card border border-border/50 hover:scale-105 transition-transform duration-500">
            <img
              src={profilePhoto}
              alt="AI Engineer Portfolio"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
