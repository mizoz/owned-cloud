"use client";

import { useEffect } from "react";

type ErrorPayload = {
  type: "error" | "unhandledrejection";
  message: string;
  stack?: string;
  path: string;
};

function sendClientError(payload: ErrorPayload) {
  const body = JSON.stringify(payload);
  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/monitoring/error", body);
    return;
  }

  void fetch("/api/monitoring/error", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  });
}

export function ClientErrorMonitor() {
  useEffect(() => {
    const onError = (event: ErrorEvent) => {
      sendClientError({
        type: "error",
        message: event.message || "Unknown client error",
        stack: event.error instanceof Error ? event.error.stack : undefined,
        path: window.location.pathname,
      });
    };

    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reason =
        typeof event.reason === "string"
          ? event.reason
          : event.reason instanceof Error
            ? event.reason.message
            : "Unhandled promise rejection";
      const stack = event.reason instanceof Error ? event.reason.stack : undefined;

      sendClientError({
        type: "unhandledrejection",
        message: reason,
        stack,
        path: window.location.pathname,
      });
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onUnhandledRejection);

    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
    };
  }, []);

  return null;
}
