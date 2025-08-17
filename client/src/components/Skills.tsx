import { useState } from "react";
import { Code, Database, Cloud, Wrench, Brain, BarChart3, Star, Zap } from "lucide-react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const skillCategories = [
    {
      id: 'languages',
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5" />,
      skills: [
        { name: 'Python', level: 95, description: 'Primary language for ML/AI development' },
        { name: 'SQL', level: 90, description: 'Database design and complex queries' },
        { name: 'Java', level: 75, description: 'Enterprise applications and backend' },
        { name: 'Bash', level: 80, description: 'System automation and scripting' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI/ML Frameworks',
      icon: <Brain className="w-5 h-5" />,
      skills: [
        { name: 'LangChain', level: 95, description: 'LLM application development' },
        { name: 'HuggingFace', level: 90, description: 'Transformer models and deployment' },
        { name: 'TensorFlow', level: 85, description: 'Deep learning and model training' },
        { name: 'Keras', level: 85, description: 'High-level neural networks API' },
        { name: 'PyTorch', level: 85, description: 'Research and production models' },
        { name: 'Scikit-Learn', level: 90, description: 'Classical ML algorithms' }
      ]
    },
    {
      id: 'genai',
      title: 'GenAI & Agentic Tools',
      icon: <BarChart3 className="w-5 h-5" />,
      skills: [
        { name: 'LangGraph', level: 90, description: 'Multi-agent system orchestration' },
        { name: 'Guardrails', level: 85, description: 'LLM safety and validation' },
        { name: 'Ollama', level: 80, description: 'Local LLM deployment' },
        { name: 'CrewAI', level: 75, description: 'Agent collaboration frameworks' },
        { name: 'MCP', level: 80, description: 'Model Control Protocol' },
        { name: 'Agno', level: 75, description: 'AI agent frameworks' }
      ]
    },
    {
      id: 'web-frameworks',
      title: 'Web Frameworks & Data',
      icon: <Cloud className="w-5 h-5" />,
      skills: [
        { name: 'FastAPI', level: 95, description: 'High-performance web APIs' },
        { name: 'Streamlit', level: 85, description: 'Rapid ML app prototyping' },
        { name: 'Pandas', level: 90, description: 'Data manipulation and analysis' },
        { name: 'NumPy', level: 85, description: 'Numerical computing' },
        { name: 'Matplotlib', level: 85, description: 'Data visualization and plotting' }
      ]
    },
    {
      id: 'observability',
      title: 'Observability & Monitoring',
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: 'MLflow', level: 90, description: 'ML lifecycle management' },
        { name: 'OpenTelemetry', level: 85, description: 'Distributed tracing and metrics' },
        { name: 'Jaeger', level: 80, description: 'Request tracing and debugging' },
        { name: 'Evidently AI', level: 85, description: 'ML model monitoring and drift detection' },
        { name: 'LangKit', level: 80, description: 'LLM observability and evaluation' },
        { name: 'Loguru', level: 80, description: 'Advanced Python logging' }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools & Databases',
      icon: <Wrench className="w-5 h-5" />,
      skills: [
        { name: 'Git', level: 90, description: 'Version control and collaboration' },
        { name: 'Jupyter', level: 95, description: 'Interactive development and prototyping' },
        { name: 'VSCode', level: 90, description: 'IDE and development environment' },
        { name: 'PostgreSQL', level: 85, description: 'Advanced relational database' },
        { name: 'MongoDB', level: 80, description: 'NoSQL document database' },
        { name: 'Linux', level: 90, description: 'System administration and optimization' },
        { name: 'Windows', level: 80, description: 'Desktop environment and development' }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  const getSkillLevel = (level: number) => {
    if (level >= 95) return { label: 'Expert', icon: '🚀', color: 'text-accent' };
    if (level >= 85) return { label: 'Advanced', icon: '⭐', color: 'text-primary' };
    if (level >= 75) return { label: 'Proficient', icon: '💎', color: 'text-foreground' };
    return { label: 'Familiar', icon: '📚', color: 'text-muted-foreground' };
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the AI/ML technology stack, from research to production deployment.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === 'all' 
                ? 'bg-primary text-primary-foreground' 
                : 'bg-card text-muted-foreground hover:bg-primary/10'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:bg-primary/10'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredCategories.map((category) => (
            <div key={category.id} className="card-elegant p-6 hover-lift">
              <div className="flex items-center mb-6">
                <div className="p-2 rounded-lg bg-primary/10 text-primary mr-3">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid gap-3">
                {category.skills.map((skill, index) => {
                  const skillLevel = getSkillLevel(skill.level);
                  return (
                    <div key={index} className="group p-3 rounded-lg bg-muted/10 hover:bg-muted/20 transition-all duration-300 border border-border/50 hover:border-primary/30">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-lg">{skillLevel.icon}</span>
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-1 rounded-full bg-primary/10 ${skillLevel.color}`}>
                          {skillLevel.label}
                        </span>
                      </div>
                      
                      <p className="text-xs text-muted-foreground opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Core Expertise Highlight */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">Core Expertise</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Generative AI', icon: <Brain className="w-6 h-6" />, desc: 'LLM applications & deployment' },
              { name: 'LLMOps', icon: <Zap className="w-6 h-6" />, desc: 'Production LLM workflows' },
              { name: 'Agentic Systems', icon: <BarChart3 className="w-6 h-6" />, desc: 'Multi-agent orchestration' },
              { name: 'MLOps', icon: <Database className="w-6 h-6" />, desc: 'ML pipeline automation' },
              { name: 'FastAPI', icon: <Code className="w-6 h-6" />, desc: 'High-performance APIs' },
              { name: 'LangChain', icon: <Star className="w-6 h-6" />, desc: 'LLM application frameworks' }
            ].map((expertise, index) => (
              <div key={index} className="card-elegant p-6 text-center hover-lift group">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  {expertise.icon}
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">
                  {expertise.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {expertise.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;