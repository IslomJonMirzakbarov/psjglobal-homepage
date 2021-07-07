import useIsMobile from "@/hooks/useIsMobile";
import { Trans } from "@lingui/react";
import Link from "next/link";
import React from "react";

import styles from "./LandingPage.module.scss";

const PAGE_SECTIONS = [
  {
    id: "about",
    label: <Trans id="01 What We Do" />,
    path: "/#about",
  },
  {
    id: "distributed-super-computing",
    label: <Trans id="02 Distributed Super Computing" />,
    path: "/#get-started",
  },

  {
    id: "get-started",
    label: <Trans id="02 Get Started" />,
    path: "/#get-started",
  },
];

function LandingPage() {
  const isMobile = useIsMobile();
  return (
    <section id="home" className={styles.LandingPage}>
      <div className={styles.LeftSide}>
        <p className={styles.Title}>
          <Trans id="Share. Earn. Explore" />
        </p>
        <p className={styles.ShortDescription}>
          <Trans id="Universal Resource Sharing" />
        </p>
        <p className={styles.ConunDescription}>
          <Trans id="CONUN is a blockchain-based distributed supercomputing and resource sharing platform. Together, the participants of our network forms a high-performance resource-sharing service." />
        </p>
      </div>
      {!isMobile && (
        <div className={styles.RightSide}>
          <div className={styles.Sections}>
            {PAGE_SECTIONS.map((section) => (
              <Link key={section.id} href={section.path}>
                <a className={styles.Section}>{section.label}</a>
              </Link>
            ))}
          </div>
          <p className={styles.VerticalText}>SUPER COMPUTING PLATFORM</p>
        </div>
      )}
    </section>
  );
}

export default LandingPage;
