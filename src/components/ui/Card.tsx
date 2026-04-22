"use client";

import type { PropsWithChildren } from "react";
import Paper from "@mui/material/Paper";
import type { PaperProps } from "@mui/material/Paper";

export type CardProps = PropsWithChildren<PaperProps>;

export default function Card({ children, className, sx, ...props }: CardProps) {
  return (
    <Paper
      className={className}
      elevation={0}
      {...props}
      sx={[
        {
          p: 2.5,
          borderRadius: "var(--radius-lg)",
          bgcolor: "rgb(var(--color-glass) / var(--glass-alpha))",
          border: "1px solid rgb(var(--color-glass-border) / var(--glass-border-alpha))",
          backdropFilter: "blur(var(--blur-backdrop))",
          boxShadow: "var(--shadow-sm)",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Paper>
  );
}
