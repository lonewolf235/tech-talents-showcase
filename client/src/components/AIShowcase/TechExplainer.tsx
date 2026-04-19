import { useState } from "react";
import { Cpu, Loader2 } from "lucide-react";
import { generateText } from "@/lib/gemini";
import { TECH_EXPLAINER_CONTEXT, TECH_ITEMS } from "@/lib/resumeContext";

const TechExplainer = () => {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [explanation, setExplanation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const explainTech = async (techName: string) => {
    if (isLoading) return;

    setSelectedTech(techName);
    setExplanation("");
    setIsLoading(true);

    try {
      const prompt = `Explain "${techName}" — what it is, how Prakash has used it in his work (be specific with project names and numbers), and why it matters for AI engineering. Keep it under 150 words.`;
      const result = await generateText(TECH_EXPLAINER_CONTEXT, prompt);
      setExplanation(result);
    } catch (error) {
      setExplanation("Sorry, I couldn't generate an explanation right now. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Group techs by category
  const categories = Array.from(new Set(TECH_ITEMS.map((t) => t.category)));

  return (
    <div className="card-brutalist overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Cpu className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">
            Tech Stack Explainer
          </p>
          <p className="text-xs text-muted-foreground">
            Click any technology to see how Prakash uses it in production
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Tech Chips grouped by category */}
        {categories.map((category) => (
          <div key={category}>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3">
              {category}
            </p>
            <div className="flex flex-wrap gap-2">
              {TECH_ITEMS.filter((t) => t.category === category).map((tech) => (
                <button
                  key={tech.name}
                  onClick={() => explainTech(tech.name)}
                  disabled={isLoading}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 border ${
                    selectedTech === tech.name
                      ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/25"
                      : "bg-card border-border text-muted-foreground hover:border-primary/30 hover:text-foreground disabled:opacity-50"
                  }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>
          </div>
        ))}

        {/* Loading state */}
        {isLoading && (
          <div className="bg-muted/30 border border-border/50 rounded-xl p-8 text-center">
            <Loader2 className="w-6 h-6 animate-spin text-primary mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">
              Generating explanation for <span className="text-primary font-medium">{selectedTech}</span>...
            </p>
          </div>
        )}

        {/* Explanation */}
        {explanation && !isLoading && (
          <div className="bg-muted/30 border border-border/50 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                <Cpu className="w-3 h-3 text-primary" />
              </div>
              <h4 className="text-sm font-semibold text-foreground">{selectedTech}</h4>
            </div>
            <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
              {explanation}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TechExplainer;
