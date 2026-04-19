import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { streamChat } from "@/lib/gemini";
import { CHATBOT_SYSTEM_PROMPT } from "@/lib/resumeContext";

interface Message {
  role: "user" | "model";
  text: string;
}

const SUGGESTED_QUESTIONS = [
  "What has Prakash built?",
  "Does he know RAG?",
  "What's his TCS experience?",
  "What agentic tools does he use?",
  "Tell me about his observability work",
];

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isStreaming, setIsStreaming] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim() || isStreaming) return;

    const userMessage: Message = { role: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsStreaming(true);

    // Build conversation for Gemini
    const geminiMessages = [...messages, userMessage].map((m) => ({
      role: m.role as "user" | "model",
      parts: [{ text: m.text }],
    }));

    // Add streaming assistant message
    setMessages((prev) => [...prev, { role: "model", text: "" }]);

    try {
      let accumulated = "";
      for await (const chunk of streamChat(CHATBOT_SYSTEM_PROMPT, geminiMessages)) {
        accumulated += chunk;
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "model", text: accumulated };
          return updated;
        });
      }
    } catch (error) {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "model",
          text: "Sorry, I encountered an error. Please try again or contact Prakash directly at prakashvstomar@gmail.com.",
        };
        return updated;
      });
    } finally {
      setIsStreaming(false);
    }
  };

  return (
    <div className="card-brutalist overflow-hidden">
      {/* Chat header */}
      <div className="px-6 py-4 border-b border-border/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-primary" />
        </div>
        <div>
          <p className="font-medium text-foreground text-sm">Prakash's AI Assistant</p>
          <p className="text-xs text-muted-foreground">Powered by Gemini • Ask anything about Prakash</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs text-muted-foreground">Online</span>
        </div>
      </div>

      {/* Messages */}
      <div
        ref={scrollRef}
        className="h-[400px] overflow-y-auto p-6 space-y-4"
      >
        {messages.length === 0 && (
          <div className="text-center py-12">
            <Bot className="w-12 h-12 text-primary/30 mx-auto mb-4" />
            <p className="text-muted-foreground text-sm mb-6">
              Hi! I know everything about Prakash's work. Ask me anything.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {SUGGESTED_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="px-3 py-2 text-xs rounded-lg bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-all"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            {msg.role === "model" && (
              <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <Bot className="w-3.5 h-3.5 text-primary" />
              </div>
            )}
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                msg.role === "user"
                  ? "bg-primary text-primary-foreground rounded-br-md"
                  : "bg-muted/50 text-foreground rounded-bl-md"
              }`}
            >
              {msg.text || (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  Thinking...
                </span>
              )}
            </div>
            {msg.role === "user" && (
              <div className="w-7 h-7 rounded-full bg-muted flex items-center justify-center flex-shrink-0 mt-1">
                <User className="w-3.5 h-3.5 text-muted-foreground" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="px-6 py-4 border-t border-border/50">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="flex items-center gap-3"
        >
          <input
            type="text"
            placeholder="Ask about Prakash's skills, projects, experience..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isStreaming}
            className="flex-1 form-input !py-3 !rounded-xl"
          />
          <button
            type="submit"
            disabled={isStreaming || !input.trim()}
            className="btn-hero !px-4 !py-3 !rounded-xl disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            {isStreaming ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
