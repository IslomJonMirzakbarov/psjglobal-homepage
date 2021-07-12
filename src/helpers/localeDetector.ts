import { detect, fromNavigator } from "@lingui/detect-locale";

const AVAILABLE_LANGUAGES = ["en", "ko"];

const DEFAULT_LOCALE = "en";

function detectLocale() {
  if (process.browser) {
    const locale = detect(fromNavigator());

    if (locale && AVAILABLE_LANGUAGES.includes(locale)) {
      return locale?.slice(0, 2) || DEFAULT_LOCALE;
    }

    return DEFAULT_LOCALE;
  }

  return DEFAULT_LOCALE;
}

export default detectLocale;
