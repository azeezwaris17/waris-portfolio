import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import ProjectTechStack from "@/components/projects/ProjectTechStack";
import Button from "@mui/material/Button";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="pb-16 pt-10">
      <Container>
        <div className="mb-6 flex items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="text-sm text-(--muted) hover:text-foreground"
          >
            Back to projects
          </Link>
          <div className="flex gap-2">
            {project.url ? (
              <Button
                component="a"
                href={project.url}
                target="_blank"
                rel="noreferrer"
                variant="contained"
                sx={{
                  bgcolor: "rgb(var(--color-brand))",
                  "&:hover": { bgcolor: "rgb(var(--color-brand-2))" },
                  borderRadius: "var(--radius-md)",
                }}
              >
                Live
              </Button>
            ) : null}
            {project.repo ? (
              <Button
                component="a"
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                variant="outlined"
                sx={{
                  borderRadius: "var(--radius-md)",
                  borderColor: "rgb(var(--color-border) / var(--border-alpha))",
                  color: "rgb(var(--color-fg))",
                }}
              >
                Code
              </Button>
            ) : null}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
          <div className="rounded-2xl border border-(--card-border) bg-(--card) p-4">
            <div className="relative aspect-16/10 overflow-hidden rounded-xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 720px"
                priority
              />
            </div>
          </div>

          <div className="rounded-2xl border border-(--card-border) bg-(--card) p-6">
            <h1 className="text-3xl font-semibold tracking-tight">
              {project.title}
            </h1>
            <p className="mt-3 text-(--muted)">{project.description}</p>
            <div className="mt-6">
              <ProjectTechStack items={project.techStack} />
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
