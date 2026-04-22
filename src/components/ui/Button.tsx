"use client";

import MuiButton from "@mui/material/Button";
import type { ButtonProps as MuiButtonProps } from "@mui/material/Button";

export type ButtonProps = MuiButtonProps;

export default function Button(props: ButtonProps) {
  return (
    <MuiButton
      disableElevation
      {...props}
      sx={[
        {
          borderRadius: "var(--radius-md)",
          textTransform: "none",
          fontWeight: 600,
          transitionDuration: "var(--duration-normal)",
          transitionTimingFunction: "var(--ease-standard)",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}
