
import ProjectGrid from "@/components/projects/ProjectGrid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
  return (
    <Box
      component="section"
      id="projects"
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
          <Box>
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
              Featured Projects
            </Typography>
            <Typography
              sx={{
                mt: 1.5,
                fontSize: 16,
                color: "rgb(var(--color-muted))",
              }}
            >
              Real-world applications built to solve complex problems.
            </Typography>
          </Box>

          <Box sx={{ gridColumn: "1 / -1" }}>
            <ProjectGrid items={projects} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
