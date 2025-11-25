import { Card } from "@/components/ui/card";
import { User, Code2, Briefcase, Award, FileText, Mail, BookOpen, Brain, Sparkles, ArrowRight } from "lucide-react";

const DashboardNav = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const skills = [
    { name: "LLMs", level: 95 },
    { name: "PyTorch", level: 94 },
    { name: "NLP", level: 93 },
    { name: "RAG", level: 88 },
    { name: "Agentic AI", level: 87 },
  ];

  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span> Dashboard
          </h2>
          <p className="text-muted-foreground">Explore my work and expertise</p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[180px]">
          {/* Welcome Card - Large */}
          <Card
            onClick={() => scrollToSection("about")}
            className="md:col-span-2 md:row-span-2 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-10 blur-3xl rounded-full"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-primary">
                    <User className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">About Me</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                  Building Intelligent Solutions
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  AI Engineer & Data Scientist specializing in LLMs, NLP, and agentic AI systems. 
                  Passionate about transforming complex data into innovative, production-ready solutions.
                </p>
              </div>
              <div className="flex items-center gap-2 text-primary font-medium">
                <span>Learn more</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Card>

          {/* Skills Matrix */}
          <Card
            onClick={() => scrollToSection("skills")}
            className="md:col-span-2 md:row-span-2 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group p-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-gradient-primary">
                <Brain className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors">Top Skills</h3>
                <p className="text-xs text-muted-foreground">Technical Expertise</p>
              </div>
            </div>
            <div className="space-y-4">
              {skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Projects Counter */}
          <Card
            onClick={() => scrollToSection("projects")}
            className="md:col-span-1 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group p-6 flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-4">
              <FileText className="h-5 w-5 text-primary" />
              <span className="text-xs text-muted-foreground uppercase tracking-wider">Projects</span>
            </div>
            <div>
              <div className="text-4xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">3</div>
              <p className="text-sm text-muted-foreground">Featured Works</p>
            </div>
          </Card>

          {/* Agentic AI Highlight */}
          <Card
            onClick={() => scrollToSection("skills")}
            className="md:col-span-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-purple-500/50 hover:border-purple-400 transition-all hover:shadow-glow cursor-pointer group p-6 flex flex-col justify-center items-center text-center"
          >
            <Sparkles className="h-8 w-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-bold text-purple-300">Agentic AI</span>
            <span className="text-xs text-muted-foreground">Specialist</span>
          </Card>

          {/* Experience */}
          <Card
            onClick={() => scrollToSection("experience")}
            className="md:col-span-1 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group p-6 flex flex-col justify-between"
          >
            <Briefcase className="h-5 w-5 text-primary mb-auto" />
            <div>
              <p className="text-xs text-muted-foreground mb-1">Experience</p>
              <h4 className="text-sm font-bold group-hover:text-primary transition-colors">Beats by Dre</h4>
            </div>
          </Card>

          {/* Certifications */}
          <Card
            onClick={() => scrollToSection("certifications")}
            className="md:col-span-1 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group p-6 flex flex-col justify-between"
          >
            <Award className="h-5 w-5 text-primary mb-auto" />
            <div>
              <div className="text-2xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">2</div>
              <p className="text-xs text-muted-foreground">Certifications</p>
            </div>
          </Card>

          {/* Articles */}
          <Card
            onClick={() => scrollToSection("articles")}
            className="md:col-span-1 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group p-6 flex flex-col justify-between"
          >
            <BookOpen className="h-5 w-5 text-primary mb-auto" />
            <div>
              <div className="text-2xl font-bold mb-1 bg-gradient-primary bg-clip-text text-transparent">2</div>
              <p className="text-xs text-muted-foreground">Articles</p>
            </div>
          </Card>

          {/* Contact CTA */}
          <Card
            onClick={() => scrollToSection("contact")}
            className="md:col-span-2 bg-gradient-primary text-primary-foreground border-0 hover:shadow-glow transition-all cursor-pointer group p-6 flex items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-white/20">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">Let's Collaborate</h3>
                <p className="text-sm text-primary-foreground/80">Get in touch for opportunities</p>
              </div>
            </div>
            <ArrowRight className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DashboardNav;
