import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-muted-foreground">
                © 2024 Prakash V.S. Tomar. Built with React, TypeScript, and Tailwind CSS.
              </p>
            </div>
            <div className="flex space-x-6">
              <a 
                href="#about" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                About
              </a>
              <a 
                href="#skills" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Skills
              </a>
              <a 
                href="#experience" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Projects
              </a>
              <a 
                href="#contact" 
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
