import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink } from "lucide-react";

const Articles = () => {
  const articles = [
    {
      title: "Neural Collaborative Filtering: Building Smarter Recommendation Engines",
      description: "Exploring how neural collaborative filtering revolutionizes recommendation systems by combining deep learning with collaborative filtering techniques.",
      link: "https://medium.com/@nanaamponsah391/neural-collaborative-filtering-building-smarter-recommendation-engines-abaae01019b0",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Model Context Protocol: The USB-C for AI Applications",
      description: "Understanding how the Model Context Protocol standardizes AI application integration, making it easier to build interoperable AI systems.",
      link: "https://medium.com/@nanaamponsah391/model-context-protocol-the-usb-c-for-ai-applications-ee306000c458",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section id="articles" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights and knowledge on AI, machine learning, and data science
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {articles.map((article, idx) => (
            <Card
              key={idx}
              className="group relative overflow-hidden bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card"
            >
              <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${article.gradient}`}></div>
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full bg-gradient-primary flex-shrink-0">
                    <BookOpen className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex-1">
                    {article.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed">{article.description}</p>
                <Button
                  size="sm"
                  className="bg-gradient-primary text-primary-foreground hover:shadow-glow group/btn"
                  asChild
                >
                  <a href={article.link} target="_blank" rel="noopener noreferrer">
                    Read on Medium
                    <ExternalLink className="h-4 w-4 ml-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
