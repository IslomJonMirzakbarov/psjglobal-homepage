import { detect, fromNavigator } from "@lingui/detect-locale";

type Locale = "en" | "ko";

const DEFAULT_LOCALE: Locale = "en";
const AVAILABLE_LANGUAGES = ["en", "ko"];

function detectLocale(): Locale {
  if (process.browser) {
    const locale = detect(fromNavigator());

    if (locale && AVAILABLE_LANGUAGES.includes(locale)) {
      // @ts-expect-error
      return locale?.slice(0, 2) || DEFAULT_LOCALE;
    }

    return DEFAULT_LOCALE;
  }

  return DEFAULT_LOCALE;
}

export default detectLocale;
