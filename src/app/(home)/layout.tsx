import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Book, Bot } from "lucide-react";
import Footer from "@/components/footer";
import { baseOptions } from "@/lib/layout.shared";

const pool = (size: string, color: string, mid: string, out: string) =>
  `radial-gradient(${size}, ${color}, ${mid} 38%, ${out} 78%)`;

const wash = (base: string, a: number, b: number) => {
  const at = (v: number) => `rgba(${base},${v})`;
  return [
    pool("38% 13% at 84% 9%", at(a), at(a / 2), at(0)),
    pool("42% 13% at 12% 28%", at(b), at(b / 2), at(0)),
    pool("40% 12% at 70% 47%", at(a), at(a / 2), at(0)),
    pool("42% 12% at 14% 66%", at(b), at(b / 2), at(0)),
    pool("40% 13% at 74% 87%", at(a), at(a / 2), at(0)),
  ].join(",");
};

const WASH_LIGHT = wash("0,0,0", 0.04, 0.034);
const WASH_DARK = wash("255,255,255", 0.06, 0.051);

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          icon: <Book />,
          text: "Docs",
          url: "/docs",
          secondary: false,
        },
        {
          icon: <Bot />,
          text: "Playground",
          url: "/playground",
          secondary: false,
        },
      ]}
    >
      <div className="relative isolate flex flex-1 w-full flex-col bg-background text-foreground">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-180 bg-[radial-gradient(65%_60%_at_50%_-8%,rgba(0,0,0,0.06),transparent_72%)] dark:bg-[radial-gradient(65%_60%_at_50%_-8%,rgba(255,255,255,0.13),transparent_72%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 dark:hidden"
          style={{ backgroundImage: WASH_LIGHT }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 hidden dark:block"
          style={{ backgroundImage: WASH_DARK }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-140 bg-[radial-gradient(55%_50%_at_50%_100%,rgba(0,0,0,0.05),transparent_70%)] dark:bg-[radial-gradient(55%_50%_at_50%_100%,rgba(255,255,255,0.08),transparent_70%)]"
        />
        <div className="relative flex flex-1 flex-col">{children}</div>
        <div className="relative border-border/50 border-t">
          <Footer />
        </div>
      </div>
    </HomeLayout>
  );
}
