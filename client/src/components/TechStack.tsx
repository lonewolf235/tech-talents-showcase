import { motion } from "framer-motion";

interface TechGroup {
  label: string;
  items: string[];
}

const TECH_GROUPS: TechGroup[] = [
  {
    label: "Agentic / GenAI",
    items: [
      "LangChain",
      "LangGraph",
      "CrewAI",
      "MCP",
      "Ollama",
      "Azure OpenAI",
      "Guardrails",
      "HuggingFace",
    ],
  },
  {
    label: "Observability / MLOps",
    items: [
      "MLflow",
      "Evidently AI",
      "OpenTelemetry",
      "Jaeger",
      "LangKit",
      "Loguru",
    ],
  },
  {
    label: "ML / DL",
    items: ["PyTorch", "TensorFlow", "Scikit-Learn", "YOLOv8"],
  },
  {
    label: "Backend / Data",
    items: ["FastAPI", "PostgreSQL", "MongoDB", "Streamlit"],
  },
  {
    label: "Core",
    items: ["Python", "SQL", "Bash", "Linux", "Git"],
  },
];

// Color assignments for groups
const GROUP_COLORS = [
  "from-violet-500/20 to-purple-500/20 border-violet-500/20",
  "from-cyan-500/20 to-teal-500/20 border-cyan-500/20",
  "from-amber-500/20 to-orange-500/20 border-amber-500/20",
  "from-emerald-500/20 to-green-500/20 border-emerald-500/20",
  "from-blue-500/20 to-indigo-500/20 border-blue-500/20",
];

const GROUP_ACCENT = [
  "text-violet-400",
  "text-cyan-400",
  "text-amber-400",
  "text-emerald-400",
  "text-blue-400",
];

const TechStack = () => {
  return (
    <section id="tech-stack" className="py-24 relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 70% 80%, hsl(263 70% 50% / 0.04) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Tech Stack</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              From agentic frameworks to production observability — tools I use
              to build and ship AI systems.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {TECH_GROUPS.map((group, i) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-brutalist p-6 bg-gradient-to-br ${GROUP_COLORS[i]}`}
            >
              <h3 className={`text-sm font-semibold uppercase tracking-wider mb-4 ${GROUP_ACCENT[i]}`}>
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium bg-background/40 text-foreground/90 border border-border/30 hover:border-primary/30 hover:text-primary transition-all duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
