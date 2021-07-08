import React from "react";
import Image from "next/image";
import { Trans } from "@lingui/react";

import youtubeThumbnail from "../../../../public/assets/youtube-thumbnail.jpg";
import logoRenewal from "../../../../public/assets/logo-renewal.jpg";
import driveManager from "../../../../public/assets/drive-manager-thumbnail.jpg";

import styles from "./Announcements.module.scss";

const ANNOUNCEMENTS: any = [
  {
    id: 3,
    date: "July 1, 2021",
    title: "DEFI Project Development",
    subtitle: "Introducing Conun's DEFI project, stage one - UNISWAP",
    image: youtubeThumbnail,
    link: "https://www.youtube.com/watch?v=bHdEj0bEyMo",
  },
  {
    id: 1,
    date: "July 5, 2021",
    title: "CONUN Logo Renewal",
    subtitle: "CONUN changed the logo to announce its new start. ",
    image: logoRenewal,
    link: "https://xangle.io/project/CON/recent-disclosure/60ded621d9d39fef9a4d9b2c",
  },
  {
    id: 2,
    date: "July 5, 2021",
    title: "Conun Manager and Drive Beta-Versions",
    subtitle:
      "Conun blockchain has launched two of its DApp services, Conun Manager and Conun Drive",
    image: driveManager,
    link: "https://xangle.io/project/CON/recent-disclosure/6094d7b9e141e6daca481242",
  },
];

function Announcements() {
  return (
    <section id="announcements" className={styles.Announcements}>
      <p className={styles.PageTitle}>
        <Trans id="08 Announcements" />
      </p>
      <p className={styles.PageSubtitle}>
        <Trans id="Ongoing project and company updates related to CONUN." />
      </p>
      <div className={styles.AnnouncementsContainer}>
        {ANNOUNCEMENTS.map((a: any) => (
          <div className={styles.Announcement} key={a.id}>
            <p className={styles.Date}>{a.date}</p>
            <p className={styles.Title}>{a.title}</p>
            <p className={styles.Subtitle}>{a.subtitle}</p>
            <a
              href={a.link}
              className={styles.Link}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                className={styles.Image}
                src={a.image}
                width={370}
                height={344}
                alt={a.title}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Announcements;
