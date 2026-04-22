import Badge from "@/components/ui/Badge";
import type { Experience } from "@/types/experience";

export default function TimelineItem({ item }: { item: Experience }) {
  return (
    <div className="rounded-2xl border border-(--card-border) bg-(--card) p-5">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-semibold">{item.title}</p>
          <p className="text-sm text-white/70">{item.company}</p>
        </div>
        <p className="text-sm text-(--muted)">
          {item.start} – {item.end}
        </p>
      </div>
      <p className="mt-3 text-sm text-(--muted)">{item.summary}</p>
      {item.highlights?.length ? (
        <ul className="mt-4 grid gap-2 text-sm text-white/70">
          {item.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/40" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      ) : null}
      {item.tech?.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
      ) : null}
    </div>
  );
}
