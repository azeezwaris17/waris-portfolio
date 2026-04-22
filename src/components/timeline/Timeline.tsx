import TimelineItem from "@/components/timeline/TimelineItem";
import type { Experience } from "@/types/experience";

export default function Timeline({ items }: { items: Experience[] }) {
  return (
    <div className="grid gap-4">
      {items.map((item) => (
        <TimelineItem key={item.title + item.company} item={item} />
      ))}
    </div>
  );
}

