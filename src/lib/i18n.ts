import { getRelativeLocaleUrl } from "astro:i18n";

export const SUPPORTED_LOCALES = ["en", "pt-br"] as const;
export const DEFAULT_LOCALE = SUPPORTED_LOCALES[0];

const SHOULD_SKIP_PREFIX = ["mailto:", "tel:"];

export function isExternalLikePath(href: string) {
  if (!href) return true;
  if (href.startsWith("#")) return true;
  if (href.startsWith("//")) return true;
  if (SHOULD_SKIP_PREFIX.some((protocol) => href.startsWith(protocol))) {
    return true;
  }
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(href);
}

export function localizePath(
  href: string,
  locale?: string | null,
  defaultLocale: string = DEFAULT_LOCALE,
) {
  if (!href || isExternalLikePath(href) || !href.startsWith("/")) {
    return href;
  }

  const normalizedLocale = locale ?? defaultLocale;
  if (normalizedLocale === defaultLocale) {
    return href;
  }

  const path = href.replace(/^\/+/, "");
  if (!path) {
    return getRelativeLocaleUrl(normalizedLocale);
  }

  return getRelativeLocaleUrl(normalizedLocale, path);
}
