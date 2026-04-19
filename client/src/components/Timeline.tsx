import { motion } from "framer-motion";
import { Building, Calendar, MapPin } from "lucide-react";

interface TimelineEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const TIMELINE: TimelineEntry[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "Generative AI Engineer",
    period: "Jul 2024 – Present",
    location: "Gandhinagar, India",
    bullets: [
      "AI Form Builder: multi-agent pipeline, 25+ UI components, natural language → enterprise forms",
      "LLM Guardrails: PII masking, toxicity, bias, gibberish — 10+ enterprise use cases",
      "LLM Observability: 35+ metrics, OpenTelemetry, Jaeger, MLflow",
      "Grievance System: 3.5M+ users, hierarchical RAG, 100K+ embeddings",
    ],
  },
  {
    company: "HappyMonk.ai",
    role: "Data Science Intern",
    period: "Oct 2022 – Apr 2023",
    location: "Remote",
    bullets: [
      "Automation pipelines: 45% reduction in data prep time",
      "YOLOv5 + MMAction2: 18% improvement in object detection",
      "Geospatial metadata: 30% improvement in pothole density estimation",
    ],
  },
];

const Timeline = () => {
  return (
    <section id="timeline" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading">Experience</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              Building production-scale AI systems for enterprise.
            </p>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent" />

          <div className="space-y-12">
            {TIMELINE.map((entry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Dot */}
                <div className="absolute left-2.5 md:left-6.5 top-2 timeline-dot" />

                <div className="card-brutalist p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 text-primary mb-1">
                      <Building className="w-4 h-4" />
                      <span className="text-sm font-medium">{entry.company}</span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{entry.role}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {entry.period}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {entry.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-3">
                    {entry.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
