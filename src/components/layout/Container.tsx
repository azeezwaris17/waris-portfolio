import type { PropsWithChildren } from "react";
import clsx from "clsx";
import MuiContainer from "@mui/material/Container";

export default function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <MuiContainer
      maxWidth={false}
      sx={{
        px: { xs: 2, sm: 3, md: 4, lg: 5, xl: 6 },
        mx: 0,
        flex: 1,
      }}
    >
      <div className={clsx(" w-full max-w-360", className)}>
        {children}
      </div>
    </MuiContainer>
  );
}
