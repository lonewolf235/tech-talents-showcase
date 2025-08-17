import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      company: "Tata Consultancy Services (TCS)",
      role: "Data Scientist / Backend AI Engineer",
      location: "Gandhinagar, India",
      period: "Jul 2024 - Present",
      type: "Full-time",
      achievements: [
        "Designed and shipped core AI modules for TCS's flagship low-code/no-code platform DigiBOLT™, powering 7+ production-grade components",
        "Co-architected orchestration layer using FastAPI, SQL, and MongoDB, improving module access and team agility by 35%",
        "Instrumented 35+ LLM/ML metrics via OpenTelemetry, Jaeger, MLflow, enabling real-time monitoring and drift detection",
        "Built modular safety filters for PII, toxicity, bias ensuring 100% sensitive data protection across 10+ enterprise use cases",
        "Deployed text classification pipeline serving 3.5M+ users, reducing manual effort by 85%"
      ],
      technologies: ["FastAPI", "LangChain", "LangGraph", "HuggingFace", "MLflow", "OpenTelemetry", "MongoDB", "PostgreSQL"],
      keyProject: {
        title: "DigiBOLT™ Core AI Platform",
        description: "Enterprise-grade AI orchestration platform",
        impact: "30% workflow efficiency improvement"
      }
    },
    {
      id: 2,
      company: "HappyMonk.ai",
      role: "Data Science Intern",
      location: "Remote",
      period: "Oct 2022 - Apr 2023",
      type: "Internship",
      achievements: [
        "Designed fully automated pipeline to fetch and structure annotated datasets, reducing data preparation time by 45%",
        "Improved object detection and activity recognition accuracy by 18% using YOLOv5 and MMAction2",
        "Enhanced spatial pothole density estimation by 30% via advanced GPS extraction and manipulation",
        "Annotated 6000+ media files and integrated datasets into servers using PyMongo and MongoDB"
      ],
      technologies: ["YOLOv5", "MMAction2", "PyTorch", "MongoDB", "CVAT", "PyMongo"],
      keyProject: {
        title: "Automated Dataset Processing Pipeline",
        description: "Computer vision data preparation automation",
        impact: "45% reduction in data prep time"
      }
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building production-scale AI systems that drive real business impact and serve millions of users.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute left-6 top-8 timeline-dot"></div>
                
                <div className="md:ml-20">
                  <div className="card-elegant p-8 hover-lift">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-5 h-5 text-primary" />
                          <h3 className="text-2xl font-bold text-foreground">
                            {exp.company}
                          </h3>
                        </div>
                        
                        <h4 className="text-xl font-semibold text-primary mb-3">
                          {exp.role}
                        </h4>
                        
                        <div className="flex flex-wrap gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Key Project Highlight */}
                    <div className="bg-gradient-data p-4 rounded-lg mb-6">
                      <div className="flex items-center justify-between mb-2">
                        <h5 className="font-semibold text-foreground">🚀 Key Project</h5>
                        <span className="text-accent font-medium">{exp.keyProject.impact}</span>
                      </div>
                      <h6 className="font-medium text-primary mb-1">{exp.keyProject.title}</h6>
                      <p className="text-sm text-muted-foreground">{exp.keyProject.description}</p>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements</h5>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground leading-relaxed">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Technologies Used</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="skill-pill">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">Want to see the complete professional journey?</p>
          <button 
            onClick={() => window.open('mailto:prakashvstomar@gmail.com?subject=Resume Request', '_blank')}
            className="btn-hero inline-flex items-center gap-2"
          >
            <ExternalLink className="w-5 h-5" />
            Request Full Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;