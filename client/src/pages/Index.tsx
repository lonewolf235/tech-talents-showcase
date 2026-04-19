import Hero from "@/components/Hero";
import AIShowcase from "@/components/AIShowcase";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Timeline from "@/components/Timeline";
import Recognition from "@/components/Recognition";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <AIShowcase />
      <Projects />
      <TechStack />
      <Timeline />
      <Recognition />
      <Contact />
    </div>
  );
};

export default Index;
