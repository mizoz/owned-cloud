import { NextResponse } from "next/server";
import { createMauticContact } from "@/lib/mautic";

type ContactRequest = {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  industry?: string;
  message?: string;
  website?: string;
  companySize?: string;
  honey?: string;
};

function sanitize(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as ContactRequest;
    if (sanitize(payload.honey)) {
      return NextResponse.json({ success: true });
    }

    const email = sanitize(payload.email);
    const name = sanitize(payload.name);
    const message = sanitize(payload.message);

    if (!email || !name || !message) {
      return NextResponse.json(
        { success: false, error: "Name, email, and project details are required." },
        { status: 400 }
      );
    }

    const mauticResult = await createMauticContact({
      email,
      firstname: name.split(" ")[0] ?? name,
      lastname: name.split(" ").slice(1).join(" "),
      phone: sanitize(payload.phone),
      company: sanitize(payload.businessName),
      website: sanitize(payload.website),
      industry: sanitize(payload.industry),
      notes: [
        "Source: owned-cloud.com/contact",
        payload.companySize ? `Company size: ${sanitize(payload.companySize)}` : "",
        `Message: ${message}`,
      ]
        .filter(Boolean)
        .join("\n"),
      tags: ["owned-cloud", "consultation-request", "starter-package"],
    });

    return NextResponse.json({
      success: true,
      data: {
        mauticId: mauticResult.id,
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unable to submit your request right now.";
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
