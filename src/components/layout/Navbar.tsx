"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import TerminalRoundedIcon from "@mui/icons-material/TerminalRounded";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/hooks/useTheme";
import Button from "@/components/ui/Button";

const nav = [
  { id: "about", label: "About" },
  { id: "tech", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export default function Navbar() {
  const ids = useMemo(() => nav.map((n) => n.id), []);
  const active = useActiveSection(ids);
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node | null;
      if (!target) return;
      if (menuRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
    };
  }, [open]);

  return (
    <Box
      component="header"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        width: "100%",
        overflow: "visible",
        py: 2,
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

      <Paper
        component="div"
        elevation={0}
        sx={{
          px: 0,
          py: 0,
          borderRadius: "var(--radius-lg)",
          bgcolor: "rgb(var(--color-glass) / var(--glass-alpha))",
          border: "1px solid rgb(var(--color-glass-border) / var(--glass-border-alpha))",
          backdropFilter: "blur(var(--blur-backdrop))",
          boxShadow: "var(--shadow-sm)",
          overflow: "visible",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1232px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2,
          }}
        >
          <Link
            href="/"
            underline="none"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              cursor: "pointer",
              color: "rgb(var(--color-fg))",
            }}
          >
            <Box
              sx={{
                bgcolor: "rgb(var(--color-brand))",
                p: 0.75,
                borderRadius: "var(--radius-md)",
                transform: "rotate(3deg)",
                transitionDuration: "var(--duration-normal)",
                transitionTimingFunction: "var(--ease-standard)",
                "&:hover": { transform: "rotate(0deg)" },
                color: "white",
                display: "grid",
                placeItems: "center",
              }}
            >
              <TerminalRoundedIcon fontSize="small" />
            </Box>
            <Box
              component="span"
              sx={{ fontSize: 18, fontWeight: 800, letterSpacing: -0.2 }}
            >
              Waris Azeez
            </Box>
          </Link>

          <Box
            component="nav"
            aria-label="Primary"
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 4,
              fontSize: 14,
              fontWeight: 600,
            }}
          >
            {nav.map((n) => (
              <Link
                key={n.id}
                href={`#${n.id}`}
                underline="none"
                sx={{
                  transitionDuration: "var(--duration-normal)",
                  transitionTimingFunction: "var(--ease-standard)",
                  color:
                    active === n.id
                      ? "rgb(var(--color-brand))"
                      : "rgb(var(--color-muted))",
                  "&:hover": { color: "rgb(var(--color-brand))" },
                }}
              >
                {n.label}
              </Link>
            ))}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Button
              href="/#contact"
              variant="contained"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                bgcolor: "rgb(var(--color-brand))",
                color: "rgb(var(--color-brand-contrast))",
                px: 2.5,
                py: 1,
                fontSize: 12,
                fontWeight: 700,
                borderRadius: "var(--radius-md)",
                boxShadow: "0 10px 25px -15px rgb(var(--color-brand) / 0.55)",
                "&:hover": { bgcolor: "rgb(var(--color-brand) / 0.9)" },
              }}
            >
              Get in Touch
            </Button>

            <Box
              sx={{
                position: "relative",
                display: { xs: "inline-flex", md: "none" },
              }}
            >
              <IconButton
                ref={triggerRef}
                aria-label="Open menu"
                aria-haspopup="menu"
                aria-expanded={open ? "true" : "false"}
                onClick={() => setOpen((v) => !v)}
                sx={{
                  border:
                    "1px solid rgb(var(--color-border) / var(--border-alpha))",
                  borderRadius: "var(--radius-md)",
                  color: "rgb(var(--color-fg))",
                }}
              >
                <MenuRoundedIcon fontSize="small" />
              </IconButton>

              {open ? (
                <Paper
                  ref={menuRef}
                  role="menu"
                  elevation={0}
                  sx={{
                    position: "absolute",
                    top: "calc(100% + 10px)",
                    right: 0,
                    width: 260,
                    p: 1,
                    borderRadius: "var(--radius-lg)",
                    bgcolor: "rgb(var(--color-glass) / var(--glass-alpha))",
                    border:
                      "1px solid rgb(var(--color-glass-border) / var(--glass-border-alpha))",
                    backdropFilter: "blur(var(--blur-backdrop))",
                    boxShadow: "var(--shadow-md)",
                    zIndex: 60,
                  }}
                >
                  <Box
                    component="nav"
                    aria-label="Mobile"
                    sx={{ display: "grid", gap: 0.5, p: 0.5 }}
                  >
                    {nav.map((n) => (
                      <Link
                        key={n.id}
                        href={`#${n.id}`}
                        role="menuitem"
                        underline="none"
                        onClick={() => setOpen(false)}
                        sx={{
                          px: 1.25,
                          py: 1,
                          borderRadius: "var(--radius-md)",
                          fontSize: 14,
                          fontWeight: active === n.id ? 800 : 700,
                          color:
                            active === n.id
                              ? "rgb(var(--color-brand))"
                              : "rgb(var(--color-fg))",
                          "&:hover": {
                            bgcolor: "rgb(var(--color-brand) / 0.10)",
                            color: "rgb(var(--color-brand))",
                          },
                        }}
                      >
                        {n.label}
                      </Link>
                    ))}
                  </Box>

                  <Box sx={{ p: 0.5, pt: 1 }}>
                    <Button
                      fullWidth
                      href="/#contact"
                      variant="contained"
                      onClick={() => setOpen(false)}
                      sx={{
                        bgcolor: "rgb(var(--color-brand))",
                        color: "rgb(var(--color-brand-contrast))",
                        borderRadius: "var(--radius-md)",
                        py: 1.1,
                        "&:hover": { bgcolor: "rgb(var(--color-brand) / 0.9)" },
                      }}
                    >
                      Get in Touch
                    </Button>
                  </Box>
                </Paper>
              ) : null}
            </Box>

            <IconButton
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              sx={{
                height: 40,
                width: 40,
                borderRadius: "var(--radius-lg)",
                border:
                  "1px solid rgb(var(--color-glass-border) / var(--glass-border-alpha))",
                bgcolor: "rgb(var(--color-glass) / var(--glass-alpha))",
                color: "rgb(var(--color-muted))",
                transitionDuration: "var(--duration-normal)",
                transitionTimingFunction: "var(--ease-standard)",
                "&:hover": {
                  bgcolor: "rgb(var(--color-brand) / 0.10)",
                  color: "rgb(var(--color-brand))",
                },
              }}
            >
              {theme === "dark" ? (
                <LightModeOutlinedIcon fontSize="small" />
              ) : (
                <DarkModeOutlinedIcon fontSize="small" />
              )}
            </IconButton>
          </Box>
        </Container>
      </Paper>
    </Box>
  );
}
