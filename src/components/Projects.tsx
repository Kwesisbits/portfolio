import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "CNN for Account Security Image Classification",
      description:
        "Advanced convolutional neural network designed to classify and authenticate user account images, detecting fraudulent profiles and ensuring platform security through deep learning-based image analysis.",
      tech: ["PyTorch", "Computer Vision", "CNN", "Image Classification", "Security AI"],
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "AI Virtual Assistant",
      description:
        "Intelligent conversational agent powered by large language models, featuring multi-turn dialogue, context awareness, function calling capabilities, and seamless integration with external APIs for enhanced user interactions.",
      tech: ["GPT-4", "LangChain", "NLP", "RAG", "Agentic AI"],
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Voice/Sound Transcription AI",
      description:
        "High-accuracy speech-to-text system utilizing state-of-the-art transformer models for real-time audio transcription, supporting multiple languages and acoustic environments with advanced noise reduction.",
      tech: ["Whisper", "HuggingFace", "Audio Processing", "Transformers", "ASR"],
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Restaurant Recommender System",
      description:
        "Sophisticated recommendation engine leveraging collaborative filtering, content-based analysis, and deep learning embeddings to provide personalized restaurant suggestions based on user preferences and behavior patterns.",
      tech: ["TensorFlow", "Recommendation Systems", "NLP", "Data Science", "Embeddings"],
      gradient: "from-orange-500 to-red-600",
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

        <div className="grid md:grid-cols-2 gap-8">
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
                  >
                    <Github className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-primary text-primary-foreground hover:shadow-glow group/btn"
                  >
                    <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    Demo
                  </Button>
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
