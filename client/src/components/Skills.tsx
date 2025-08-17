import { useState } from "react";
import { Code, Database, Cloud, Wrench, Brain, BarChart3 } from "lucide-react";

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
        { name: 'Matplotlib', level: 85, description: 'Data visualization and plotting' },
        { name: 'Seaborn', level: 80, description: 'Statistical data visualization' }
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
        { name: 'Windows', level: 80, description: 'Desktop environment and development' },
        { name: 'Raspberry Pi', level: 75, description: 'IoT and embedded systems' }
      ]
    }
  ];

  const filteredCategories = selectedCategory === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === selectedCategory);

  const getSkillColor = (level: number) => {
    if (level >= 90) return 'bg-accent';
    if (level >= 80) return 'bg-primary';
    return 'bg-muted-foreground';
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
              
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground group-hover:text-primary transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="progress-bar">
                      <div 
                        className={`progress-fill ${getSkillColor(skill.level)}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {skill.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Expertise Radar */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-foreground mb-8">Top Expertise Areas</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['Generative AI', 'LLMOps', 'Agentic Systems', 'MLOps', 'FastAPI', 'LangChain'].map((skill) => (
              <span key={skill} className="skill-pill text-base px-6 py-3">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;