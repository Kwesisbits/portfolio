import { Card } from "@/components/ui/card";
import { User, Code2, Briefcase, Award, FileText, Mail, BookOpen } from "lucide-react";

const DashboardNav = () => {
  const sections = [
    {
      title: "About",
      icon: User,
      id: "about",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Skills",
      icon: Code2,
      id: "skills",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Projects",
      icon: FileText,
      id: "projects",
      gradient: "from-green-500 to-teal-600",
    },
    {
      title: "Experience",
      icon: Briefcase,
      id: "experience",
      gradient: "from-orange-500 to-red-600",
    },
    {
      title: "Certifications",
      icon: Award,
      id: "certifications",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Articles",
      icon: BookOpen,
      id: "articles",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Contact",
      icon: Mail,
      id: "contact",
      gradient: "from-yellow-500 to-orange-600",
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="py-16 px-6 bg-gradient-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            <span className="bg-gradient-primary bg-clip-text text-transparent">Portfolio</span> Dashboard
          </h2>
          <p className="text-muted-foreground">Click any section to navigate</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-7xl mx-auto">
          {sections.map((section, idx) => (
            <Card
              key={idx}
              onClick={() => scrollToSection(section.id)}
              className="p-6 bg-gradient-card border-border/50 hover:border-primary/50 transition-all hover:shadow-card cursor-pointer group flex flex-col items-center justify-center text-center space-y-3"
            >
              <div className={`p-4 rounded-full bg-gradient-to-r ${section.gradient} group-hover:scale-110 transition-transform`}>
                <section.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-sm font-semibold group-hover:text-primary transition-colors">
                {section.title}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DashboardNav;
