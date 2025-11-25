import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import DashboardNav from "@/components/DashboardNav";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <DashboardNav />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Articles />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
