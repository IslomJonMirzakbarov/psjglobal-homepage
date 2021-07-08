import useIsMobile from "@/hooks/useIsMobile";
import { Trans } from "@lingui/react";

import Section from "./Section";

import styles from "./LandingPage.module.scss";

const PAGE_SECTIONS = [
  {
    id: "about-conun",
    label: <Trans id="01 What We Do" />,
    path: "/#about",
  },
  {
    id: "distributed-super-computing",
    label: <Trans id="02 Distributed Super Computing" />,
    path: "/#get-started",
  },
  {
    id: "decentralized-finance",
    label: <Trans id="03 Decentralized Finance" />,
    path: "/#decentralized-finance",
  },
  {
    id: "get-started",
    label: <Trans id="04 Get Started" />,
    path: "/#get-started",
  },
  {
    id: "white-paper",
    label: <Trans id="05 White Paper" />,
    path: "/#white-paper",
  },
  {
    id: "roadmap",
    label: <Trans id="06 Roadmap" />,
    path: "/#roadmap",
  },

  {
    id: "announcements",
    label: <Trans id="07 Announcements" />,
    path: "/#announcements",
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
              <Section key={section.id} section={section} />
            ))}
          </div>
          <p className={styles.VerticalText}>SUPER COMPUTING PLATFORM</p>
        </div>
      )}
    </section>
  );
}

export default LandingPage;
