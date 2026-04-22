import { certifications } from "@/data/certifications";
import Card from "@/components/ui/Card";

export default function CertificationsSection() {
  return (
    <ul className="space-y-4" aria-label="Certifications">
      {certifications.map((c) => (
        <li key={c.title + c.issuer}>
          <Card
            component="article"
            sx={{
              px: 3,
              py: 2,
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 2,
            }}
          >
            <span className="font-bold text-[rgb(var(--color-fg))]">
              {c.title}
            </span>
            <span className="text-right text-xs text-[rgb(100_116_139)]">
              {c.issuer}
              {c.year ? <span className="opacity-75"> • {c.year}</span> : null}
            </span>
          </Card>
        </li>
      ))}
    </ul>
  );
}
