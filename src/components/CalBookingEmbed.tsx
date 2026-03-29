"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect, useMemo } from "react";

function extractCalNamespace(calLink: string) {
  const value = calLink.trim().replace(/^https?:\/\/(?:[^/]+)\//, "");

  if (!value) {
    return "owned-cloud-intake";
  }

  const slug = value.split("?")[0].split("#")[0].split("/").at(-1);
  return slug || "owned-cloud-intake";
}

export function CalBookingEmbed({ calLink }: { calLink: string }) {
  const namespace = useMemo(() => extractCalNamespace(calLink || ""), [calLink]);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, [namespace]);

  return (
    <Cal
      namespace={namespace}
      calLink={calLink}
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
    />
  );
}
