import { Award, Users, Zap, Target } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Production AI Systems",
      description: "Deployed ML solutions serving 3.5M+ users at TCS"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency Expert",
      description: "Improved workflow efficiency by 30% with AI automation"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Technical Leadership",
      description: "Led ML workshops for 300+ students and professionals"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Collaboration",
      description: "Enhanced team agility by 35% through AI orchestration"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-data">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Text */}
          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm an AI/ML Engineer at <strong className="text-foreground">Tata Consultancy Services</strong>, 
                specializing in Generative AI, Agentic Systems, and LLMOps. With expertise spanning 
                <strong className="text-primary"> NLP, Computer Vision, and MLOps</strong>, I design and deploy 
                production-scale AI solutions that handle massive datasets and real-time inference.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My technical arsenal includes <strong className="text-accent">FastAPI, LangChain, HuggingFace</strong>, 
                and cloud-native observability tools. I've architected AI systems that improve operational efficiency by 30% 
                while maintaining enterprise-grade security and compliance standards.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Beyond coding, I believe in <em className="text-foreground">reproducible coffee over magic</em> – 
                bringing the same systematic approach to both model development and my morning brew routine.
              </p>
            </div>
          </div>
          
          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={index}
                className="card-elegant p-6 text-center hover-lift group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {highlight.icon}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {highlight.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;