import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroImage from "/prakash pic.png";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 opacity-50"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 20%',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 hero-gradient opacity-90" />
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 hero-text-glow">
            Prakash V.S. Tomar
          </h1>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium text-white/90 mb-6">
            AI/ML Engineer | Generative AI Specialist
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming complex data into intelligent solutions with cutting-edge ML techniques, 
            specializing in LLMOps, Agentic Systems, and production-scale AI deployment.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              onClick={() => window.open('mailto:prakashvstomar@gmail.com', '_blank')}
              className="btn-hero text-lg px-10 py-4 w-full sm:w-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Hire Me
            </Button>
            
            <Button 
              onClick={() => scrollToSection('projects')}
              variant="outline"
              className="btn-outline-hero text-lg px-10 py-4 w-full sm:w-auto"
            >
              View Projects
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-8 mb-16">
            <a 
              href="https://linkedin.com/in/lonewolf235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Linkedin className="w-8 h-8" />
            </a>
            <a 
              href="https://github.com/lonewolf235" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Github className="w-8 h-8" />
            </a>
            <a 
              href="mailto:prakashvstomar@gmail.com"
              className="text-white/70 hover:text-white transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-8 h-8" />
            </a>
          </div>
          
          {/* Scroll Indicator */}
          <div 
            onClick={() => scrollToSection('about')}
            className="animate-bounce cursor-pointer"
          >
            <ChevronDown className="w-8 h-8 text-white/60 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;