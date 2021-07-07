import React, { useState } from "react";
import Button from "@/components/Button";

import classNames from "classnames";

import YearDisplay from "../YearDisplay";

import { YEARS } from "./years";

import styles from "./YearsSelector.module.scss";

const YEARS_ARRAY = [2017, 2018, 2019, 2020, 2021, 2022, 2023];

function YearSelector() {
  const [yearSelected, setYearSelected] = useState(YEARS[2021].id);

  return (
    <div className={styles.YearsSelector}>
      <div className={styles.Years}>
        {YEARS_ARRAY.map((year) => {
          const isYearSelected = yearSelected === year;

          return (
            <div key={year} className={styles.Year}>
              <Button
                type="button"
                className={classNames(styles.YearButton, {
                  [styles.isSelected]: isYearSelected,
                })}
                onClick={() => setYearSelected(YEARS[year].id)}
                noStyle
              >
                {year}
              </Button>
              {isYearSelected && <div className={styles.Line} />}
            </div>
          );
        })}
      </div>
      <YearDisplay year={YEARS[yearSelected]} />
    </div>
  );
}

export default YearSelector;
