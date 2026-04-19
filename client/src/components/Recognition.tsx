import { motion } from "framer-motion";
import { Trophy, Award, BookOpen, GraduationCap } from "lucide-react";

interface RecognitionItem {
  icon: React.ReactNode;
  emoji: string;
  title: string;
  subtitle: string;
}

const ITEMS: RecognitionItem[] = [
  {
    icon: <Trophy className="w-5 h-5" />,
    emoji: "🏆",
    title: "TCS AI Fridays 2025",
    subtitle: "Winner, Gujarat Region · National Finals Top 25 globally",
  },
  {
    icon: <Award className="w-5 h-5" />,
    emoji: "🥇",
    title: "Amazon ML Challenge 2023",
    subtitle: "Rank 301 / 4,898 teams",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    emoji: "📄",
    title: "ML Research Publication",
    subtitle: "\"Machine Learning — A New Perspective\" at IEMPOWER 2022 — AIP Publishing",
  },
  {
    icon: <GraduationCap className="w-5 h-5" />,
    emoji: "🎓",
    title: "B.Tech — GPA: 9.26",
    subtitle: "IEM Kolkata, AI/ML specialization (2020–2024)",
  },
];

const Recognition = () => {
  return (
    <section id="recognition" className="py-24 relative">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, hsl(263 70% 50% / 0.03) 0%, transparent 60%)",
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
            <h2 className="section-heading">Recognition & Publications</h2>
            <div className="section-divider" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="card-brutalist p-6 h-full flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 text-lg">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognition;
