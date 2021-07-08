import React, { useEffect, useState } from "react";

import Button from "@/components/Button";

import useIsMobile from "@/hooks/useIsMobile";

import RoundEmptyIcon from "@/assets/icons/round-empty.svg";
import RoundFilledIcon from "@/assets/icons/round-filled.svg";

import styles from "./YearDisplay.module.scss";

type Page = "first" | "second";

function getEvents(page: Page, events: any[]) {
  if (page === "first") {
    return events.slice(0, 6);
  }

  return events.slice(6);
}

interface YearDisplay {
  year: {
    events: { title: string; month: string; subtitle: string }[];
  };
}

function YearDisplay({ year }: YearDisplay) {
  const [page, setPage] = useState<Page>("first");

  const isMobile = useIsMobile();

  useEffect(() => {
    setPage("first");
  }, [year]);

  const isMoreThanSix = year.events.length > 6;

  const pages: Page[] = ["first", "second"];

  return (
    <div className={styles.YearDisplay}>
      <div className={styles.EventsContainer}>
        {isMoreThanSix && !isMobile
          ? getEvents(page, year.events).map((event, index) => (
              <div key={`${event.title}_${index}`} className={styles.Event}>
                <p className={styles.Month}>{event?.month}</p>
                <p className={styles.Title}>{event?.title}</p>
                <p className={styles.Subtitle}>{event?.subtitle}</p>
              </div>
            ))
          : year.events.map((event, index) => (
              <div key={`${event.title}_${index}`} className={styles.Event}>
                <p className={styles.Month}>{event?.month}</p>
                <p className={styles.Title}>{event?.title}</p>
                <p className={styles.Subtitle}>{event?.subtitle}</p>
              </div>
            ))}
      </div>
      {isMoreThanSix && !isMobile && (
        <div>
          {pages.map((p) => (
            <Button key={p} type="button" onClick={() => setPage(p)} noStyle>
              {page === p ? <RoundFilledIcon /> : <RoundEmptyIcon />}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

export default YearDisplay;
