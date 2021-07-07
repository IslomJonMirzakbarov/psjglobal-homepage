import Link from "next/link";

import styles from "./MenuItem.module.scss";

interface MenuItem {
  item: {
    id: string;
    title: any;
    path: string;
    isExternal?: boolean;
  };
}

function MenuItem({ item }: MenuItem) {
  if (item.isExternal) {
    return (
      <a
        key={item.id}
        href={item.path}
        className={styles.MenuItem}
        target="_blank"
        rel="noreferrer"
      >
        {item.title}
      </a>
    );
  }

  return (
    <Link key={item.id} href={item.path}>
      <a className={styles.MenuItem}>{item.title}</a>
    </Link>
  );
}

export default MenuItem;
