// Single source for identity and links. Edit here, not in components.
export const SITE = {
    brand: "FV.",
    name: "Flávio Vicente",
    role: "Fullstack & AI Engineer",
    location: "Portugal",
    tagline: "Small software. Useful things.", // ponytail: provisional tagline from the PRD
    description: "FV. is the personal hub of Flávio Vicente: projects, experiments, stack and contact.",
    email: "hello@example.com", // ponytail: placeholder, set the public contact email
    links: {
        github: "https://github.com/fhvicente",
        linkedin: "https://www.linkedin.com/in/fhsvicente/", // ponytail: placeholder, set the profile URL
    },
    cv: "/cv.pdf",
    // Source: Resume_Flávio_Vicente.html skills section (PRD §6.4)
    stack: {
        Languages: ["TypeScript", "JavaScript", "Python", "PHP", "Java", "HTML & CSS"],
        AI: [
            "LLMs",
            "AI agents",
            "RAG",
            "Vector databases",
            "LangChain",
            "Prompt engineering",
            "Fine-tuning",
            "Azure OpenAI",
            "OpenRouter",
        ],
        Frontend: ["React", "Next.js", "Angular", "Astro"],
        Backend: [
            "Node.js",
            "Express",
            "Laravel",
            "Django",
            "Flask",
            "Spring Boot",
            "OpenCV",
            "Kivy",
            "REST",
            "GraphQL",
            "Microservices",
        ],
        Data: ["PostgreSQL", "MySQL", "SQLite", "MongoDB", "Redis", "Drizzle ORM", "Zod"],
        Messaging: ["RabbitMQ", "Kafka"],
        Infrastructure: ["Microsoft Azure", "Docker", "Kubernetes", "CI/CD", "Linux", "Git"],
        CMS: ["WordPress (headless)"],
        Tooling: ["LaTeX", "Agile", "Scrum"],
    } as Record<string, string[]>,
};
