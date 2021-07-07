import React from "react";
import Image from "next/image";
import { Trans } from "@lingui/react";

import styles from "./Announcements.module.scss";

const ANNOUNCEMENTS: any = [
  {
    id: 1,
    date: "June 24, 2021",
    title: "Decentralized exchange",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus eros vitae sapien pulvinar gravida. Duis quis .....",
    image: "https://via.placeholder.com/370x344",
  },
  {
    id: 2,
    date: "June 24, 2021",
    title: "Decentralized exchange",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus eros vitae sapien pulvinar gravida. Duis quis .....",
    image: "https://via.placeholder.com/370x344",
  },
  {
    id: 3,
    date: "June 24, 2021",
    title: "Decentralized exchange",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus eros vitae sapien pulvinar gravida. Duis quis .....",
    image: "https://via.placeholder.com/370x344",
  },
];

function Announcements() {
  return (
    <section id="announcements" className={styles.Announcements}>
      <p className={styles.PageTitle}>
        <Trans id="07 Announcements" />
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
            <Image src={a.image} width={370} height={344} alt={a.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Announcements;
