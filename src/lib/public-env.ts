function readValue(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : "";
}

export const publicEnv = {
  calLink: readValue("NEXT_PUBLIC_CAL_LINK") || "ahmed-zalabany-stil6d/quick-chat",
  siteUrl: readValue("NEXT_PUBLIC_SITE_URL") || "https://owned-cloud.com",
  plausibleDomain: readValue("NEXT_PUBLIC_PLAUSIBLE_DOMAIN"),
  plausibleHost: readValue("NEXT_PUBLIC_PLAUSIBLE_HOST"),
};
