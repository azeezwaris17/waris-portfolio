"use client";

import Chip from "@mui/material/Chip";
import type { ChipProps } from "@mui/material/Chip";

export default function Badge(props: ChipProps) {
  return (
    <Chip
      size="small"
      variant="outlined"
      {...props}
      sx={[
        {
          height: 22,
          borderRadius: "var(--radius-full)",
          borderColor: "rgb(var(--color-border) / var(--border-alpha))",
          bgcolor: "rgb(var(--color-glass) / 0.10)",
          color: "rgb(var(--color-fg))",
          fontSize: 11,
          "& .MuiChip-label": { px: 1.25 },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}
