"use client";

import { PreviewCard as PreviewCardPrimitive } from "@base-ui/react/preview-card";
import Link from "fumadocs-core/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

const HoverCard = PreviewCardPrimitive.Root;

function HoverCardTrigger(props: ComponentProps<typeof Link>) {
  return <PreviewCardPrimitive.Trigger render={<Link {...props} />} />;
}

function HoverCardContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}: ComponentProps<typeof PreviewCardPrimitive.Popup> &
  Pick<
    ComponentProps<typeof PreviewCardPrimitive.Positioner>,
    "align" | "sideOffset"
  >) {
  return (
    <PreviewCardPrimitive.Portal>
      <PreviewCardPrimitive.Positioner
        align={align}
        className="z-50"
        sideOffset={sideOffset}
      >
        <PreviewCardPrimitive.Popup
          className={cn(
            "w-72 origin-(--transform-origin) rounded-lg border bg-fd-popover p-4 text-fd-popover-foreground shadow-md outline-none data-closed:animate-fd-popover-out data-open:animate-fd-popover-in",
            className,
          )}
          {...props}
        />
      </PreviewCardPrimitive.Positioner>
    </PreviewCardPrimitive.Portal>
  );
}

export { HoverCard, HoverCardContent, HoverCardTrigger };
