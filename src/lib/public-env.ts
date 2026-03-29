function readValue(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : "";
}

export const publicEnv = {
  calLink: readValue("NEXT_PUBLIC_CAL_LINK") || "ahmed-zalabany-stil6d/owned-cloud-intake",
  siteUrl: readValue("NEXT_PUBLIC_SITE_URL") || "https://owned-cloud.com",
  email:
    readValue("NEXT_PUBLIC_EMAIL") || readValue("NOTIFICATION_EMAIL") || "hello@owned-cloud.com",
  plausibleDomain: readValue("NEXT_PUBLIC_PLAUSIBLE_DOMAIN"),
  plausibleHost: readValue("NEXT_PUBLIC_PLAUSIBLE_HOST"),
};
