# CLAUDE.md — Portfolio Rebuild Briefing

> Read this entire file before touching any code.
> This is the single source of truth for the portfolio rebuild project.

---

## Who this is for

**Prakash V.S. Tomar** — Generative AI Engineer at TCS, Gandhinagar, India.
- Portfolio live at: https://prakashportfolio-sand.vercel.app
- GitHub: https://github.com/lonewolf235
- Current repo: https://github.com/lonewolf235/tech-talents-showcase
- Stack: Vite + React + TypeScript + Tailwind + shadcn/ui, deployed on Vercel

---

## Core thesis of this portfolio

> "I don't just talk about AI — I ship it, and you can see it right now."

Most AI engineer portfolios are static resumes. This one should be the opposite — visitors interact with **live AI features** while reading about Prakash. Every section should reinforce that he builds production-grade AI systems, not demos.

---

## What to build — sections & features

### 1. Hero
- Name, animated tagline cycling through: `"Generative AI Engineer"` / `"Agentic Systems Builder"` / `"LLMOps Engineer"`
- One-line value prop: *"Building AI that ships to millions — agents, RAG, observability, safety."*
- Two CTAs: `View Projects` and `Ask me anything ↓` (scrolls to AI chatbot)
- Subtle animated background (particle graph / neural network nodes, nothing heavy)

### 2. Live AI Showcase — FLAGSHIP SECTION
Three interactive AI-powered widgets embedded directly on the page.

#### Widget A — "Ask me anything" chatbot
- Claude API (`claude-sonnet-4-20250514`) powered chatbot
- System prompt includes Prakash's full resume as context
- Answers recruiter questions: "What has Prakash built?", "Does he know RAG?", "What's his TCS experience?"
- Suggested starter questions shown as clickable chips
- Streaming responses preferred

#### Widget B — AI Cover Letter Generator
- Visitor pastes a job description into a textarea
- Hits Claude API with Prakash's resume + JD as context
- Outputs a tailored cover letter in ~10 seconds
- "Copy to clipboard" button on output
- This IS the demo — it proves he can build practical AI tools end-to-end

#### Widget C — Tech Stack Explainer (lighter lift)
- Visitor clicks any tech (LangGraph, MCP, RAG, etc.)
- Claude API explains what it is + how Prakash has used it in production
- Pulls from a predefined context block about his work

### 3. Projects
Four cards, each with: title, description, impact metric, tech tags, GitHub link, live demo link (if any).

| Project | Key metric | Tags |
|---|---|---|
| Automated Grievance Redressal System | 3.5M+ users, <3s latency | LangGraph, RAG, FastAPI, HuggingFace |
| LLM Guardrails & Content Safety | 10+ enterprise use cases, 100% data protection | Guardrails, OpenTelemetry, LangKit |
| RoadGuard — Pothole Detection | 3,000+ potholes, 25% accident reduction | YOLOv8, PyTorch, Telangana Govt. |
| Technical Repo Analyzer | 20+ hrs saved per review cycle | LangChain, OpenAI API, GitHub API, Streamlit |

> NOTE: TCS projects (Grievance System, Guardrails) have no public GitHub links — do NOT show a broken GitHub button. Show a "Production system — code is proprietary" badge instead.

### 4. Tech Stack
Visual grid grouped by category. Do NOT use a flat icon dump.

Groups:
- **Agentic / GenAI**: LangChain, LangGraph, CrewAI, MCP, Ollama, Azure OpenAI, Guardrails, HuggingFace
- **Observability / MLOps**: MLflow, Evidently AI, OpenTelemetry, Jaeger, LangKit, Loguru
- **ML / DL**: PyTorch, TensorFlow, Scikit-Learn, YOLOv8
- **Backend / Data**: FastAPI, PostgreSQL, MongoDB, Streamlit
- **Core**: Python, SQL, Bash, Linux, Git

### 5. Experience Timeline
Vertical timeline, two entries:

**TCS — Generative AI Engineer** (Jul 2024 – Present)
- AI Form Builder: multi-agent pipeline, 25+ UI components, natural language → enterprise forms
- LLM Guardrails: PII masking, toxicity, bias, gibberish — 10+ enterprise use cases
- LLM Observability: 35+ metrics, OpenTelemetry, Jaeger, MLflow
- Grievance System: 3.5M+ users, hierarchical RAG, 100K+ embeddings

**HappyMonk.ai — Data Science Intern** (Oct 2022 – Apr 2023)
- Automation pipelines: 45% reduction in data prep time
- YOLOv5 + MMAction2: 18% improvement in object detection
- Geospatial metadata: 30% improvement in pothole density estimation

### 6. Recognition & Publications
- 🏆 TCS AI Fridays 2025 — Winner, Gujarat Region · National Finals Top 25 globally
- 🥇 Amazon ML Challenge 2023 — Rank 301 / 4,898 teams
- 📄 ML paper published at IEMPOWER 2022 — AIP Publishing (in publication)
- 🎓 B.Tech GPA: 9.26 — IEM Kolkata, AI/ML specialization

### 7. Contact / Footer
- Email: prakashvstomar@gmail.com
- GitHub, LinkedIn, Twitter links
- Resume download button (PDF)
- Small text: "Gandhinagar, India · Open to senior AI/ML roles"

---

## Claude API integration

### Setup
```
VITE_GEMINI_API_KEY=AIzaSyCq7TPI-cRnVZv1BtEayPydKhhSQKbKKXI
```
Add to `.env.local` (never commit). Add `VITE_GEMINI_API_KEY` to Vercel environment variables for production.

### Model to use
Always use `gemini-2.5-flash`. Do not use Haiku (too weak for cover letter quality) or Opus (too slow/expensive for a portfolio).

### Prakash's resume context block
Use this verbatim as part of system prompts for the chatbot and cover letter generator:

```
Prakash V.S. Tomar is a Generative AI Engineer at Tata Consultancy Services (TCS), based in Gandhinagar, India (July 2024 – present).

CURRENT ROLE & PROJECTS AT TCS:
- AI Form Builder (DigiBOLT): Architected a multi-agent AI pipeline that auto-generates enterprise-grade forms from natural language prompts, Excel wireframes, or HTML. Covers document parsing, component selection (25+ UI components), validation inference, ANN-based combo population, and schema mapping. Supports create, edit, and incremental add workflows.
- LLM Guardrails & Content Safety: Designed modular safety filters for PII masking, toxicity, bias, and gibberish detection — ensuring 100% data protection across 10+ enterprise AI use cases.
- LLM Observability & Monitoring: Instrumented 35+ LLM/ML metrics via OpenTelemetry, Jaeger, MLflow, LangKit, and Evidently AI — enabling drift detection, distributed tracing, and real-time logging.
- Automated Grievance Redressal System: Production AI pipeline for 3.5M+ users — two-layer ML classification feeding a hierarchical RAG system with 100,000+ clustered embeddings for hallucination-resistant responses in 2–3 seconds.

PREVIOUS EXPERIENCE:
- HappyMonk.ai, Data Science Intern (Oct 2022 – Apr 2023): Built end-to-end annotation pipelines (45% time reduction), improved object detection 18% via YOLOv5/MMAction2, annotated 6000+ media files, enhanced pothole density estimation 30% via GPS extraction.

PROJECTS:
- RoadGuard (Telangana Govt.): YOLOv8-based road analysis identifying 3,000+ potholes, contributing to 25% reduction in road accidents.
- Technical Repo Analyzer: Full-stack Python app integrating OpenAI API, GitHub API, LangChain for automated code analysis via Streamlit. Saves 20+ hrs per review cycle.

SKILLS:
- Languages: Python, SQL, Bash, Java
- GenAI/Agentic: LangChain, LangGraph, Guardrails, MCP, Ollama, CrewAI, Azure OpenAI
- Observability/MLOps: MLflow, Evidently AI, Jaeger, OpenTelemetry, LangKit, Loguru
- ML/DL: Scikit-Learn, PyTorch, TensorFlow, Keras, YOLOv8
- Backend/Data: FastAPI, Streamlit, PostgreSQL, MongoDB
- Tools: Linux, Git, VSCode, Jupyter

EDUCATION:
- B.Tech Computer Science (AI/ML specialization), IEM Kolkata — GPA: 9.26 (Nov 2020 – Aug 2024)

RECOGNITION:
- TCS AI Fridays 2025: Winner, Gujarat Region; National Finals Top 25 globally
- Amazon ML Challenge 2023: Rank 301 / 4,898 teams
- Publication: "Machine Learning — A New Perspective", IEMPOWER 2022, AIP Publishing (in publication)
- ML Co-Lead, IEM Coding Club — mentored 300+ students
- AI/ML Core Member, GDSC IEM — workshops with 210+ participants
```

### Chatbot system prompt template
```
You are an AI assistant on Prakash Tomar's portfolio website. Answer questions about Prakash's skills, experience, and projects based on the context below. Be concise, confident, and specific — use actual numbers and project names. If asked something not covered in the context, say you don't have that detail and suggest contacting Prakash directly.

Keep responses under 150 words unless a detailed technical explanation is needed.

CONTEXT:
[insert resume context block above]
```

### Cover letter system prompt template
```
You are a professional cover letter writer. Using the candidate profile below, write a tailored, compelling cover letter for the job description provided. 

Rules:
- 3–4 paragraphs, under 350 words
- Lead with the most relevant matching experience
- Use specific numbers and project names from the profile
- Do not use generic filler phrases like "I am writing to express my interest"
- Match the tone to the job description (startup = energetic, enterprise = formal)
- End with a clear call to action

CANDIDATE PROFILE:
[insert resume context block above]

JOB DESCRIPTION:
[user input]
```

---

## Design direction

- **Dark theme primary**, light mode toggle optional
- **Color palette**: deep navy/slate background, purple/violet accent (`#7c3aed` family), white text, subtle teal for highlights
- **Typography**: Inter or Geist for body, no decorative fonts
- **Feel**: Professional but alive — not a static resume, not a flashy agency site. Think: Vercel.com meets a senior engineer's personal site.
- **No stock photos, no avatars, no Bitmoji** — let the work speak
- Subtle animations: fade-in on scroll, typing effect on hero tagline, nothing that distracts
- Mobile responsive — many recruiters check on phone

---

## Tech stack for the rebuild

Keep what's there, it's solid:
- **Vite + React + TypeScript** — don't change
- **Tailwind CSS** — don't change
- **shadcn/ui** — use for form elements, buttons, cards
- **Vercel** — keep for deployment

Add:
- **Anthropic SDK** (`@anthropic-ai/sdk`) for Claude API calls
- **Framer Motion** for scroll animations and hero typing effect
- React hooks for streaming API responses

---

## File structure to target

```
client/
  src/
    components/
      Hero.tsx
      AIShowcase/
        index.tsx
        Chatbot.tsx
        CoverLetterGen.tsx
        TechExplainer.tsx
      Projects.tsx
      TechStack.tsx
      Timeline.tsx
      Recognition.tsx
      Contact.tsx
    lib/
      claude.ts        ← Claude API call helpers
      resumeContext.ts ← The resume context string (single source of truth)
    App.tsx
    main.tsx
```

---

## What NOT to do

- Do not show broken GitHub links for TCS projects — they are proprietary
- Do not use `claude-haiku` for the cover letter widget — quality is too low
- Do not hardcode the API key anywhere — use `import.meta.env.VITE_GEMINI_API_KEY`
- Do not add heavy 3D libraries (Three.js, etc.) — portfolio must load fast but look and feel should be nearly 3D.
- Do not add a blog section — keep scope tight
- Do not use the AI Form Builder as a demo — it is a proprietary TCS product

---

## Definition of done

- [ ] Hero with animated tagline loads in <1s
- [ ] Chatbot widget responds to "What has Prakash built?" with a relevant answer
- [ ] Cover letter generator produces output for any pasted JD
- [ ] All 4 project cards render correctly with no broken links
- [ ] Site is fully responsive on mobile
- [ ] Deployed to Vercel with API key set as environment variable
- [ ] Lighthouse performance score > 85
