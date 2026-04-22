import Chip from "@mui/material/Chip";

export default function ProjectTechStack({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Project tech stack">
      {items.map((t) => (
        <li key={t}>
          <Chip
            label={t}
            size="small"
            variant="outlined"
            sx={{
              height: 24,
              borderRadius: "var(--radius-full)",
              borderColor: "rgb(var(--color-border) / var(--border-alpha))",
              color: "rgb(var(--color-muted))",
              bgcolor: "rgb(var(--color-glass) / 0.10)",
              fontSize: 11,
              "& .MuiChip-label": { px: 1.2 },
            }}
          />
        </li>
      ))}
    </ul>
  );
}
