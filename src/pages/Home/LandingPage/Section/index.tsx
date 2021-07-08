import Link from "next/link";

import styles from "./Section.module.scss";

interface Section {
  section: {
    id: any;
    label: any;
    path: any;
  };
}
const Section = ({ section }: Section) => {
  return (
    <div className={styles.SectionGrid}>
      <Link key={section.id} href={section.path}>
        <a className={styles.Section}>{section.label}</a>
      </Link>
    </div>
  );
};

export default Section;
