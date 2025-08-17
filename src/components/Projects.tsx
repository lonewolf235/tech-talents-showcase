import { useState } from "react";
import { ExternalLink, Github, Eye, Database, Zap, Award, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import confusionMatrix from "@/assets/confusion-matrix.jpg";
import trainingCurve from "@/assets/training-curve.jpg";
import featureImportance from "@/assets/feature-importance.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "RoadGuard: Smart Pothole Detection",
      category: "Computer Vision",
      summary: "Government-backed AI system for automated road hazard detection using YOLOv8",
      description: "Telangana Government project employing YOLOv8 technology to analyze road images and videos, successfully identifying and cataloging 3000+ large potholes within targeted regions.",
      image: confusionMatrix,
      technologies: ["YOLOv8", "Computer Vision", "Python", "OpenCV", "Government Partnership"],
      metrics: {
        datasetSize: "3,000+ annotated potholes",
        accuracy: "94.2% detection accuracy",
        impact: "25% reduction in road accidents",
        deployment: "Government production system"
      },
      links: {
        github: "#",
        demo: "#",
        research: "#"
      },
      featured: true,
      status: "Production",
      achievements: [
        "Reduced reported road accidents by 25% in designated Telangana areas",
        "Processed 10,000+ road images with real-time inference",
        "Integrated with government infrastructure monitoring systems",
        "Achieved 94.2% precision in pothole detection under various weather conditions"
      ]
    },
    {
      id: 2,
      title: "Technical Repo Analyzer",
      category: "Generative AI",
      summary: "Full-stack GenAI application for automated code complexity analysis",
      description: "Developed using Python, OpenAI API, GitHub API, and LangChain for comprehensive code analysis with a Streamlit-hosted web interface.",
      image: featureImportance,
      technologies: ["OpenAI API", "LangChain", "Streamlit", "GitHub API", "Python"],
      metrics: {
        datasetSize: "500+ repositories analyzed",
        performance: "20 hours saved per review cycle",
        accuracy: "89% error detection rate",
        deployment: "Cloud-hosted web application"
      },
      links: {
        github: "#",
        demo: "#"
      },
      featured: false,
      status: "Live Demo",
      achievements: [
        "Automated error detection saving 20+ hours per code review cycle",
        "Integrated multiple AI APIs for comprehensive analysis",
        "Built intuitive Streamlit interface for non-technical users",
        "Analyzed 500+ GitHub repositories with detailed complexity metrics"
      ]
    },
    {
      id: 3,
      title: "DigiBOLT AI Core Platform",
      category: "Enterprise AI",
      summary: "Production-scale AI orchestration platform for low-code/no-code workflows",
      description: "Core AI modules for TCS's flagship platform, enabling enterprise-grade AI deployment with advanced observability and monitoring.",
      image: trainingCurve,
      technologies: ["FastAPI", "LangChain", "MLflow", "OpenTelemetry", "MongoDB", "PostgreSQL"],
      metrics: {
        userBase: "3.5M+ active users",
        performance: "30% workflow efficiency improvement",
        monitoring: "35+ LLM/ML metrics tracked",
        deployment: "Enterprise production environment"
      },
      links: {
        demo: "#"
      },
      featured: true,
      status: "Production",
      achievements: [
        "Deployed to serve 3.5M+ users with 99.9% uptime",
        "Implemented comprehensive LLM safety guardrails",
        "Built real-time monitoring with drift detection",
        "Achieved 35% improvement in team development agility"
      ]
    }
  ];

  const categories = ["All", "Computer Vision", "Generative AI", "Enterprise AI"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const featuredProject = projects.find(p => p.id === 1); // RoadGuard as featured

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-success text-white";
      case "Live Demo": return "bg-info text-white";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Production-ready AI solutions that demonstrate technical depth, scalability, and real-world impact.
          </p>
        </div>

        {/* Featured Project Spotlight */}
        {featuredProject && (
          <div className="mb-20">
            <h3 className="text-2xl font-semibold text-center text-foreground mb-8">
              🏆 Featured Case Study
            </h3>
            <div className="card-elegant p-8 lg:p-12 hover-lift">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(featuredProject.status)}`}>
                      {featuredProject.status}
                    </span>
                    <span className="text-accent font-medium">{featuredProject.category}</span>
                  </div>
                  
                  <h4 className="text-3xl font-bold text-foreground mb-4">
                    {featuredProject.title}
                  </h4>
                  
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Key Metrics */}
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    <div className="bg-gradient-data p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Database className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-muted-foreground">Dataset</span>
                      </div>
                      <span className="font-semibold text-foreground">{featuredProject.metrics.datasetSize}</span>
                    </div>
                    <div className="bg-gradient-data p-4 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <BarChart3 className="w-4 h-4 text-accent" />
                        <span className="text-sm font-medium text-muted-foreground">Accuracy</span>
                      </div>
                      <span className="font-semibold text-foreground">{featuredProject.metrics.accuracy}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.technologies.map((tech) => (
                      <span key={tech} className="skill-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    <Button className="btn-hero">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Research
                    </Button>
                    <Button variant="outline" className="btn-outline-hero">
                      <Github className="w-4 h-4 mr-2" />
                      Source Code
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-80 object-cover rounded-xl shadow-card"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-card text-muted-foreground hover:bg-primary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card-elegant p-6 hover-lift group">
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-accent text-sm font-medium">{project.category}</span>
                  {project.featured && (
                    <Award className="w-4 h-4 text-warning" />
                  )}
                </div>
                
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-3 mb-6 text-xs">
                <div className="bg-muted/50 p-2 rounded">
                  <span className="text-muted-foreground block">Performance</span>
                  <span className="font-medium text-foreground">{project.metrics.performance}</span>
                </div>
                <div className="bg-muted/50 p-2 rounded">
                  <span className="text-muted-foreground block">Deployment</span>
                  <span className="font-medium text-foreground">{project.metrics.deployment}</span>
                </div>
              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1 mb-6">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span key={tech} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                    +{project.technologies.length - 3} more
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2">
                {project.links.demo && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <Eye className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button size="sm" variant="outline" className="flex-1">
                    <Github className="w-3 h-3 mr-1" />
                    Code
                  </Button>
                )}
                <Button 
                  size="sm" 
                  variant="default"
                  onClick={() => setSelectedProject(project.id)}
                  className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Code className="w-3 h-3 mr-1" />
                  Details
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Reproducibility Badge */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-success/10 text-success rounded-full">
            <Award className="w-5 h-5" />
            <span className="font-medium">All projects include code, documentation, and reproducible results</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;