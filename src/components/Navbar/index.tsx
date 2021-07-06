import React from "react";
import { Trans } from "@lingui/react";
import Link from "next/link";
import classNames from "classnames";

import LanguageSwitcher from "./LanguageSwitcher";
import Button from "../Button";

import useIsMobile from "@/hooks/useIsMobile";

import ConunLogo from "@/assets/icons/conun-logo.svg";
import Menu from "@/assets/icons/hamburger.svg";

import styles from "./Navbar.module.scss";

const PAGES = [
  {
    id: "github",
    label: <Trans id="Github" />,
    path: "https://github.com/CONUN-Global/",
    isExternal: true,
  },
  {
    id: "roadmap",
    label: <Trans id="Roadmap" />,
    path: "/roadmap",
  },
];

function Navbar() {
  const isMobile = useIsMobile();
  return (
    <div className={classNames(styles.Navbar, { [styles.isMobile]: isMobile })}>
      {isMobile ? (
        <>
          <Button noStyle className={styles.MenuButton}>
            <Menu className={styles.MenuIcon} />
          </Button>
          <Link href="/#home" passHref>
            <ConunLogo className={styles.ConunLogo} />
          </Link>
          <LanguageSwitcher />
        </>
      ) : (
        <>
          <Link href="/#home" passHref>
            <ConunLogo className={styles.ConunLogo} />
          </Link>
          <div className={styles.Pages}>
            {PAGES.map((page) => {
              if (page?.isExternal) {
                return (
                  <a
                    key={page.id}
                    href={page.path}
                    className={styles.Page}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {page.label}
                  </a>
                );
              }

              return (
                <Link key={page.id} href={page.path}>
                  <a className={styles.Page}>{page.label}</a>
                </Link>
              );
            })}
            <a
              className={styles.ProductsButton}
              href="https://dappstore.conun.io/"
              target="_blank"
              rel="noreferrer"
            >
              <Trans id="Download Products" />
            </a>
            <LanguageSwitcher />
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
