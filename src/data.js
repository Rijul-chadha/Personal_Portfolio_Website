// All site content lives here. Edit this file to update the site.
import interacLogo from './assets/logos/interac.png';
import ontarioLogo from './assets/logos/ontario.png';
import tmuLogo from './assets/logos/tmu.png';

export const profile = {
  name: 'Rijul Chadha',
  role: 'Building AI that holds up at scale',
  status: 'now building enterprise AI systems at Interac · toronto',
  intro: [
    {
      before: "I'm drawn to ",
      em: 'distributed systems',
      after:
        ', hard optimization problems and machine learning. Most of all, I like building the scalable backend infrastructure that keeps AI agents and ML models dependable long after launch day.',
    },
    {
      before:
        "I like problems with messy data and real stakes, where success is something you can measure. Right now that means bringing AI into Canada's payments network.",
    },
  ],
  focus: ['distributed systems', 'machine learning', 'generative ai', 'backend engineering', 'cloud & mlops'],
  github: 'https://github.com/Rijul-chadha',
  linkedin: 'https://www.linkedin.com/in/rijul-chadha-788801255/',
  email: 'r1chadha@torontomu.ca',
};

export const work = [
  {
    title: 'AI Product Delivery & Development',
    org: 'Interac',
    orgUrl: 'https://www.interac.ca',
    logo: interacLogo,
    logoAlt: 'Interac logo',
    dates: 'sep 2026 — now',
    hook: "Bringing AI agents to the teams behind Canada's payments network.",
    body:
      "I work directly with the e-Transfer, Real-Time Rail, Fraud & Security and HR teams to find where they lose time looking for information or repeating steps. I then build agents for that work on Interac's Azure agent platform. Before anything ships, we agree on what a good answer looks like and how fast it has to be. Every integration goes through MCP and REST, with security and governance controls in place.",
    stats: [
      { n: '4+', l: 'business teams getting their own AI agents' },
      { n: '1', l: 'shared enterprise platform, built from reusable modules' },
    ],
    stack: 'azure · aws bedrock · mcp · rag · python',
  },
  {
    title: 'AI Engineering',
    org: 'Ontario Public Service · Public & Business Service Delivery',
    orgUrl:
      'https://www.linkedin.com/company/ontario-ministry-public-and-business-service-delivery-and-procurement/posts/',
    logo: ontarioLogo,
    logoAlt: 'Government of Ontario logo',
    dates: 'jan — aug 2026',
    hook: 'Helping government paperwork move at the speed of software.',
    body:
      'Permit applications were stalling while they passed between ministries. I built LLM and RAG pipelines that read each application, check it against the rules, and send it to the right place among 31 ministries. I also shipped an agent to production that reviews licence plate applications automatically. We tested it for latency and studied its errors until manual review was no longer needed.',
    stats: [
      { n: '2 yrs → 2', small: 'mo', l: 'time to approve a mining permit' },
      { n: '5×', l: 'more licence plate applications handled' },
      { n: '0', l: 'manual reviews left in that process' },
    ],
    stack: 'python · llms · rag · classification · dashboards',
  },
];

// pipe steps marked { llm: true } get a dashed border
export const projects = [
  {
    title: 'Campus Lost & Found',
    url: 'https://github.com/Rijul-chadha/campus-lost-and-found',
    hook: 'Reuniting people with lost things, built to the standard of a payments system.',
    body:
      "Finders log items, owners describe what they lost, and front-desk staff approve claims. Matching uses explainable rules that can rule out a match outright. An LLM is consulted only when those rules can't decide, and a circuit breaker cuts it off if it starts failing. Photos are stripped of location data, and the database itself guarantees an item can't be handed to two people.",
    pipe: ['report', 'outbox', 'embed', 'match', 'veto', { label: 'llm fallback', llm: true }, 'notify'],
    stats: [
      { n: '96%', l: 'of searches show the right item first' },
      { n: '43', l: 'automated tests guarding the logic' },
    ],
    stack: 'fastapi · next.js · postgres · pgvector · redis · docker',
  },
  {
    title: 'Customer Churn Prediction',
    hook: 'Spotting customers who are about to leave, a month before they do.',
    body:
      'An end-to-end ML pipeline for more than 100,000 SaaS users. Spark jobs on Azure Databricks turn raw behaviour data into features. I compared XGBoost with an LSTM in PyTorch and tracked every experiment in MLflow. The chosen model reached 91.2% ROC-AUC and runs as a real-time FastAPI service on Kubernetes (AKS), with Power BI dashboards that show the retention team who to contact.',
    pipe: ['raw events', 'spark etl', 'features', 'train & track', 'serve on aks', 'dashboard'],
    stats: [
      { n: '30', small: 'days', l: 'warning before a customer cancels' },
      { n: '38%', l: 'fewer customers leaving' },
      { n: '27%', l: 'more lifetime value per customer' },
    ],
    stack: 'python · xgboost · pytorch · databricks · spark · mlflow · aks',
  },
  {
    title: 'Survey AI',
    hook: 'Five agents that turn a research question into a survey worth sending.',
    body:
      'Good surveys are slow to write, and bias slips in easily. You give Survey AI a research goal, and five agents draft, analyse, review and refine the questions, reaching tools and context through MCP. A separate LLM judge scores every version so prompt changes are measured, not guessed.',
    pipe: ['objective', 'draft', 'analyse', 'review', 'refine', { label: 'judge', llm: true }],
    stats: [
      { n: '5', l: 'AI agents working as one team' },
      { n: '5', l: 'quality checks on every draft, bias included' },
    ],
    stack: 'langgraph · mcp · llm-as-a-judge · python',
  },
  {
    title: 'Data Quality & Observability',
    hook: 'Catching data pipelines that fail without raising an error.',
    body:
      "The worst data bugs don't crash anything; they just leave wrong numbers behind. This platform watches pipelines for schema changes, missing values, stale data and unexpected row counts. It traces each failure back through the pipeline's lineage and logs the incident, so whoever is on call can see the cause straight away.",
    stats: [
      { n: '85%', l: 'fewer problems slipping through unnoticed' },
      { n: '3 h → 20', small: 'min', l: 'to find out what broke' },
      { n: '10+', l: 'pipelines watched automatically' },
    ],
    stack: 'python · spark · postgres · azure · power bi',
  },
  {
    title: 'Product Sense',
    url: 'https://github.com/Rijul-chadha/Product-Sense',
    hook: "Take a photo of a skincare product and find out what's actually in it.",
    body:
      "Beauty brands use packaging that looks almost identical, which confuses ordinary image classifiers. Product Sense matches the photo against a curated catalogue instead. It then reads the product's ingredient list, however messy, and explains in plain language what each ingredient does and whether it suits your skin type.",
    pipe: ['photo', 'retrieve', 'match', 'parse ingredients', 'explain'],
    stack: 'fastapi · retrieval · javascript',
  },
];

export const earlier = [
  { year: '2025', name: 'Resortify', desc: 'a resort booking site with listings, reviews and accounts', url: 'https://github.com/Rijul-chadha/Resortify_project' },
  { year: '2024', name: 'Payroll DBMS', desc: 'salary processing in Oracle SQL, with views and procedures', url: 'https://github.com/Rijul-chadha/Payroll_Management_DBMS' },
  { year: '2024', name: 'Bank System', desc: 'accounts, deposits and withdrawals in object-oriented C++', url: 'https://github.com/Rijul-chadha/Bank_mangement_system_project' },
  { year: '2024', name: 'Simon Says', desc: 'the memory game, in plain JavaScript', url: 'https://github.com/Rijul-chadha/Simon_says_game' },
];

export const process = [
  { title: 'Find the real problem', body: 'I start with the people who feel the pain, not with a model or a framework. What slows them down, and what would "fixed" look like?' },
  { title: 'Build around it', body: "The design follows the problem. Rules and retrieval do what they can, AI handles what they can't, and the system is built to survive failures." },
  { title: 'Measure success', body: "Every system ships with a way to check it, whether that's accuracy, time saved, or targets agreed with the people using it." },
  { title: 'Improve and repeat', body: 'Results and real usage show what to change next. I adjust the design, measure again, and keep going.' },
];

export const education = {
  school: 'Toronto Metropolitan University',
  detail: 'BSc Computer Science, specializing in Artificial Intelligence · co-op · graduating 2027',
  logo: tmuLogo,
  logoAlt: 'Toronto Metropolitan University logo',
};

export const skills = [
  ['ai & agents', 'LLMs, RAG, LangGraph, MCP, LLM-as-a-judge'],
  ['machine learning', 'PyTorch, XGBoost, MLflow, Spark, Databricks'],
  ['backend & data', 'FastAPI, PostgreSQL, pgvector, Redis, MongoDB'],
  ['infra', 'Docker, Kubernetes, AKS, Azure, GitHub Actions'],
  ['languages', 'Python, TypeScript, SQL, R'],
];
