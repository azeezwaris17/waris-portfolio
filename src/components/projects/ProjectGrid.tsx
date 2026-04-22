"use client";

import ProjectCard from "@/components/projects/ProjectCard";
import type { Project } from "@/types/project";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function ProjectGrid({ items }: { items: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [pageIndex, setPageIndex] = useState(0);
  const [perPage, setPerPage] = useState(1);

  useEffect(() => {
    const sm = window.matchMedia("(min-width: 640px)");
    const lg = window.matchMedia("(min-width: 1024px)");

    const update = () => {
      setPerPage(lg.matches ? 3 : sm.matches ? 2 : 1);
    };

    update();
    sm.addEventListener("change", update);
    lg.addEventListener("change", update);
    return () => {
      sm.removeEventListener("change", update);
      lg.removeEventListener("change", update);
    };
  }, []);

  const pages = useMemo(() => {
    const chunked: Project[][] = [];
    for (let i = 0; i < items.length; i += perPage) {
      chunked.push(items.slice(i, i + perPage));
    }
    return chunked;
  }, [items, perPage]);

  useEffect(() => {
    scrollerRef.current?.scrollTo({ left: 0 });
  }, [perPage]);

  const scrollToPage = useCallback(
    (idx: number) => {
      const el = scrollerRef.current;
      if (!el) return;
      const width = el.clientWidth;
      el.scrollTo({ left: idx * width, behavior: "smooth" });
    },
    [scrollerRef],
  );

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      const width = el.clientWidth;
      if (!width) return;
      const next = Math.round(el.scrollLeft / width);
      setPageIndex(Math.max(0, Math.min(next, pages.length - 1)));
    };

    update();
    el.addEventListener("scroll", update, { passive: true });

    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [pages.length]);

  return (
    <section aria-label="Projects carousel">
      <div
        ref={scrollerRef}
        className="flex w-full max-w-full snap-x snap-mandatory overflow-x-auto scroll-smooth"
        style={{
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {pages.map((page, idx) => (
          <div key={idx} className="min-w-full w-full shrink-0 snap-start">
            <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {page.map((project) => (
                <li key={project.slug} className="h-full min-w-0">
                  <ProjectCard project={project} />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {pages.length > 1 ? (
        <div className="mt-6 flex items-center justify-center gap-2">
          {pages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => scrollToPage(idx)}
              aria-label={`Go to projects group ${idx + 1}`}
              className="h-2.5 w-2.5 rounded-full transition-colors"
              style={{
                background:
                  pageIndex === idx
                    ? "rgb(var(--color-brand))"
                    : "rgb(var(--color-border) / 0.35)",
              }}
            />
          ))}
        </div>
      ) : null}
    </section>
  );
}
