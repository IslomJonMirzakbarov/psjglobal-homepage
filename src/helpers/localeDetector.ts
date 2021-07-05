import {
  detect,
  fromUrl,
  fromStorage,
  fromNavigator,
} from "@lingui/detect-locale";

function detectLocale() {
  if (process.browser) {
    const locale = detect(
      fromUrl("lang"),
      fromStorage("lang"),
      fromNavigator()
    );

    return locale?.slice(0, 2) || "en";
  }

  return "en";
}

export default detectLocale;
