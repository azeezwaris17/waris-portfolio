"use client";

import type { PropsWithChildren } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { muiTheme } from "@/lib/muiTheme";
import EmotionCacheProvider from "@/providers/EmotionCacheProvider";

export default function MuiProvider({ children }: PropsWithChildren) {
  return (
    <EmotionCacheProvider>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </EmotionCacheProvider>
  );
}
