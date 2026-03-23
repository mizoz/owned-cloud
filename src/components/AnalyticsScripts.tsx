"use client";

import Script from "next/script";
import { publicEnv } from "@/lib/public-env";

export function AnalyticsScripts() {
  if (!publicEnv.plausibleDomain) {
    return null;
  }

  const scriptHost = publicEnv.plausibleHost || "https://plausible.io";
  const scriptSrc = `${scriptHost.replace(/\/$/, "")}/js/script.outbound-links.pageview-props.js`;

  return <Script defer data-domain={publicEnv.plausibleDomain} src={scriptSrc} />;
}
