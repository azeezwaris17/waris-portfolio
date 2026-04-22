import Typography from "@mui/material/Typography";
import CodeRoundedIcon from "@mui/icons-material/CodeRounded";
import DnsRoundedIcon from "@mui/icons-material/DnsRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import CloudRoundedIcon from "@mui/icons-material/CloudRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { techStack } from "@/data/techstack";
import Card from "@/components/ui/Card";

export default function TechStackSection() {
  return (
    <Box
      component="section"
      id="tech"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
        scrollMarginTop: 96,
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(circle at 50% 50%, rgb(var(--color-brand) / 0.08) 0%, transparent 60%)",
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1232px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          <Box sx={{ gridColumn: "1 / -1" }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "var(--font-heading)",
              fontWeight: 900,
              fontSize: { xs: 32, md: 36 },
              letterSpacing: -0.4,
              color: "rgb(var(--color-fg))",
            }}
          >
            Tech Stack
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              fontSize: 16,
              color: "rgb(var(--color-muted))",
              maxWidth: 640,
              // mx: "auto",
            }}
          >
            Building modern, performant applications using industry-leading
            technologies across the full development lifecycle.
          </Typography>
          </Box>

          <Box
            component="ul"
            sx={{
              gridColumn: "1 / -1",
              listStyle: "none",
              p: 0,
              m: 0,
              display: "grid",
              gap: 3,
              gridTemplateColumns: {
                xs: "1fr",
                md: "repeat(2, 1fr)",
                lg: "repeat(5, 1fr)",
              },
            }}
          >
            {techStack.map((c) => (
              <Box component="li" key={c.key}>
                <TechCard title={c.title} items={c.items} iconKey={c.key} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

function iconFor(key: string) {
  switch (key) {
    case "frontend":
      return <CodeRoundedIcon fontSize="small" />;
    case "backend":
      return <DnsRoundedIcon fontSize="small" />;
    case "database":
      return <StorageRoundedIcon fontSize="small" />;
    case "devops":
      return <CloudRoundedIcon fontSize="small" />;
    case "data":
      return <ScienceRoundedIcon fontSize="small" />;
    default:
      return <CodeRoundedIcon fontSize="small" />;
  }
}

function borderFor(key: string) {
  switch (key) {
    case "frontend":
      return "rgb(59 130 246 / 0.85)";
    case "backend":
      return "rgb(16 185 129 / 0.85)";
    case "database":
      return "rgb(168 85 247 / 0.85)";
    case "devops":
      return "rgb(249 115 22 / 0.85)";
    case "data":
      return "rgb(var(--color-brand) / 0.85)";
    default:
      return "rgb(var(--color-border) / var(--border-alpha))";
  }
}

function TechCard({
  title,
  items,
  iconKey,
}: {
  title: string;
  items: string[];
  iconKey: string;
}) {
  return (
    <Card
      component="article"
      sx={{
        p: 2,
        borderRadius: "var(--radius-md)",
        borderTop: `4px solid ${borderFor(iconKey)}`,
        transitionDuration: "var(--duration-normal)",
        transitionTimingFunction: "var(--ease-standard)",
        "&:hover": { transform: "translateY(-2px)" },
      }}
    >
      <header className="flex items-center gap-2">
        <span aria-hidden="true" className="text-[rgb(var(--color-fg))]">
          {iconFor(iconKey)}
        </span>
        <h3 className="text-sm font-bold text-[rgb(var(--color-fg))]">
          {title}
        </h3>
      </header>
      <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--color-muted))]">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </Card>
  );
}
