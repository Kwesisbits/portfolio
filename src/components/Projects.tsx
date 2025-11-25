import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Multilingual Document RAG Processor",
      description:
        "An AI-powered document Q&A and translation system supporting 12+ languages, enabling seamless multilingual information retrieval and cross-language document understanding.",
      tech: ["RAG", "NLP", "HuggingFace", "Multilingual AI", "LangChain"],
      gradient: "from-cyan-500 to-blue-600",
      demoLink: "https://huggingface.co/spaces/KwesiAI/rag-multilingual-processor",
      githubLink: "https://github.com/Kwesisbits/RAG-Multilingual-Document-Processor",
    },
    {
      title: "AI Research Agent",
      description:
        "A FastAPI web app that plans research workflows, runs tool-using agents (arXiv, Wikipedia, DuckDuckGo), and stores task state/results in Postgres. Includes Docker setup for seamless deployment.",
      tech: ["Agentic AI", "FastAPI", "PostgreSQL", "Docker", "ML Deployment"],
      gradient: "from-purple-500 to-pink-600",
      demoLink: "https://huggingface.co/spaces/KwesiAI/AI_Research_Agent",
      githubLink: "https://github.com/Kwesisbits/AI-Research-Agent",
    },
    {
      title: "Neural Collaborative Filtering Recommender",
      description:
        "Advanced recommendation system leveraging neural collaborative filtering techniques with PyTorch, combining user-item interactions with deep learning for personalized predictions.",
      tech: ["PyTorch", "Recommendation Systems", "Deep Learning", "Neural Networks"],
      gradient: "from-green-500 to-teal-600",
      githubLink: "https://github.com/Kwesisbits/Neural-Collaborative-Filtering-NCF-Recommender-System",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world AI applications demonstrating innovation and technical excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${project.gradient}`}></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 rounded-full bg-muted text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-foreground hover:bg-primary/10 group/btn"
                    asChild
                  >
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </a>
                  </Button>
                  {project.demoLink && (
                    <Button
                      size="sm"
                      className="bg-gradient-primary text-primary-foreground hover:shadow-glow group/btn"
                      asChild
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
