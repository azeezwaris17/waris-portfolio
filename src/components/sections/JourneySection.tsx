import Typography from "@mui/material/Typography";
import WorkRoundedIcon from "@mui/icons-material/WorkRounded";
import StorageRoundedIcon from "@mui/icons-material/StorageRounded";
import BiotechRoundedIcon from "@mui/icons-material/BiotechRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { experience } from "@/data/experience";
import Card from "@/components/ui/Card";

export default function JourneySection() {
  const left = experience.slice(0, 3);
  const right = experience.slice(3, 6);

  return (
    <Box
      component="section"
      id="experience"
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
        <Box sx={{ textAlign: "left", maxWidth: 780, }}>
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
            Professional Journey
          </Typography>
          <Typography
            sx={{
              mt: 1.5,
              fontSize: 16,
              color: "rgb(var(--color-muted))",
              maxWidth: 640,
            }}
          >
            Key roles and milestones that shaped my experience in building
            reliable products and systems.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 6,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 4,
            alignItems: "start",
          }}
        >
          <Timeline items={left} startIdx={0} />
          {right.length ? <Timeline items={right} startIdx={left.length} /> : null}
        </Box>
      </Container>
    </Box>
  );
}

function iconFor(idx: number) {
  if (idx % 3 === 0) return <WorkRoundedIcon sx={{ fontSize: 16 }} />;
  if (idx % 3 === 1) return <StorageRoundedIcon sx={{ fontSize: 16 }} />;
  return <BiotechRoundedIcon sx={{ fontSize: 16 }} />;
}

function Timeline({
  items,
  startIdx,
}: {
  items: typeof experience;
  startIdx: number;
}) {
  return (
    <Box
      component="ol"
      className="relative space-y-10 pl-12 before:absolute before:left-5 before:top-0 before:h-full before:w-0.5 before:bg-linear-to-b before:from-transparent before:via-[rgb(51_65_85)] before:to-transparent"
    >
      {items.map((item, idx) => (
        <TimelineItem
          key={item.title + item.company}
          item={item}
          idx={startIdx + idx}
        />
      ))}
    </Box>
  );
}

function TimelineItem({
  item,
  idx,
}: {
  item: (typeof experience)[number];
  idx: number;
}) {
  const range =
    item.end === "Present"
      ? `${item.start} - Present`
      : `${item.start} - ${item.end}`;

  return (
    <li className="relative">
      <span
        aria-hidden="true"
        className="absolute left-0 top-4 flex size-10 items-center justify-center rounded-full border border-[rgb(51_65_85)] text-[rgb(var(--color-brand))] shadow"
      >
        {iconFor(idx)}
      </span>

      <Card
        component="article"
        className="w-full"
        sx={{
          p: 3,
          borderRadius: 16,
        }}
      >
        <header className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-bold text-[rgb(var(--color-fg))]">
            {item.title}
          </h3>
          <span className="text-xs font-bold text-[rgb(var(--color-muted))]">
            {range}
          </span>
        </header>
        <p className="mb-4 text-sm font-bold text-[rgb(100_116_139)]">
          {item.company}
        </p>
        <p className="text-sm leading-relaxed text-[rgb(var(--color-muted))]">
          {item.summary}
        </p>
      </Card>
    </li>
  );
}
