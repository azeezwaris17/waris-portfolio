import type { TechCategory } from "@/types/tech";

export const techStack: TechCategory[] = [
  {
    key: "frontend",
    title: "Frontend",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
            "Zustand",
      "Tanstack/React-Query",
      "Chart.js, Recharts",

    ],
  },
  {
    key: "backend",
    title: "Backend",
    items: ["Node.js", "Express.js", "Nest.js", "Jest / Vitest", "GraphQL, REST APIs" ],
  },
  {
    key: "database",
    title: "Database",
    items: ["PostgreSQL, Prisma", "MongoDB, Mongoose", "Supabase"],
  },
  {
    key: "devops",
    title: "DevOps & Deployment",
    items: [
      "Git & GitHub",
      "CI/CD (GitHub Actions)",
      "Docker",
      "Vercel, AWS, DigitalOcean",
    ],
  },
  {
    key: "data",
    title: "Data",
    items: [
      "Python",
      "Pandas / NumPy",
      "Bioinformatics Tools",
      "Data Visualization",
    ],
  },
];
