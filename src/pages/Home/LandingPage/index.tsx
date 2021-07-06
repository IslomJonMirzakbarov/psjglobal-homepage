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
  return (
    <section id="home" className={styles.LandingPage}>
      <div className={styles.LeftSide}>
        <p className={styles.Title}>
          <Trans id="Distributed Super Computing Platform" />
        </p>
        <p className={styles.ConunDescription}>
          <Trans id="CONUN is a blockchain-based distributed supercomputing platform. By sharing idle resources of participants' personal computers and smartphones provided is a  service platform that enables you to handle high-performance computing resources." />
        </p>
      </div>
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
    </section>
  );
}

export default LandingPage;
