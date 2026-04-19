import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0A0A0A]"
    >
      <div 
        className="absolute inset-0 z-0 opacity-25 mix-blend-luminosity bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: 'url("/prakash pic.png")' }}
      >
        {/* Soft fade overlay so text remains entirely readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/50 via-[#0A0A0A]/80 to-[#0A0A0A]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center flex flex-col items-center"
        >
          {/* Headshot Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="mb-12 relative"
          >
            <div 
              className="w-48 h-48 md:w-56 md:h-56 mx-auto overflow-hidden rounded-full"
              style={{
                WebkitMaskImage: "radial-gradient(circle, black 50%, transparent 100%)",
                maskImage: "radial-gradient(circle, black 50%, transparent 100%)"
              }}
            >
              <img 
                src="/gemini-profile.png" 
                alt="Prakash V.S. Tomar" 
                className="w-full h-full object-cover scale-110 translate-y-2 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Accents (Optional, kept minimal) */}
            <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-primary opacity-50"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-primary opacity-50"></div>
          </motion.div>

          {/* Typography */}
          <h1 className="heading-display mb-6 tracking-tight">
            PRAKASH V.S. TOMAR
          </h1>

          <h2 className="text-xl md:text-2xl font-structural text-primary mb-6 tracking-wide">
            Generative AI Engineer & Agentic Systems Builder.
          </h2>

          <p className="body-mono mb-12 max-w-2xl mx-auto">
            Architecting production ML pipelines serving 3.5M+ users. 
            I build intelligence that scales, from context-aware RAG systems 
            to robust LLM guardrails.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-primary"
            >
              View Production Work
            </button>
            <button
              onClick={() => scrollTo("ai-showcase")}
              className="btn-outline gap-3"
            >
              Ask the AI <ArrowDown className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </motion.div>

        {/* Minimal Scroll Indicator */}
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 1.5 }}
           className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono text-muted-foreground/60">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-primary/50 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
