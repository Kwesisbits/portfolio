import { Card } from "@/components/ui/card";
import { Brain, Code2, Database, Sparkles } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Large Language Models",
      icon: Brain,
      skills: [
        { name: "GPT (OpenAI)", level: 95 },
        { name: "LangChain", level: 90 },
        { name: "HuggingFace Transformers", level: 92 },
        { name: "RAG Systems", level: 88 },
        { name: "Prompt Engineering", level: 93 },
        { name: "Fine-tuning LLMs", level: 85 },
      ],
    },
    {
      title: "Agentic & Advanced AI",
      icon: Sparkles,
      skills: [
        { name: "Agentic AI", level: 87 },
        { name: "Multi-Agent Systems", level: 85 },
        { name: "AutoGen", level: 82 },
        { name: "LangGraph", level: 84 },
        { name: "Tool Calling & Function Use", level: 90 },
        { name: "AI Orchestration", level: 86 },
      ],
    },
    {
      title: "Deep Learning Frameworks",
      icon: Code2,
      skills: [
        { name: "PyTorch", level: 94 },
        { name: "TensorFlow", level: 91 },
        { name: "Keras", level: 89 },
        { name: "JAX", level: 78 },
        { name: "ONNX", level: 83 },
        { name: "Model Optimization", level: 87 },
      ],
    },
    {
      title: "NLP & Data Science",
      icon: Database,
      skills: [
        { name: "Natural Language Processing", level: 93 },
        { name: "Spacy & NLTK", level: 88 },
        { name: "Transformers Architecture", level: 91 },
        { name: "Text Classification", level: 90 },
        { name: "Named Entity Recognition", level: 87 },
        { name: "Sentiment Analysis", level: 89 },
      ],
    },
  ];

  const additionalSkills = [
    "Computer Vision (OpenCV, YOLO)",
    "MLOps (MLflow, Weights & Biases)",
    "Vector Databases (Pinecone, Weaviate)",
    "API Development (FastAPI, Flask)",
    "Cloud Platforms (AWS, GCP, Azure)",
    "Docker & Kubernetes",
    "SQL & NoSQL Databases",
    "Pandas, NumPy, Scikit-learn",
    "Model Deployment & Serving",
    "Distributed Training",
    "Transfer Learning",
    "Reinforcement Learning",
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive proficiency across the AI/ML technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-gradient-primary">
                  <category.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-primary transition-all duration-1000 group-hover:animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-8 bg-gradient-card border-border/50">
          <h3 className="text-2xl font-semibold mb-6 text-center">Additional Technologies & Tools</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {additionalSkills.map((skill, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-muted text-sm font-medium hover:bg-gradient-primary hover:text-primary-foreground transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
