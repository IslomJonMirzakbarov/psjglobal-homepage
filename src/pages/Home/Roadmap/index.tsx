import React from "react";

import YearSelector from "./YearSelector";

import styles from "./Roadmap.module.scss";

function Roadmap() {
  return (
    <div className={styles.Roadmap}>
      <YearSelector />
    </div>
  );
}

export default Roadmap;
