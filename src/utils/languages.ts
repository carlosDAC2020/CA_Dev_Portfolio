export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  // --- Lenguajes de Programación ---
  python: {
    name: "Python",
    iconName: "python",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  cpp: {
    name: "C++",
    iconName: "cpp",
  },
  sql: {
    name: "SQL",
    iconName: "sql",
  },
  // --- Frameworks y Entornos de Ejecución ---
  angular: {
    name: "Angular",
    iconName: "angular",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  django: {
    name: "Django",
    iconName: "django",
  },
  fastapi: {
    name: "FastAPI",
    iconName: "fastapi",
  },

  // --- Bases de Datos ---
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  postgresql: {
    name: "PostgreSQL",
    iconName: "postgresql",
  },

  // --- Cloud, DevOps y Herramientas ---
  git: {
    name: "Git",
    iconName: "git",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  aws: {
    name: "AWS",
    iconName: "aws",
  },
  azure: {
    name: "Azure",
    iconName: "azure",
  },
  docker: {
    name: "Docker",
    iconName: "docker",
  },
  ansible: {
    name: "Ansible",
    iconName: "ansible",
  },
  terraform: {
    name: "Terraform",
    iconName: "terraform",
  },

  // --- Plataformas de IA y Negocio ---
  powerbi: {
    name: "Power BI",
    iconName: "powerbi",
  },
  powerautomate: {
    name: "Power Automate",
    iconName: "powerautomate",
  },
  huggingface: {
    name: "Hugging Face",
    iconName: "huggingface",
  },
  langchain: {
    name: "LangChain",
    iconName: "python",
  },
  /*
  googlegemini: {
    name: "Google Gemini",
    iconName: "google-gemini",
  },
  */
  
  // --- Otros (del template original) ---
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
}; 