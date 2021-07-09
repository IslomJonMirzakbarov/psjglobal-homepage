import classNames from "classnames";
import { motion } from "framer-motion";

import styles from "./Section.module.scss";

interface Section {
  section: {
    id: any;
    title: any;
    description: any;
    icon?: any;
    isIconLeft?: boolean;
    isWhiteColor?: boolean;
    className?: any;
  };
}

const Section = ({ section }: Section) => {
  const { title, description, icon, isIconLeft, isWhiteColor, className } =
    section;
  const Icon = icon;

  console.log(`className`, className);
  return (
    <section
      id={section.id}
      className={classNames(
        styles.Container,
        {
          [styles.isIconLeft]: isIconLeft,
          [styles.isWhiteColor]: isWhiteColor,
        },
        className
      )}
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
        {Icon && (
          <motion.div
            className={styles.Icon}
            initial={{ y: 0 }}
            animate={{ y: -10 }}
            exit={{ y: 0 }}
            transition={{
              y: {
                duration: 1,
                yoyo: Infinity,
                ease: "easeOut",
              },
            }}
          >
            <Icon />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Section;
