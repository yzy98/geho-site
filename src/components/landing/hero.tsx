import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative isolate flex w-full items-center justify-center overflow-hidden px-6 py-16 sm:py-24">
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-0 -z-10",
          "bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)]",
          "bg-[size:56px_56px] opacity-40",
          "[mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,black,transparent)]",
        )}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,var(--color-primary)/0.12,transparent)]"
      />

      <div className="mx-auto flex w-full max-w-2xl flex-col items-center text-center">
        <Badge variant="secondary" className="px-3 py-1">
          <Sparkles data-icon="inline-start" className="size-3.5" />
          Open source and self-hosted
        </Badge>

        <h1 className="mt-6 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
          Build support chatbots grounded in your company knowledge
        </h1>

        <p className="mt-5 max-w-xl text-base text-balance text-muted-foreground sm:text-lg">
          Geho combines transparent RAG, your choice of chat and embedding
          models, and an embeddable React widget in one self-hosted platform.
        </p>

        <Button
          size="lg"
          className="mt-5 h-11 shrink-0"
          nativeButton={false}
          render={<Link href="/docs" />}
        >
          Get Started
          <ArrowRight data-icon="inline-end" className="size-4" />
        </Button>
      </div>
    </section>
  );
}
