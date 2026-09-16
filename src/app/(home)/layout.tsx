import { HomeLayout } from "fumadocs-ui/layouts/home";
import { Book, Bot } from "lucide-react";
import { baseOptions } from "@/lib/layout.shared";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <HomeLayout
      {...baseOptions()}
      links={[
        {
          icon: <Book />,
          text: "Documentation",
          url: "/docs",
          secondary: false,
        },
        {
          icon: <Bot />,
          text: "Widget Playground",
          url: "/playground",
          secondary: false,
        },
      ]}
    >
      {children}
    </HomeLayout>
  );
}
