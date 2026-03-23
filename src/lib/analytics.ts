type AnalyticsPayload = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    plausible?: (eventName: string, options?: { props?: Record<string, string | number | boolean> }) => void;
  }
}

export function trackEvent(eventName: string, payload?: AnalyticsPayload) {
  if (typeof window === "undefined" || typeof window.plausible !== "function") {
    return;
  }

  if (!payload) {
    window.plausible(eventName);
    return;
  }

  const props = Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== null)
  ) as Record<string, string | number | boolean>;

  window.plausible(eventName, { props });
}
