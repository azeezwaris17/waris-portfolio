import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
        borderTop: "1px solid rgb(var(--color-border) / 0.10)",
        backgroundColor: "rgb(var(--color-bg-subtle) / var(--section-alpha))",
        color: "rgb(var(--color-muted))",
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
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          spacing={{ xs: 2, md: 3 }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <Box
              aria-hidden="true"
              sx={{
                borderRadius: "var(--radius-md)",
                bgcolor: "rgb(var(--color-brand) / 0.20)",
                px: 1,
                py: 0.5,
              }}
            >
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 800,
                  color: "rgb(var(--color-brand))",
                }}
              >
                {"</>"}
              </Typography>
            </Box>
            <Typography sx={{ fontWeight: 800, color: "rgb(var(--color-fg))" }}>
              Waris Azeez
            </Typography>
          </Stack>

          {/* <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
            © {new Date().getFullYear()} Waris Azeez | Built with Next.js &amp;
            TypeScript
          </Typography> */}

          <Stack direction="row" spacing={{ xs: 2, md: 3 }}>
            <Link
              href="https://github.com/azeezwaris17"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontWeight: 700, color: "inherit", fontSize: 14 }}
            >
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/waris-azeez-134523216"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontWeight: 700, color: "inherit", fontSize: 14 }}
            >
              LinkedIn
            </Link>
            {/* <Link
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{ fontWeight: 700, color: "inherit", fontSize: 14 }}
            >
              Twitter
            </Link> */}
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
