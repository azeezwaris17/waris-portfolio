import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card
      component="article"
      sx={{
        borderRadius: "var(--radius-lg)",
        p: 0,
        minHeight: 520,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: "100%",
        transitionDuration: "var(--duration-normal)",
        transitionTimingFunction: "var(--ease-standard)",
        overflow: "hidden",
        "&:hover": { borderColor: "rgb(var(--color-brand) / 0.50)" },
      }}
      className="group"
    >
      <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
        <figure className="relative aspect-video bg-[rgb(var(--bg-subtle))]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 420px"
          />
        </figure>

        <header className="flex flex-1 flex-col p-8">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-xl font-bold text-[rgb(var(--color-fg))]">
              {project.title}
            </h3>
            {project.badge ? (
              <span className="rounded bg-[rgb(var(--color-brand)/0.10)] px-2 py-1 text-xs text-[rgb(var(--color-brand))]">
                {project.badge}
              </span>
            ) : null}
          </div>
          <p className="mt-4 clamp-3 text-sm leading-relaxed text-[rgb(var(--color-muted))]">
            {project.description}
          </p>

          <ul
            className="mt-auto flex flex-wrap gap-2 pt-6"
            aria-label="Tech tags"
          >
            {(project.tags ?? project.techStack.slice(0, 3)).map((t) => (
              <li key={t}>
                <span
                  className="rounded px-2 py-1 text-[10px] font-bold"
                  style={{
                    background: "rgb(var(--color-tag-bg) / var(--tag-alpha))",
                    color: "rgb(var(--color-tag-fg))",
                  }}
                >
                  {t.toUpperCase()}
                </span>
              </li>
            ))}
          </ul>
        </header>
      </Link>

      <footer className="px-8 pb-8">
        <nav className="flex gap-4" aria-label={`${project.title} links`}>
          <a
            href={project.url || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!project.url}
            className="flex flex-1"
            onClick={!project.url ? (e) => e.preventDefault() : undefined}
          >
            <Button
              variant="contained"
              size="small"
              disabled={!project.url}
              startIcon={<VisibilityRoundedIcon sx={{ fontSize: 18 }} />}
              sx={{
                flex: 1,
                width: "100%",
                bgcolor: "rgb(var(--color-brand))",
                "&:hover": { bgcolor: "rgb(var(--color-brand) / 0.9)" },
                borderRadius: "var(--radius-md)",
                fontSize: 13,
                fontWeight: 700,
                py: 1.1,
              }}
            >
              Demo
            </Button>
          </a>
          <a
            href={project.repo || undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!project.repo}
            className="flex flex-1"
            onClick={!project.repo ? (e) => e.preventDefault() : undefined}
          >
            <Button
              variant="outlined"
              size="small"
              disabled={!project.repo}
              startIcon={<CodeRoundedIcon sx={{ fontSize: 18 }} />}
              sx={{
                flex: 1,
                width: "100%",
                borderRadius: "var(--radius-md)",
                bgcolor: "rgb(var(--color-bg-subtle))",
                borderColor: "rgb(var(--color-border) / var(--border-alpha))",
                color: "rgb(var(--color-fg))",
                fontSize: 13,
                fontWeight: 700,
                py: 1.1,
                "&:hover": { bgcolor: "rgb(var(--color-bg-subtle))" },
              }}
            >
              Repo
            </Button>
          </a>
        </nav>
      </footer>
    </Card>
  );
}
