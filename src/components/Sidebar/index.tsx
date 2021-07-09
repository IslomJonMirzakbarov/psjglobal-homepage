import useStore from "@/store/store";
import { motion } from "framer-motion";
import { Trans } from "@lingui/react";
import Link from "next/link";

import MenuItem from "./MenuItem";

import MenuIcon from "@/assets/icons/hamburger.svg";
import ConunLogo from "@/assets/icons/conun-logo-horizontal.svg";

import styles from "./Sidebar.module.scss";

const variants = {
  open: { x: 0 },
  closed: { x: "-100vw" },
};

const transition = {
  duration: 0.18,
  ease: "easeInOut",
};

const MENU_ITEMS = [
  {
    id: "explorer",
    title: <Trans id="Explorer" />,
    path: "https://conscan.conun.io/",
    isExternal: true,
  },
  {
    id: "github",
    title: <Trans id="Github" />,
    isExternal: true,
    path: "https://github.com/CONUN-Global",
  },
  {
    id: "roadmap",
    title: <Trans id="Roadmap" />,
    path: "/roadmap",
  },
  {
    id: "download",
    title: <Trans id="Download Products" />,
    isExternal: true,
    path: "/https://dappstore.conun.io/",
  },
];

function Sidebar() {
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  const handleSidebar = useStore((state) => state.handleSidebar);
  return (
    <motion.div
      className={styles.Sidebar}
      initial="closed"
      animate={isSidebarOpen ? "open" : "closed"}
      variants={variants}
      transition={transition}
    >
      <div className={styles.Header}>
        <button
          className={styles.MenuButton}
          onClick={() => handleSidebar(!isSidebarOpen)}
        >
          <MenuIcon className={styles.MenuIcon} />
        </button>
        <Link href="/#home" passHref>
          <a className={styles.ConunLogoContainer}>
            <ConunLogo className={styles.ConunLogo} />
          </a>
        </Link>
      </div>
      <div className={styles.ItemsContainer}>
        {MENU_ITEMS.map((m) => (
          <MenuItem key={m.id} item={m} />
        ))}
      </div>
    </motion.div>
  );
}

export default Sidebar;
