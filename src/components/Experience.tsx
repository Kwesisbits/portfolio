import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Delivering data-driven insights and innovative solutions
          </p>
        </div>

        <Card className="p-8 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card max-w-4xl mx-auto">
          <div className="flex items-start gap-6">
            <div className="p-4 rounded-full bg-gradient-primary flex-shrink-0">
              <Briefcase className="h-8 w-8 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="text-2xl font-bold">Data Analytics Intern</h3>
                <span className="text-sm text-muted-foreground">June 2025 – September 2025</span>
              </div>
              <p className="text-lg text-primary mb-4">Beats by Dre (via Extern)</p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Conducted qualitative and quantitative research to uncover <strong>Gen Z consumer insights</strong>, 
                    identifying emerging behaviors, audio preferences, and trend patterns to support product strategy.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Performed <strong>market research and competitive analysis</strong>—including product feasibility studies, 
                    market trend tracking, and competitor benchmarking—using Python, the <strong>Gemini API</strong>, and 
                    sentiment-analysis libraries.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span>
                    Built a polished, insight-driven <strong>final analytics presentation deck</strong> using Gamma, 
                    incorporating <strong>statistical visualizations</strong> and narrative explanations generated with 
                    Claude AI's Artifact workspace.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
