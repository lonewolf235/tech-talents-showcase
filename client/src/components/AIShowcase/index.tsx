import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, FileText, Cpu, Sparkles } from "lucide-react";
import Chatbot from "./Chatbot";
import CoverLetterGen from "./CoverLetterGen";
import TechExplainer from "./TechExplainer";

const TABS = [
  {
    id: "chatbot",
    label: "Ask Me Anything",
    icon: MessageSquare,
    description: "Chat with an AI that knows everything about Prakash",
  },
  {
    id: "cover-letter",
    label: "Cover Letter Generator",
    icon: FileText,
    description: "Paste a JD, get a tailored cover letter in seconds",
  },
  {
    id: "tech-explainer",
    label: "Tech Stack Explainer",
    icon: Cpu,
    description: "Click any tech to learn how Prakash uses it",
  },
] as const;

type TabId = (typeof TABS)[number]["id"];

const AIShowcase = () => {
  const [activeTab, setActiveTab] = useState<TabId>("chatbot");

  return (
    <section id="ai-showcase" className="py-24 relative">
      {/* Subtle gradient bg */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, hsl(263 70% 50% / 0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Live AI — Powered by Gemini
            </div>
            <h2 className="section-heading">AI Showcase</h2>
            <div className="section-divider" />
            <p className="section-subheading">
              These aren't mockups — they're live AI features running right now.
              Try them.
            </p>
          </motion.div>
        </div>

        {/* Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                    : "bg-card border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Tab description */}
        <p className="text-center text-muted-foreground text-sm mb-8">
          {TABS.find((t) => t.id === activeTab)?.description}
        </p>

        {/* Tab content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-4xl mx-auto"
        >
          {activeTab === "chatbot" && <Chatbot />}
          {activeTab === "cover-letter" && <CoverLetterGen />}
          {activeTab === "tech-explainer" && <TechExplainer />}
        </motion.div>
      </div>
    </section>
  );
};

export default AIShowcase;
