import fs from "node:fs";

type MauticCredentials = {
  url?: string;
  client_id?: string;
  client_secret?: string;
};

function readValue(name: string) {
  const value = process.env[name];
  return value && value.trim() ? value.trim() : undefined;
}

function readJsonFile<T>(path: string): T | null {
  try {
    return JSON.parse(fs.readFileSync(path, "utf8")) as T;
  } catch {
    return null;
  }
}

function getMauticCredentials() {
  return (
    readJsonFile<MauticCredentials>("/home/az/workspace/credentials/mautic.json") ?? {
      url: undefined,
      client_id: undefined,
      client_secret: undefined,
    }
  );
}

const mauticCredentials = getMauticCredentials();

export const serverEnv = {
  mauticUrl: readValue("MAUTIC_URL") ?? mauticCredentials.url ?? "",
  mauticClientId: readValue("MAUTIC_CLIENT_ID") ?? mauticCredentials.client_id ?? "",
  mauticClientSecret: readValue("MAUTIC_CLIENT_SECRET") ?? mauticCredentials.client_secret ?? "",
};
