import { education } from "@/data/education";
import CertificationsSection from "@/components/sections/CertificationsSection";
import type { ReactNode } from "react";
import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@/components/ui/Card";
import Typography from "@mui/material/Typography";

export default function EducationSection() {
  return (
    <Box
      component="section"
      id="education"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
        scrollMarginTop: 96,
        backgroundColor: "rgb(var(--color-bg-subtle) / var(--section-alpha))",
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
        <Box component="section" aria-labelledby="education-title">
          <StackHeader
            id="education-title"
            icon={<SchoolRoundedIcon sx={{ color: "rgb(var(--color-brand))" }} />}
            title="Education"
          />
          <ul className="space-y-4" aria-label="Education items">
            {education.map((item) => (
              <li key={item.school + item.program}>
                <Card
                  component="article"
                  sx={{
                    p: 4,
                    borderRadius: 16,
                  }}
                >
                  <header className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl font-bold text-[rgb(var(--color-fg))]">
                      {item.program}
                    </h3>
                    <span className="text-xs font-bold text-[rgb(var(--color-muted))]">
                      {item.start} - {item.end}
                    </span>
                  </header>
                  <p className="mb-3 mt-1 font-medium text-[rgb(var(--color-brand))]">
                    {item.school}
                  </p>
                  {item.description ? (
                    <p className="text-sm leading-relaxed text-[rgb(var(--color-muted))]">
                      {item.description}
                    </p>
                  ) : null}
                </Card>
              </li>
            ))}
          </ul>
        </Box>

        <Box component="section" aria-labelledby="certifications-title">
          <StackHeader
            id="certifications-title"
            icon={
              <VerifiedRoundedIcon sx={{ color: "rgb(var(--color-brand))" }} />
            }
            title="Certifications"
          />
          <CertificationsSection />
        </Box>
        </Box>
      </Container>
    </Box>
  );
}

function StackHeader({
  id,
  icon,
  title,
}: {
  id: string;
  icon: ReactNode;
  title: string;
}) {
  return (
    <Box component="header" sx={{ mb: 5 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        <Box aria-hidden="true">{icon}</Box>
        <Typography
          component="h2"
          id={id}
          sx={{
            fontSize: 30,
            fontWeight: 800,
            color: "rgb(var(--color-fg))",
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
}
