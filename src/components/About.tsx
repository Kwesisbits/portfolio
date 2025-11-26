import { Card } from "@/components/ui/card";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate AI Engineer and Data Scientist committed to continuous learning and excellence. 
            Currently advancing my knowledge in cloud computing while building practical AI solutions that 
            deliver real value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-gradient-primary">
                <Briefcase className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Professional Experience</h3>
              <p className="text-muted-foreground">
                Building practical AI solutions through hands-on projects and internships, with a focus on 
                data analysis, machine learning, and multi-agent systems.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-gradient-primary">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Continuous Learning</h3>
              <p className="text-muted-foreground">
                Completed certifications in AI engineering and agentic AI, actively exploring emerging 
                technologies like RAG systems, LLMs, and cloud computing.
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="p-4 rounded-full bg-gradient-primary">
                <Award className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold">Innovation & Impact</h3>
              <p className="text-muted-foreground">
                Committed to creating AI solutions that not only demonstrate technical excellence but also
                deliver measurable business value and positive societal impact.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
