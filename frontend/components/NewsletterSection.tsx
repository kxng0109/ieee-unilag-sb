"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setMessage("");
    const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? "";
    try {
      const res = await fetch(`${baseUrl}/api/newsletter/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.success) {
        setStatus("success");
        setMessage(data.message ?? "Successfully subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(
          data.message ??
            data.errors?.[0]?.msg ??
            "Something went wrong. Please try again."
        );
      }
    } catch {
      setStatus("error");
      setMessage("Unable to connect. Please try again later.");
    }
  }

  return (
    <section
      className="w-full py-12 md:py-16"
      style={{ backgroundColor: "var(--ieee-newsletter-bg)" }}
    >
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2
          className="text-2xl font-semibold md:text-3xl"
          style={{ color: "var(--ieee-primary)" }}
        >
          Stay Connected
        </h2>
        <p
          className="mt-3 text-base leading-relaxed md:text-lg"
          style={{ color: "var(--ieee-newsletter-text)" }}
        >
          Get exclusive updates on upcoming events, workshops, project
          opportunities, and industry insights delivered straight to your inbox
          every week.
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row sm:items-stretch"
        >
          <Input
            type="email"
            placeholder="Enter your Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className={cn(
              "min-h-10 flex-1 rounded-md border-2 bg-white sm:min-w-0",
              "border-[var(--ieee-accent)] focus-visible:border-[var(--ieee-accent)] focus-visible:ring-[var(--ieee-accent)]/30"
            )}
            aria-label="Email address"
          />
          <Button
            type="submit"
            disabled={status === "loading"}
            className={cn(
              "min-h-10 shrink-0 rounded-md px-6 font-medium text-white",
              "bg-[var(--ieee-primary)] hover:bg-[var(--ieee-primary)]/90"
            )}
          >
            {status === "loading" ? "Subscribing…" : "Subscribe"}
          </Button>
        </form>
        {message && (
          <p
            className={cn(
              "mt-3 text-sm",
              status === "success"
                ? "text-green-700"
                : "text-red-600"
            )}
            role="alert"
          >
            {message}
          </p>
        )}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-8 w-8 rounded-full border-2 border-[var(--ieee-newsletter-bg)] bg-[var(--ieee-newsletter-text)]/20"
                aria-hidden
              />
            ))}
          </div>
          <div
            className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: "var(--ieee-accent)" }}
            aria-hidden
          >
            +4
          </div>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--ieee-newsletter-text)" }}
          >
            Join 200+ subscribers
          </span>
        </div>
      </div>
    </section>
  );
}
