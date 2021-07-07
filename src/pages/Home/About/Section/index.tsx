import React from "react";

import classNames from "classnames";
import styles from "./Section.module.scss";

interface Section {
  section: {
    id: any;
    title: any;
    description: any;
    icon: any;
    isIconLeft: boolean;
  };
}

const Section = ({ section }: Section) => {
  const { title, description, icon, isIconLeft } = section;
  const Icon = icon;
  return (
    <div
      id={section.id}
      className={classNames(styles.Container, {
        [styles.isIconLeft]: isIconLeft,
      })}
    >
      <div className={styles.Left}>
        <p className={styles.Title}>{title}</p>
        <p className={styles.Description}>{description}</p>
      </div>
      <div className={styles.Right}>
        <Icon className={styles.Icon} />
      </div>
    </div>
  );
};

export default Section;
