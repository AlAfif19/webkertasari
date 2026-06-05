const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl(value: string | undefined): URL {
  if (!value) {
    return new URL(LOCAL_SITE_URL);
  }

  try {
    const url = new URL(value.trim());

    if (url.protocol === "http:" || url.protocol === "https:") {
      return url;
    }
  } catch {
    // Invalid environment values should not prevent the application from building.
  }

  return new URL(LOCAL_SITE_URL);
}
