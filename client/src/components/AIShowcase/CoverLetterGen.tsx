import { useState } from "react";
import { FileText, Loader2, Copy, Check, Sparkles } from "lucide-react";
import { generateText } from "@/lib/gemini";
import { COVER_LETTER_SYSTEM_PROMPT } from "@/lib/resumeContext";

const CoverLetterGen = () => {
  const [jobDescription, setJobDescription] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isCopied, setIsCopied] = useState(false);

  const generate = async () => {
    if (!jobDescription.trim() || isGenerating) return;

    setIsGenerating(true);
    setCoverLetter("");

    try {
      const result = await generateText(
        COVER_LETTER_SYSTEM_PROMPT,
        `JOB DESCRIPTION:\n${jobDescription.trim()}`
      );
      setCoverLetter(result);
    } catch (error) {
      setCoverLetter(
        "Sorry, I encountered an error generating the cover letter. Please try again."
      );
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(coverLetter);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="card-brutalist overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-border/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <FileText className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">
            AI Cover Letter Generator
          </p>
          <p className="text-xs text-muted-foreground">
            Paste a job description → get a tailored cover letter
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Input */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Job Description
          </label>
          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste the full job description here...&#10;&#10;Example: We're looking for a Senior AI Engineer with experience in LLM deployment, RAG systems, and production ML pipelines..."
            rows={8}
            className="form-input resize-none"
            disabled={isGenerating}
          />
        </div>

        {/* Generate Button */}
        <button
          onClick={generate}
          disabled={!jobDescription.trim() || isGenerating}
          className="btn-hero w-full !py-4 text-base flex items-center justify-center gap-2 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {isGenerating ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Generating cover letter...
            </>
          ) : (
            <>
              <Sparkles className="w-5 h-5" />
              Generate Cover Letter
            </>
          )}
        </button>

        {/* Output */}
        {coverLetter && (
          <div className="relative">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-medium text-foreground">
                Generated Cover Letter
              </h4>
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              >
                {isCopied ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    Copy to clipboard
                  </>
                )}
              </button>
            </div>

            <div className="bg-muted/30 border border-border/50 rounded-xl p-6 text-sm text-foreground leading-relaxed whitespace-pre-wrap max-h-[500px] overflow-y-auto">
              {coverLetter}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverLetterGen;
