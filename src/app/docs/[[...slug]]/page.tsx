import Link from "fumadocs-core/link";
import { PathUtils } from "fumadocs-core/source";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
  PageLastUpdate,
} from "fumadocs-ui/layouts/docs/page";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMDXComponents } from "@/components/mdx";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { getPageImageUrl } from "@/lib/shared";
import { source } from "@/lib/source";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    notFound();
  }

  const MDX = page.data.body;
  const lastModifiedTime = page.data.lastModified;

  return (
    <DocsPage full={page.data.full} toc={page.data.toc}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a({ href, ...props }) {
              const found = source.getPageByHref(href ?? "", {
                dir: PathUtils.dirname(page.path),
              });

              if (!found) {
                return <Link href={href} {...props} />;
              }

              const resolvedHref = found.hash
                ? `${found.page.url}#${found.hash}`
                : found.page.url;

              return (
                <HoverCard>
                  <HoverCardTrigger href={resolvedHref} {...props}>
                    {props.children}
                  </HoverCardTrigger>
                  <HoverCardContent className="text-sm">
                    <p className="font-medium">{found.page.data.title}</p>
                    {found.page.data.description ? (
                      <p className="mt-1 text-fd-muted-foreground">
                        {found.page.data.description}
                      </p>
                    ) : null}
                  </HoverCardContent>
                </HoverCard>
              );
            },
          })}
        />
      </DocsBody>
      {lastModifiedTime && <PageLastUpdate date={lastModifiedTime} />}
    </DocsPage>
  );
}

// biome-ignore lint/suspicious/useAwait: ignore
export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    notFound();
  }

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImageUrl(page).url,
    },
  };
}
