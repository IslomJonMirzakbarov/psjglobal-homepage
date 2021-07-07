import React from "react";

import styles from "./YearDisplay.module.scss";

interface YearDisplay {
  year: {
    events: { title: string; month: string; subtitle: string }[];
  };
}

function YearDisplay({ year }: YearDisplay) {
  return (
    <div className={styles.YearDisplay}>
      {year.events.map((event, index) => (
        <div key={`${event.title}_${index}`} className={styles.Event}>
          <p className={styles.Month}>{event?.month}</p>
          <p className={styles.Title}>{event?.title}</p>
          <p className={styles.Subtitle}>{event?.subtitle}</p>
        </div>
      ))}
    </div>
  );
}

export default YearDisplay;
