import { useState } from "react";
import { ExternalLink, Github, Eye, Database, Zap, Award, Code, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import faceFlix from "@/assets/projects/faceflix.jpg";
import payloadDrone from "@/assets/projects/payload-drone.jpg";
import mnistRedefined from "@/assets/projects/mnist-redefined.jpg";
import repoAnalyzer from "@/assets/projects/repo-analyzer.jpg";
import roadGuard from "@/assets/projects/roadguard.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "RoadGuard - Smart Pothole Detection",
      category: "Computer Vision",
      summary: "Telangana Government project reducing road accidents by 25% using YOLOv8",
      description: "RoadGuard is a government-sponsored project for Telangana state, strategically employing YOLOv8 technology to analyze road images and videos. Successfully identified and cataloged 3000+ large potholes within targeted regions, contributing to improved road safety.",
      image: roadGuard,
      technologies: ["YOLOv8", "Python", "OpenCV", "PyTorch", "Computer Vision", "GIS"],
      metrics: {
        datasetSize: "3000+ potholes cataloged",
        accuracy: "High precision detection",
        impact: "25% accident reduction",
        deployment: "Government production"
      },
      links: {
        github: "https://github.com/lonewolf235/Pothole-Detection",
        demo: null,
        research: "https://drive.google.com/file/d/1nuGFFv0yXHisdyHOiuizHmfIAZNB7Yvz/view"
      },
      featured: true,
      status: "Production",
      achievements: [
        "Reduced reported road accidents by 25% in Telangana regions",
        "Successfully cataloged 3000+ large potholes",
        "Implemented real-time detection with high accuracy",
        "Integrated with government infrastructure systems"
      ]
    },
    {
      id: 2,
      title: "FaceFlix - Facial Recognition Movie Recommender",
      category: "Computer Vision",
      summary: "AI-powered movie recommendation system using facial emotion recognition",
      description: "FaceFlix scans facial emotions and recommends movies based on detected emotional states. Built as a follow-up to my facial recognition attendance system, it combines computer vision with recommendation algorithms to create a personalized entertainment experience.",
      image: faceFlix,
      technologies: ["Python", "OpenCV", "TensorFlow", "DeepFace", "Scikit-Learn", "Flask"],
      metrics: {
        accuracy: "95% emotion detection",
        emotions: "7 emotion categories",
        recommendations: "Real-time processing",
        deployment: "Web application"
      },
      links: {
        github: "https://github.com/lonewolf235/Face_recognition",
        demo: null
      },
      featured: false,
      status: "Completed",
      achievements: [
        "Implemented real-time emotion detection with 95% accuracy",
        "Created personalized recommendation engine",
        "Integrated with movie database for instant suggestions",
        "Built intuitive web interface for seamless user experience"
      ]
    },
    {
      id: 3,
      title: "Technical Repo Analyzer",
      category: "Generative AI",
      summary: "Full-stack GitHub repository complexity analysis using OpenAI API and LangChain",
      description: "Comprehensive full-stack application that analyzes GitHub repositories for technical complexity. Integrates OpenAI API, GitHub API, and LangChain to provide detailed code analysis with automated error detection capabilities.",
      image: repoAnalyzer,
      technologies: ["Python", "OpenAI API", "GitHub API", "LangChain", "Streamlit", "NLP"],
      metrics: {
        timeReduction: "20 hours saved",
        repositories: "500+ analyzed",
        accuracy: "90% error detection",
        deployment: "Live web app"
      },
      links: {
        github: "https://github.com/lonewolf235/Technical-Repo-Analyzer",
        demo: "https://www.youtube.com/watch?v=p_Bv2DO-TR4"
      },
      featured: false,
      status: "Live Demo",
      achievements: [
        "Automated error detection saving 20+ hours per review cycle",
        "Integrated multiple APIs for comprehensive analysis",
        "Deployed production-ready web interface",
        "Analyzed 500+ GitHub repositories with detailed metrics"
      ]
    },
    {
      id: 4,
      title: "PAYLOAD DRONE - Next Frontier in Logistics",
      category: "IoT & ML",
      summary: "Bidirectional IoT system using Raspberry Pi and Arduino for environmental monitoring",
      description: "Constructed a comprehensive bidirectional system using Raspberry Pi 4 and Arduino to collect environmental data through drones. The system monitors CO levels, temperature, and humidity, feeding data to a base station with pollution classification.",
      image: payloadDrone,
      technologies: ["Raspberry Pi", "Arduino", "Python", "Scikit-Learn", "IoT Sensors", "Decision Trees"],
      metrics: {
        sensors: "3 sensor types",
        accuracy: "92% classification",
        range: "5km coverage",
        deployment: "IoT production"
      },
      links: {
        github: "https://github.com/lonewolf235/PAYLOAD-DRONE",
        demo: "https://drive.google.com/file/d/1y1yjnUL-uMQacb6a8vgFWtBaxaNW5qtj/view"
      },
      featured: false,
      status: "Completed",
      achievements: [
        "Built end-to-end IoT monitoring system",
        "Achieved 92% accuracy in pollution classification",
        "Enabled real-time environmental data collection",
        "Integrated drone-to-base station communication"
      ]
    },
    {
      id: 5,
      title: "MNIST: Redefined - Custom Activation Function",
      category: "Deep Learning",
      summary: "Modified deep learning model with custom activation function for improved MNIST accuracy",
      description: "Developed a novel deep learning approach by creating a custom activation function that combines ELU wrapped around modified leaky ReLU. This innovative activation function generates better accuracy on the MNIST dataset.",
      image: mnistRedefined,
      technologies: ["Python", "TensorFlow", "Keras", "NumPy", "Matplotlib", "MNIST Dataset"],
      metrics: {
        accuracy: "99.2% achieved",
        improvement: "15% over standard",
        parameters: "Custom activation",
        deployment: "Research implementation"
      },
      links: {
        github: "https://github.com/lonewolf235/Custom-Activation-Function",
        demo: null
      },
      featured: false,
      status: "Completed",
      achievements: [
        "Created novel custom activation function",
        "Achieved 99.2% accuracy on MNIST dataset",
        "15% improvement over standard activations",
        "Published research implementation"
      ]
    }
  ];

  const categories = ["All", "Computer Vision", "Generative AI", "IoT & ML", "Deep Learning"];
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
                    <Button 
                      className="btn-hero"
                      onClick={() => window.open(featuredProject.links.research, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Research
                    </Button>
                    <Button 
                      variant="outline" 
                      className="btn-outline-hero"
                      onClick={() => window.open(featuredProject.links.github, '_blank')}
                    >
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
                  <span className="text-muted-foreground block">Key Metric</span>
                  <span className="font-medium text-foreground">
                    {project.metrics.accuracy || project.metrics.timeReduction || project.metrics.sensors || project.metrics.improvement || "N/A"}
                  </span>
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
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.links.demo!, '_blank')}
                  >
                    <Eye className="w-3 h-3 mr-1" />
                    Demo
                  </Button>
                )}
                {project.links.github && (
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(project.links.github!, '_blank')}
                  >
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