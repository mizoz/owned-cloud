import { serverEnv } from "@/lib/server-env";

type TokenResponse = {
  access_token?: string;
  error?: string;
};

type CreateContactPayload = {
  email: string;
  firstname?: string;
  lastname?: string;
  phone?: string;
  company?: string;
  website?: string;
  industry?: string;
  notes?: string;
  tags?: string[];
};

type MauticCreateResponse = {
  contact?: {
    id?: number;
  };
  errors?: Array<{ message?: string }>;
};

async function getAccessToken() {
  if (!serverEnv.mauticUrl || !serverEnv.mauticClientId || !serverEnv.mauticClientSecret) {
    throw new Error("Mautic is not configured.");
  }

  const response = await fetch(`${serverEnv.mauticUrl}/oauth/v2/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
      client_id: serverEnv.mauticClientId,
      client_secret: serverEnv.mauticClientSecret,
    }),
    cache: "no-store",
  });

  const payload = (await response.json()) as TokenResponse;
  if (!response.ok || !payload.access_token) {
    throw new Error(payload.error || "Unable to authenticate with Mautic.");
  }

  return payload.access_token;
}

export async function createMauticContact(input: CreateContactPayload) {
  const token = await getAccessToken();
  const response = await fetch(`${serverEnv.mauticUrl}/api/contacts/new`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      email: input.email,
      firstname: input.firstname ?? "",
      lastname: input.lastname ?? "",
      phone: input.phone ?? "",
      company: input.company ?? "",
      website: input.website ?? "",
      industry: input.industry ?? "",
      notes: input.notes ?? "",
      tags: (input.tags ?? []).join(","),
    }),
    cache: "no-store",
  });

  const payload = (await response.json()) as MauticCreateResponse;
  if (!response.ok) {
    throw new Error(payload.errors?.[0]?.message || "Unable to create Mautic contact.");
  }

  return {
    id: payload.contact?.id ?? null,
  };
}
