import React from "react";
import { Trans } from "@lingui/react";

import YearSelector from "./YearSelector";

import styles from "./Roadmap.module.scss";

function Roadmap() {
  return (
    <section id="roadmap" className={styles.Roadmap}>
      <p className={styles.PageTitle}>
        <Trans id="06 Roadmap" />
      </p>
      <p className={styles.PageSubtitle}>
        <Trans id="Explore our white paper to learn more about CONUN as a business, our motivations, and our current and future products." />
      </p>
      <YearSelector />
    </section>
  );
}

export default Roadmap;
