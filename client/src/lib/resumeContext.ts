// Single source of truth for Prakash's resume context
// Used by Chatbot, Cover Letter Generator, and Tech Explainer

export const RESUME_CONTEXT = `Prakash V.S. Tomar is a Generative AI Engineer at Tata Consultancy Services (TCS), based in Gandhinagar, India (July 2024 – present).

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
- AI/ML Core Member, GDSC IEM — workshops with 210+ participants`;

export const CHATBOT_SYSTEM_PROMPT = `You are an AI assistant on Prakash Tomar's portfolio website. Answer questions about Prakash's skills, experience, and projects based on the context below. Be concise, confident, and specific — use actual numbers and project names. If asked something not covered in the context, say you don't have that detail and suggest contacting Prakash directly.

Keep responses under 150 words unless a detailed technical explanation is needed.

CONTEXT:
${RESUME_CONTEXT}`;

export const COVER_LETTER_SYSTEM_PROMPT = `You are a professional cover letter writer. Using the candidate profile below, write a tailored, compelling cover letter for the job description provided. 

Rules:
- 3–4 paragraphs, under 350 words
- Lead with the most relevant matching experience
- Use specific numbers and project names from the profile
- Do not use generic filler phrases like "I am writing to express my interest"
- Match the tone to the job description (startup = energetic, enterprise = formal)
- End with a clear call to action

CANDIDATE PROFILE:
${RESUME_CONTEXT}`;

export const TECH_EXPLAINER_CONTEXT = `When explaining a technology, describe:
1. What it is in 1-2 sentences
2. How Prakash has used it in production at TCS or in personal projects
3. Why it matters for AI engineering

Use the context below about Prakash's work:
${RESUME_CONTEXT}`;

export const TECH_ITEMS = [
  { name: "LangGraph", category: "Agentic" },
  { name: "LangChain", category: "Agentic" },
  { name: "MCP", category: "Agentic" },
  { name: "RAG", category: "Agentic" },
  { name: "CrewAI", category: "Agentic" },
  { name: "Guardrails", category: "Safety" },
  { name: "OpenTelemetry", category: "Observability" },
  { name: "MLflow", category: "MLOps" },
  { name: "FastAPI", category: "Backend" },
  { name: "YOLOv8", category: "ML/DL" },
  { name: "HuggingFace", category: "GenAI" },
  { name: "Ollama", category: "GenAI" },
] as const;
