"use client";

import Link, { LinkProps } from "next/link";
import { MouseEvent, PropsWithChildren } from "react";
import { trackEvent } from "@/lib/analytics";

type TrackedLinkProps = PropsWithChildren<
  LinkProps & {
    className?: string;
    eventName?: string;
    eventProps?: Record<string, string | number | boolean>;
    onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  }
>;

export function TrackedLink({ children, eventName, eventProps, onClick, ...props }: TrackedLinkProps) {
  return (
    <Link
      {...props}
      onClick={(event) => {
        if (eventName) {
          trackEvent(eventName, eventProps);
        }
        onClick?.(event);
      }}
    >
      {children}
    </Link>
  );
}
