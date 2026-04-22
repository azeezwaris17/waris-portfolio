import TechCard from "@/components/tech/TechCard";
import type { TechCategory } from "@/types/tech";

export default function TechGrid({ items }: { items: TechCategory[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((tech) => (
        <TechCard key={tech.key} tech={tech} />
      ))}
    </div>
  );
}
