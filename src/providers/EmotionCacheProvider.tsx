"use client";

import type { PropsWithChildren } from "react";
import { useState } from "react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";

type CacheState = {
  cache: ReturnType<typeof createCache>;
  flush: () => string[];
};

export default function EmotionCacheProvider({ children }: PropsWithChildren) {
  const [{ cache, flush }] = useState<CacheState>(() => {
    const cache = createCache({ key: "mui", prepend: true });
    cache.compat = true;

    const prevInsert = cache.insert;
    let inserted: string[] = [];

    cache.insert = (...args) => {
      const serialized = args[1];
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name);
      }
      return prevInsert(...args);
    };

    const flush = () => {
      const prevInserted = inserted;
      inserted = [];
      return prevInserted;
    };

    return { cache, flush };
  });

  useServerInsertedHTML(() => {
    const inserted = flush();
    if (inserted.length === 0) return null;

    let styles = "";
    for (const name of inserted) {
      styles += cache.inserted[name];
    }

    return (
      <style
        data-emotion={`${cache.key} ${inserted.join(" ")}`}
        dangerouslySetInnerHTML={{ __html: styles }}
      />
    );
  });

  return <CacheProvider value={cache}>{children}</CacheProvider>;
}

