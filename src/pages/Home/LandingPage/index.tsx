import useIsMobile from "@/hooks/useIsMobile";
import { Trans } from "@lingui/react";
import Link from "next/link";
import React from "react";

import styles from "./LandingPage.module.scss";

const PAGE_SECTIONS = [
  {
    id: "what-we-do",
    label: <Trans id="01 What We Do" />,
    path: "/#what-we-do",
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
          <Trans id="Distributed Super Computing Platform" />
        </p>
        {isMobile && (
          <p className={styles.Subtitle}>
            <Trans id="Universal Resource Sharing" />
          </p>
        )}
        <p className={styles.ConunDescription}>
          <Trans id="CONUN is a blockchain-based distributed supercomputing platform. By sharing idle resources of participants' personal computers and smartphones provided is a  service platform that enables you to handle high-performance computing resources." />
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
          <p className={styles.VerticalText}>Resource Sharing</p>
        </div>
      )}
    </section>
  );
}

export default LandingPage;
