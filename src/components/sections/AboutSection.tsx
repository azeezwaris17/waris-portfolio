import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Card from "@/components/ui/Card";
import Image from "next/image";

export default function AboutSection() {
  return (
    <Box
      component="section"
      id="about"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
        scrollMarginTop: 96,
        backgroundColor: "rgb(var(--color-bg-subtle) / var(--section-alpha))",
      }}
    >
      <Box
        aria-hidden="true"
        sx={{
          pointerEvents: "none",
          position: "absolute",
          inset: 0,
          zIndex: -1,
          background:
            "radial-gradient(circle at 50% 50%, rgb(var(--color-brand) / 0.08) 0%, transparent 60%)",
        }}
      />

      <Container
        maxWidth={false}
        sx={{
          maxWidth: "1232px",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 6,
            alignItems: "center",
          }}
        >
          <figure className="relative group">
            <span
              aria-hidden="true"
              className="absolute -inset-2 rounded-2xl bg-[rgb(var(--color-brand))] rotate-3 transition-transform group-hover:rotate-0"
            />
            <span className="relative block aspect-square overflow-hidden rounded-2xl border-4 border-[rgb(var(--color-fg))] bg-[rgb(var(--bg-subtle))]">
              <Image
                src="/images/profile/waris.jpg"
                alt="Professional headshot of Waris Azeez smiling"
                fill
                priority={false}
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </span>
          </figure>

          <article className="space-y-8">
            <header>
              <h2 className="border-l-4 border-[rgb(var(--color-brand))] pl-4 text-3xl font-bold uppercase tracking-tighter text-[rgb(var(--color-fg))]">
                About Me
              </h2>
            </header>
            <Typography
              sx={{
                fontSize: 18,
                lineHeight: 1.8,
                color: "rgb(var(--color-muted))",
              }}
            >
              I’m a Full-Stack Engineer with over 4 years of experience building
              scalable, high-performance web applications. 
              <br />
              I enjoy working across the entire development
              lifecycle, from translating design concepts into intuitive user
              interfaces to designing robust APIs and backend systems that power
              them. 
              <br />
              My approach to development is rooted in writing clean,
              maintainable code and building systems that are not only
              functional but also efficient and easy to scale. 
              <br />
           I’m particularly interested in solving real-world
              problems through technology, continuously improving performance,
              and refining user experience. I also value collaboration, clear
              communication, and staying up to date with modern tools and best
              practices. 
              <br />
             Outside of coding, I have a background in Life Sciences and a strong interest in bioinformatics, cybersecurity, and data analysis and constantly exploring ways to grow as an engineer and build
              products that deliver meaningful impact.
            </Typography>

            <dl className="grid grid-cols-3 gap-6">
              <Stat value="4+" label="Years Exp" />
              <Stat value="15+" label="Projects" />
              <Stat value="20+" label="Tech Stack" />
            </dl>
          </article>
        </Box>
      </Container>
    </Box>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <Card
      component="div"
      sx={{
        p: 3,
        textAlign: "center",
        borderRadius: "var(--radius-lg)",
      }}
    >
      <dd className="mb-1 text-3xl font-black text-[rgb(var(--color-brand))]">
        {value}
      </dd>
      <dt className="text-xs font-bold uppercase tracking-widest text-[rgb(148_163_184)]">
        {label}
      </dt>
    </Card>
  );
}
