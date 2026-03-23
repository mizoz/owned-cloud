function readValue(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : "";
}

export const publicEnv = {
  calendlyUrl: readValue("NEXT_PUBLIC_CALENDLY_URL"),
};
