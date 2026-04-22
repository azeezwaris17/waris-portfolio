"use client";

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold tracking-wide text-white/60">
        {eyebrow.toUpperCase()}
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="mt-3 max-w-2xl text-sm leading-6 text-(--muted) sm:text-base">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
