"use client";

import TextField from "@mui/material/TextField";
import type { TextFieldProps } from "@mui/material/TextField";

export default function Input(props: TextFieldProps) {
  return (
    <TextField
      size="small"
      variant="outlined"
      fullWidth
      {...props}
      sx={[
        {
          "& .MuiInputBase-root": {
            borderRadius: "var(--radius-md)",
            bgcolor: "rgb(var(--color-input) / var(--input-alpha))",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "rgb(var(--color-border) / var(--border-alpha))",
          },
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}
