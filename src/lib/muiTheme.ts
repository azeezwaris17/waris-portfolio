import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "rgb(var(--color-brand))" },
    secondary: { main: "rgb(var(--color-brand-2))" },
    background: {
      default: "rgb(var(--color-bg))",
      paper: "rgb(var(--color-glass) / var(--glass-alpha))",
    },
    text: {
      primary: "rgb(var(--color-fg))",
      secondary: "rgb(var(--color-muted))",
    },
    divider: "rgb(var(--color-border) / var(--border-alpha))",
  },
  typography: {
    fontFamily: "var(--font-body)",
    h1: { fontFamily: "var(--font-heading)", fontWeight: 800 },
    h2: { fontFamily: "var(--font-heading)", fontWeight: 800 },
    h3: { fontFamily: "var(--font-heading)", fontWeight: 700 },
    h4: { fontFamily: "var(--font-heading)", fontWeight: 700 },
    h5: { fontFamily: "var(--font-heading)", fontWeight: 700 },
    h6: { fontFamily: "var(--font-heading)", fontWeight: 700 },
    body1: { fontWeight: 400 },
    body2: { fontWeight: 400 },
  },
  shape: { borderRadius: 0 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(var(--color-bg))",
          color: "rgb(var(--color-fg))",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "inherit",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundImage: "none",
          border: "1px solid rgb(var(--color-border) / var(--border-alpha))",
          boxShadow: "var(--shadow-sm)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-md)",
          textTransform: "none",
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-standard)",
          fontWeight: 600,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-full)",
          border: "1px solid rgb(var(--color-border) / var(--border-alpha))",
          backgroundColor: "rgb(var(--color-glass) / 0.10)",
          color: "rgb(var(--color-fg))",
          height: 24,
        },
        label: {
          fontSize: 12,
          paddingLeft: 10,
          paddingRight: 10,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: "var(--radius-md)",
          backgroundColor: "rgb(var(--color-input) / var(--input-alpha))",
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-standard)",
        },
        notchedOutline: {
          borderColor: "rgb(var(--color-border) / var(--border-alpha))",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "rgb(var(--color-muted))",
        },
      },
    },
  },
});
