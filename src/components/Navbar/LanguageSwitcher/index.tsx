import React from "react";

import useStore from "@/store/store";

import WorldIcon from "@/assets/icons/world.svg";

import styles from "./LanguageSwitcher.module.scss";

const LOCALES = [
  {
    value: "en",
    label: "English",
  },
  {
    value: "ko",
    label: "한국어",
  },
];

function LanguageSwitcher() {
  const locale = useStore((state) => state.currentLocale);
  const setLocale = useStore((state) => state.setCurrentLocale);
  return (
    <div className={styles.LanguageSwitcher}>
      <WorldIcon className={styles.WorldIcon} />
      <select
        name="locale"
        value={locale}
        className={styles.LocaleSelect}
        onChange={(e) => setLocale(e.target.value)}
      >
        {LOCALES.map((locale) => (
          <option key={locale.value} value={locale.value}>
            {locale.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LanguageSwitcher;
