import type { TechCategory } from "@/types/tech";

export default function TechCard({ tech }: { tech: TechCategory }) {
  return (
    <div className="rounded-2xl border border-(--card-border) bg-(--card) p-5 transition hover:border-white/25">
      <p className="text-sm font-semibold">{tech.title}</p>
      <ul className="mt-3 space-y-1 text-sm text-(--muted)">
        {tech.items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
