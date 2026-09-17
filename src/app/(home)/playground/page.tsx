import type { Metadata } from "next";
import ComingSoonSection from "@/components/coming-soon-section";

export const metadata: Metadata = {
  title: "Widget Playground | Geho",
  description:
    "An interactive space for trying the Geho website widget is coming soon.",
};

export default function PlaygroundPage() {
  return (
    <ComingSoonSection
      title="Widget Playground"
      description="We are building an interactive space where you can try
             the Geho website widget before adding it to your site."
    />
  );
}
