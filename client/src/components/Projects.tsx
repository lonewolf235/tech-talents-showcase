import { motion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

interface Project {
  title: string;
  description: string;
  impact: string;
  tags: string[];
  image: string;
  github?: string;
  demo?: string;
  proprietary?: boolean;
}

const PROJECTS: Project[] = [
  {
    title: "RoadGuard — Pothole Detection",
    description:
      "Telangana Government project using YOLOv8 to analyze road images. Identified and cataloged 3,000+ large potholes, reducing accidents by 25%.",
    impact: "3,000+ potholes detected",
    tags: ["YOLOv8", "PyTorch", "OpenCV", "Computer Vision"],
    image: "/projects/roadguard.png",
    github: "https://github.com/lonewolf235/Pothole-Detection",
  },
  {
    title: "Technical Repo Analyzer",
    description:
      "Full-stack Python app integrating OpenAI API, GitHub API, and LangChain for automated code analysis. Saves 20+ hours per review cycle.",
    impact: "20+ hrs saved per review cycle",
    tags: ["LangChain", "OpenAI API", "GitHub API", "Streamlit"],
    image: "/projects/repo.png",
    github: "https://github.com/lonewolf235/Technical-Repo-Analyzer",
    demo: "https://www.youtube.com/watch?v=p_Bv2DO-TR4",
  },
  {
    title: "Automated Grievance Redressal System",
    description:
      "Production AI pipeline serving 3.5M+ users. Two-layer ML classification feeding a hierarchical RAG system with 100,000+ clustered embeddings for hallucination-resistant responses.",
    impact: "<3s latency, hallucination-free routing",
    tags: ["LangGraph", "RAG", "FastAPI", "HuggingFace"],
    image: "/projects/grievance.png",
    proprietary: true,
  },
  {
    title: "LLM Guardrails & Content Safety",
    description:
      "Modular safety filters for PII masking, toxicity detection, bias filtering, and gibberish detection — ensuring 100% data protection across 10+ enterprise AI use cases.",
    impact: "10+ enterprise use cases secured",
    tags: ["Guardrails", "OpenTelemetry", "LangKit"],
    image: "/projects/guardrails.png",
    proprietary: true,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-7xl">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-section">02. Production Work</h2>
            <h3 className="heading-title">Architected for Scale</h3>
          </motion.div>
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {PROJECTS.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`flex flex-col gap-8 lg:gap-16 items-center ${
                  isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-3/5">
                  <div className="shadow-3d relative w-full aspect-[4/3] group overflow-hidden bg-[#111]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 border border-[#333333] transition-colors group-hover:border-primary/50 pointer-events-none"></div>
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-2/5 flex flex-col">
                  <h4 className="font-structural font-bold text-3xl text-foreground mb-4">
                    {project.title}
                  </h4>
                  
                  <p className="body-mono mb-6">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <span className="text-primary font-mono text-sm block mb-3 opacity-90">/// Impact</span>
                    <p className="font-structural text-lg">{project.impact}</p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-xs text-muted-foreground border border-border px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-border/50">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-outline gap-2"
                      >
                        <Github className="w-4 h-4" />
                        Source Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary gap-2"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
