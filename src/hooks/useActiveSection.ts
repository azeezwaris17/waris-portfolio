"use client";

import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const topOffset = 120;

    const getActiveId = () => {
      const byTop = elements
        .map((el) => ({ id: el.id, top: el.getBoundingClientRect().top }))
        .sort((a, b) => a.top - b.top);

      const passed = byTop.filter((s) => s.top <= topOffset);
      if (passed.length) return passed[passed.length - 1]?.id ?? null;
      return byTop[0]?.id ?? null;
    };

    const update = () => setActive(getActiveId());

    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", update);

    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", update);
    };
  }, [sectionIds]);

  return active;
}
