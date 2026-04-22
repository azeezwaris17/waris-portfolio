"use client";

import { useMemo, useState } from "react";
import Typography from "@mui/material/Typography";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import TextArea from "@/components/ui/TextArea";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  // Hidden honeypot field; bots often fill this.
  website?: string;
};

export default function ContactSection() {
  const [status, setStatus] = useState<null | "ok" | "err">(null);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, "Enter your full name"),
        email: z.string().email("Enter a valid email"),
        message: z.string().min(10, "Tell me a bit more (10+ chars)"),
        website: z.string().optional(),
      }),
    [],
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactPayload>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", message: "", website: "" },
  });

  const mutation = useMutation({
    mutationFn: async (payload: ContactPayload) => {
      const { data } = await axios.post("/api/contact", payload, {
        headers: { "Content-Type": "application/json" },
      });
      return data as { ok: boolean };
    },
    onSuccess: () => {
      setStatus("ok");
      reset();
    },
    onError: () => setStatus("err"),
  });

  const onSubmit = handleSubmit((payload) => {
    setStatus(null);
    mutation.mutate(payload);
  });

  return (
    <Box
      component="section"
      id="contact"
      sx={{
        position: "relative",
        overflow: "hidden",
        py: 10,
        scrollMarginTop: 96,
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
        <Card
          component="section"
          sx={{
            borderRadius: 24,
            p: { xs: 4, md: 8 },
          }}
        >
          <section className="grid gap-16 lg:grid-cols-2" aria-label="Contact">
            <header>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 900,
                  fontSize: { xs: 32, md: 36 },
                  color: "rgb(var(--color-fg))",
                }}
              >
                Let&apos;s build something{" "}
                <span
                  style={{
                    color: "rgb(var(--color-brand))",
                    textDecoration: "underline",
                    textUnderlineOffset: "8px",
                  }}
                >
                  extraordinary
                </span>{" "}
                together.
              </Typography>
              <Typography
                sx={{
                  mt: 2,
                  fontSize: 18,
                  color: "rgb(var(--color-muted))",
                }}
              >
                Whether you have a specific project in mind or just want to
                chat about bioinformatics and the future of tech, I&apos;m always
                open to connecting.
              </Typography>

              <address className="mt-12 not-italic">
                <ul className="space-y-6">
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-12 place-items-center rounded-xl bg-[rgb(var(--color-brand)/0.10)] text-[rgb(var(--color-brand))]"
                    >
                      <MailOutlineRoundedIcon />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter text-[rgb(100_116_139)]">
                        Email me
                      </p>
                      <a
                        className="font-bold text-[rgb(var(--color-fg))]"
                        href="mailto:waris.azeez@engineer.com"
                      >
                        azeezwaris17@gmail.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="grid size-12 place-items-center rounded-xl bg-[rgb(var(--color-brand)/0.10)] text-[rgb(var(--color-brand))]"
                    >
                      <LocationOnOutlinedIcon />
                    </span>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-tighter text-[rgb(100_116_139)]">
                        Location
                      </p>
                      <p className="font-bold text-[rgb(var(--color-fg))]">
                      Lagos
                      </p>
                    </div>
                  </li>
                </ul>
              </address>
            </header>

            <form onSubmit={onSubmit} className="space-y-6">
              <fieldset className="space-y-6">
                <legend className="sr-only">Send a message</legend>
                {/* Honeypot field: hidden from humans, attractive to bots. */}
                <input
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                  {...register("website")}
                />
                <section className="grid gap-6 md:grid-cols-2">
                  <Field
                    id="contact-name"
                  label="Full Name"
                  error={errors.name?.message}
                  >
                    <Input
                      id="contact-name"
                      autoComplete="name"
                      placeholder="John Doe"
                      error={Boolean(errors.name)}
                      {...register("name")}
                      sx={inputSx}
                    />
                  </Field>
                  <Field
                    id="contact-email"
                  label="Email Address"
                  error={errors.email?.message}
                  >
                    <Input
                      id="contact-email"
                      autoComplete="email"
                      placeholder="john@example.com"
                      type="email"
                      error={Boolean(errors.email)}
                      {...register("email")}
                      sx={inputSx}
                    />
                  </Field>
                </section>
                <Field
                  id="contact-message"
                label="Your Message"
                error={errors.message?.message}
                >
                  <TextArea
                    id="contact-message"
                    placeholder="What's on your mind?"
                    rows={4}
                    error={Boolean(errors.message)}
                    {...register("message")}
                    sx={inputSx}
                  />
                </Field>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                disabled={mutation.isPending}
                endIcon={<Send size={18} />}
                sx={{
                  bgcolor: "rgb(var(--color-brand))",
                  "&:hover": { bgcolor: "rgb(var(--color-brand) / 0.9)" },
                  color: "white",
                  fontWeight: 800,
                  py: 2,
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "0 18px 30px -22px rgb(var(--color-brand) / 0.60)",
                }}
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </Button>

              {status ? (
                <p
                  className={[
                    "text-sm",
                    status === "ok"
                      ? "text-emerald-600"
                      : "text-rose-600",
                  ].join(" ")}
                >
                  {status === "ok"
                    ? "Message sent. Thank you!"
                    : "Something went wrong. Try again."}
                </p>
              ) : null}
              </fieldset>
            </form>
          </section>
        </Card>
      </Container>
    </Box>
  );
}

const inputSx = {
  "& .MuiInputBase-root": { borderRadius: "var(--radius-lg)" },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgb(var(--color-border) / 0.12)",
  },
  "& .MuiInputBase-input": {
    color: "rgb(var(--color-fg))",
  },
} as const;

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="text-xs font-bold uppercase text-[rgb(100_116_139)]"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="mt-1 text-xs text-rose-600">{error}</p>
      ) : null}
    </div>
  );
}
