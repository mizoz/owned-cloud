import { NextResponse } from "next/server";

type MonitoringErrorRequest = {
  type?: "error" | "unhandledrejection";
  message?: string;
  stack?: string;
  path?: string;
};

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as MonitoringErrorRequest;
    const message = sanitize(payload.message);
    if (!message) {
      return NextResponse.json({ success: false, error: "Missing error message." }, { status: 400 });
    }

    const path = sanitize(payload.path);
    const type = payload.type === "unhandledrejection" ? "unhandledrejection" : "error";
    const stack = sanitize(payload.stack);

    console.error("[client-monitoring]", {
      type,
      message,
      stack,
      path,
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ success: false, error: "Unable to process monitoring event." }, { status: 500 });
  }
}
