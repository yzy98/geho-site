import Link from "next/link";
import { Logo } from "@/lib/layout.shared";
import { gitConfig } from "@/lib/shared";

const NAV_LINKS = [
  { label: "Docs", href: "/docs" },
  { label: "Playground", href: "/playground" },
  {
    label: "Github",
    href: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  },
];

export default function Footer() {
  return (
    <footer className="mx-auto w-full max-w-(--fd-layout-width) px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <Logo />
          <span className="text-sm font-bold tracking-tight">Geho</span>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center gap-x-5 gap-y-1"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="shrink-0 text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Geho
        </p>
      </div>
    </footer>
  );
}
