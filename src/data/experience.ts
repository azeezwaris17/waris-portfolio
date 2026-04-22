import type { Experience } from "@/types/experience";

export const experience: Experience[] = [
  {
    title: "Software Developer",
    company: "D3NTIQ — Dental Practice Management Platform",
    start: "2026",
    end: "Present",
    summary:
      "Engineered a scalable, domain-driven backend with NestJS and Prisma/PostgreSQL, featuring strict use-case layering across 10 domains, RBAC-secured JWT auth, and comprehensive Vitest/Jest coverage.",
  },
  {
    title: "Backend Developer",
    company: "ClinicQueue — Healthcare Operations Platform",
    start: "2025",
    end: "2025",
    summary:
      "Built a modular, domain-driven backend for high-concurrency patient intake and automated triage scoring; delivered real-time queue updates with Socket.io and Redis-backed background processing (BullMQ).",
  },
  {
    title: "Data Analyst",
    company: "Medical Data Insights & Visualization Pipeline",
    start: "2025",
    end: "2025",
    summary:
      "Designed a Python-based pipeline to clean, normalize, and analyze clinical datasets, producing reproducible transformations and visual insights (correlation heatmaps and categorical analyses).",
  },
  {
    title: "Full-Stack Developer",
    company: "AccessGate — Event Management & Ticketing System",
    start: "2024",
    end: "2024",
    summary:
      "Led end-to-end development of a high-integrity ticketing ecosystem with JWT RBAC, QR code generation, an idempotent validation engine, and containerized deployments using Docker.",
  },
  {
    title: "Frontend Developer",
    company: "PredictGalore — Sports Prediction Platform",
    start: "2024",
    end: "2024",
    summary:
      "Built an admin-driven prediction platform for scheduling, management, and publishing, focusing on TypeScript-first patterns, scalable UI architecture, and long-term maintainability.",
  },
  {
    title: "Industrial Trainee",
    company: "Oyo State Ministry of Agriculture — Department of Fisheries",
    start: "2023",
    end: "2023",
    summary:
      "Conducted data collection and analysis on aquatic ecosystems, water quality, and fisheries resources to support evidence-based, sustainable resource management.",
  },
];
