import { Card } from "@/components/ui/card";
import { Award, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Certifications = () => {
  const certifications = [
    {
      title: "IBM AI Engineering Professional",
      issuer: "IBM via Coursera",
      link: "https://www.coursera.org/account/accomplishments/specialization/MHNU8KRDV5EE",
      description: "Comprehensive program covering machine learning, deep learning, and AI application development",
    },
    {
      title: "Agentic AI",
      issuer: "DeepLearning.AI",
      link: "https://learn.deeplearning.ai/certificates/a648f599-47fe-4ce5-b399-8fba2b27ac47?usp=sharing",
      description: "Advanced course on building autonomous AI agents and multi-agent systems",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications & <span className="bg-gradient-primary bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in AI and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certifications.map((cert, idx) => (
            <Card
              key={idx}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-full bg-gradient-primary flex-shrink-0">
                  <Award className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-primary">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{cert.description}</p>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-foreground hover:bg-primary/10 group/btn"
                asChild
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer">
                  View Certificate
                  <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
