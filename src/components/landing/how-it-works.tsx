import { Bot, Code2, Database, Settings } from "lucide-react";
import { Badge } from "@/components/ui/badge";

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string };

const steps = [
  {
    icon: (p: IconProps) => <Settings {...p} />,
    title: "Connect your models",
    copy: "Add separate chat and embedding model configurations for your organization.",
  },
  {
    icon: (p: IconProps) => <Database {...p} />,
    title: "Add your knowledge",
    copy: "Create a knowledge base, add text sources, and let Geho split and index them for retrieval.",
  },
  {
    icon: (p: IconProps) => <Bot {...p} />,
    title: "Create and test a chatbot",
    copy: "Choose its instructions, chat model, and knowledge base, then verify its answers and citations.",
  },
  {
    icon: (p: IconProps) => <Code2 {...p} />,
    title: "Embed it on your website",
    copy: "Create an origin-restricted embed key and add the Geho React widget to your site.",
  },
];

export default function HowItWorks() {
  return (
    <section className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-12 md:grid-cols-[1fr_1.3fr] md:gap-16">
        <div className="md:sticky md:top-24 md:self-start">
          <Badge variant="secondary" className="mb-4 tracking-widest uppercase">
            How It Works
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            From company knowledge to website chatbot
          </h2>
          <p className="mt-4 text-muted-foreground">
            Geho keeps model configuration, retrieval, testing, and website
            delivery in one clear workflow.
          </p>
        </div>

        <ol className="flex flex-col">
          {steps.map(({ icon: Icon, title, copy }, index) => {
            const isLast = index === steps.length - 1;
            return (
              <li key={title} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-muted">
                    <Icon
                      className="size-4 text-foreground"
                      aria-hidden="true"
                    />
                  </span>
                  {!isLast && <span className="mt-1 w-px flex-1 bg-border" />}
                </div>

                <div className={isLast ? "pb-0" : "pb-10"}>
                  <h3 className="font-heading text-base font-semibold">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{copy}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
