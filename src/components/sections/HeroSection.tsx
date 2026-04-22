import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function HeroSection() {
  const codePreview = `const engineer = {
  name: 'Waris Azeez',
  role: 'Full-Stack Engineer',
  specialties: [
    'Production-grade Web Solutions',
    'API Design & Integration',
    'Scalable System Architecture Design',

  ],
  status: 'Building the future',
};

function hire() {
  return engineer.passion > Infinity;
}`;

  return (
    <Box
      component="section"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
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
            gridTemplateColumns: {
              xs: "1fr",
              md: "1fr 1fr",
            },
            gap: 6,
            alignItems: "center",
          }}
        >
          <Stack component="article" spacing={4}>
            <Chip
              icon={
                <Box
                  sx={{
                    position: "relative",
                    width: 8,
                    height: 8,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    "@keyframes heroPing": {
                      "0%": { transform: "scale(1)", opacity: 0.75 },
                      "75%, 100%": { transform: "scale(2.25)", opacity: 0 },
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      inset: 0,
                      borderRadius: "50%",
                      bgcolor: "rgb(var(--color-brand))",
                      animation:
                        "heroPing 1.4s cubic-bezier(0, 0, 0.2, 1) infinite",
                    }}
                  />
                  <Box
                    sx={{
                      position: "relative",
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      bgcolor: "rgb(var(--color-brand))",
                    }}
                  />
                </Box>
              }
              label="Available for new opportunities"
              variant="outlined"
              sx={{
                width: "fit-content",
                borderRadius: "var(--radius-full)",
                borderColor: "rgb(var(--color-brand) / 0.20)",
                bgcolor: "rgb(var(--color-brand) / 0.10)",
                color: "rgb(var(--color-brand))",
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: 1.0,
                textTransform: "uppercase",
                "& .MuiChip-icon": { ml: 1.25, mr: 0.75 },
                "& .MuiChip-label": { px: 1.25 },
              }}
            />

            <Stack component="header" spacing={2}>
              <Typography
                component="h1"
                sx={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: { xs: 48, md: 72 },
                  lineHeight: 1.05,
                  letterSpacing: -1.0,
                  color: "rgb(var(--color-fg))",
                }}
              >
                Waris{" "}
                <Box component="span" sx={{ color: "rgb(var(--color-brand))" }}>
                  Azeez
                </Box>
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontSize: { xs: 18, md: 24 },
                  fontWeight: 700,
                  color: "rgb(var(--color-muted))",
                }}
              >
                Full-Stack Engineer |{" "}
                <Box
                  component="span"
                  sx={{ color: "rgb(var(--color-brand) / 0.80)" }}
                >
                  Bioinformatics Enthusiast
                </Box>
              </Typography>
              <Typography
                sx={{
                  fontSize: 18,
                  lineHeight: 1.75,
                  color: "rgb(var(--color-muted))",
                  maxWidth: 640,
                }}
              >
                Results-driven engineer with over 4yrs experience, building
                scalable, high-performance, user-centric web solutions, using
                React and Next.js, alongside robust backend and systems-oriented
                solutions with TypeScript, Express.js, and NestJS.
              </Typography>
            </Stack>

            <Stack
              component="nav"
              direction="row"
              spacing={2}
              useFlexGap
              flexWrap="wrap"
              alignItems="center"
              aria-label="Hero actions"
            >
              <Button
                href="/#projects"
                variant="contained"
                sx={{
                  bgcolor: "rgb(var(--color-brand))",
                  color: "white",
                  px: 4,
                  py: 2,
                  borderRadius: "var(--radius-lg)",
                  fontWeight: 800,
                  "&:hover": {
                    bgcolor: "rgb(var(--color-brand))",
                    transform: "scale(1.02)",
                  },
                  "&:active": { transform: "scale(0.95)" },
                }}
              >
                View Projects
              </Button>
              <Button
                href="/files/Waris_Azeez_CV.pdf"
                variant="contained"
                startIcon={<DownloadRoundedIcon />}
                sx={{
                  bgcolor: "rgb(226 232 240)",
                  color: "rgb(var(--color-fg))",
                  px: 4,
                  py: 2,
                  borderRadius: "var(--radius-lg)",
                  fontWeight: 800,
                  "&:hover": { bgcolor: "rgb(203 213 225)" },
                }}
              >
                Download CV
              </Button>
              <Link
                href="#contact"
                underline="none"
                sx={{ fontWeight: 800, color: "rgb(var(--color-brand))" }}
              >
                Contact Me →
              </Link>
            </Stack>
          </Stack>

          <Box
            component="aside"
            aria-label="Code preview"
            sx={{ position: "relative", display: { xs: "none", md: "block" } }}
          >
            <Box
              aria-hidden="true"
              sx={{
                position: "absolute",
                inset: -16,
                borderRadius: "999px",
                bgcolor: "rgb(var(--color-brand) / 0.10)",
                filter: "blur(48px)",
                zIndex: -1,
              }}
            />
            <Card
              sx={{
                position: "relative",
                borderRadius: 16,
                bgcolor: "rgb(var(--color-glass) / 0.80)",
                border: "1px solid rgb(var(--color-border) / 0.08)",
                boxShadow: "0 24px 50px -36px rgb(0 0 0 / 0.35)",
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Stack
                  component="header"
                  direction="row"
                  alignItems="center"
                  spacing={1}
                >
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: "rgb(248 113 113)",
                    }}
                  />
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: "rgb(251 191 36)",
                    }}
                  />
                  <Box
                    aria-hidden="true"
                    sx={{
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      bgcolor: "rgb(52 211 153)",
                    }}
                  />
                  <Typography
                    sx={{
                      ml: 1,
                      fontFamily: "var(--font-mono, ui-monospace)",
                      fontSize: 12,
                      color: "rgb(148 163 184)",
                    }}
                  >
                    portfolio.ts
                  </Typography>
                </Stack>

                <Divider
                  sx={{ my: 2, borderColor: "rgb(var(--color-border) / 0.06)" }}
                />

                <Box
                  component="pre"
                  sx={{
                    m: 0,
                    fontFamily: "var(--font-mono, ui-monospace)",
                    fontSize: 14,
                    lineHeight: 1.65,
                    color: "rgb(var(--color-muted))",
                    whiteSpace: "pre",
                    overflowX: "auto",
                  }}
                >
                  {codePreview}
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
