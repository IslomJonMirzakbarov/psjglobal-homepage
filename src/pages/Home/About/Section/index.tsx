import classNames from "classnames";

import styles from "./Section.module.scss";

interface Section {
  section: {
    id: any;
    title: any;
    description: any;
    icon?: any;
    isIconLeft?: boolean;
    isWhiteColor?: boolean;
  };
}

const Section = ({ section }: Section) => {
  const { title, description, icon, isIconLeft, isWhiteColor } = section;
  const Icon = icon;
  return (
    <section
      id={section.id}
      className={classNames(styles.Container, {
        [styles.isIconLeft]: isIconLeft,
        [styles.isWhiteColor]: isWhiteColor,
      })}
    >
      <div className={styles.Left}>
        <p className={styles.Title}>{title}</p>
        <p className={styles.Description}>{description}</p>
      </div>
      <div
        className={classNames(styles.Right, {
          [styles.isIconLeft]: isIconLeft,
        })}
      >
        {Icon && <Icon className={styles.Icon} />}
      </div>
    </section>
  );
};

export default Section;
