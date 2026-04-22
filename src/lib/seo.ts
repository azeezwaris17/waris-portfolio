import type { Metadata } from "next";
import { SITE } from "@/lib/constants";

export function buildMetadata(overrides?: Partial<Metadata>): Metadata {
  return {
    title: SITE.title,
    description: SITE.description,
    metadataBase: new URL(SITE.url),
    openGraph: {
      title: SITE.title,
      description: SITE.description,
      type: "website",
    },
    ...overrides,
  };
}

