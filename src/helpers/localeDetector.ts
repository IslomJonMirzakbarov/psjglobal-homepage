import {
  detect,
  fromUrl,
  fromStorage,
  fromNavigator,
} from "@lingui/detect-locale";

function detectLocale() {
  const locale = detect(fromUrl("lang"), fromStorage("lang"), fromNavigator());

  console.log(`fromNavigator()`, fromNavigator());

  return locale?.slice(0, 2) || "en";
}

export default detectLocale;
