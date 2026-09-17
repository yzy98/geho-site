import { Bot, Code2, Database, KeyRound, Search, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

/** Props a call site may pass through to an icon. */
type IconProps = { className?: string; size?: number | string };

const features = [
  {
    icon: (p: IconProps) => <Server {...p} />,
    title: "Open source and self-hosted",
    copy: "Run Geho on your own infrastructure and keep control of your support platform and data.",
  },
  {
    icon: (p: IconProps) => <KeyRound {...p} />,
    title: "Bring your own models",
    copy: "Configure separate chat and embedding models, including providers with a custom base URL.",
  },
  {
    icon: (p: IconProps) => <Search {...p} />,
    title: "Transparent retrieval",
    copy: "Preview retrieved chunks before generation, then inspect the citations returned with chatbot answers.",
  },
  {
    icon: (p: IconProps) => <Database {...p} />,
    title: "Reusable knowledge bases",
    copy: "Index text sources once and share the same knowledge base across multiple chatbots.",
  },
  {
    icon: (p: IconProps) => <Bot {...p} />,
    title: "Chatbots for each use case",
    copy: "Combine focused system instructions, one chat model, and one knowledge base for each assistant.",
  },
  {
    icon: (p: IconProps) => <Code2 {...p} />,
    title: "Website-ready React widget",
    copy: "Publish a chatbot with a public embed key and restrict it to the website origins you approve.",
  },
];

export default function Features() {
  return (
    <section className="flex w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="mx-auto w-full max-w-5xl">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4 tracking-widest uppercase">
            Features
          </Badge>
          <h2 className="font-heading text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Everything you need for grounded website support
          </h2>
          <p className="mt-4 text-muted-foreground">
            Configure the full path from company knowledge to cited answers and
            embedded chat.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {features.map(({ icon: Icon, title, copy }) => (
            <Card key={title} className="p-6">
              <CardHeader className="p-0">
                <span className="flex size-11 items-center justify-center rounded-lg border border-border bg-muted">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <CardTitle className="mt-4 text-base font-semibold">
                  {title}
                </CardTitle>
                <CardDescription className="mt-2 text-sm">
                  {copy}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
