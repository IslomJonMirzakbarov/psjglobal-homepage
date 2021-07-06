import React from "react";
import classNames from "classnames";

import useStore from "@/store/store";
import useIsMobile from "@/hooks/useIsMobile";

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

  const isMobile = useIsMobile();

  return (
    <div
      className={classNames(styles.LanguageSwitcher, {
        [styles.isMobile]: isMobile,
      })}
    >
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
