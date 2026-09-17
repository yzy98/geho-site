import { Badge } from "@/components/ui/badge";

type ComingSoonSectionProps = {
  title: string;
  description: string;
};

export default function ComingSoonSection({
  title,
  description,
}: ComingSoonSectionProps) {
  return (
    <section className="flex flex-1 w-full items-center justify-center overflow-hidden px-6 py-16">
      <div className="flex w-full max-w-xl flex-col items-center text-center">
        <Badge variant="secondary">Coming Soon</Badge>
        <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-md text-lg text-pretty text-muted-foreground">
          {description}
        </p>
      </div>
    </section>
  );
}
