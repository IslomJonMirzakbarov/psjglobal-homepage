import React from "react";
import { Trans } from "@lingui/react";

import ConunLogo from "@/assets/icons/conun-logo-horizontal.svg";
import YoutubeIcon from "@/assets/icons/youtube.svg";
import DiscordIcon from "@/assets/icons/discord.svg";
import GithubIcon from "@/assets/icons/github.svg";

import styles from "./Footer.module.scss";

const DATE = new Date();

const LINKS = [
  {
    title: <Trans id="Blogs" />,
    link: "https://medium.com/conun-korea",
  },
  {
    title: <Trans id="Privacy Policy" />,
    link: "https://conun.io/policy/privacypolicy",
  },
  {
    title: <Trans id="Contact Us" />,
    link: "https://conun.io/contactus",
  },
  {
    title: <Trans id="Term and Conditions" />,
    link: "https://conun.io/policy/termsandcondition",
  },
  {
    title: <Trans id="Jobs" />,
    link: "https://conun.io/jobs",
  },
];

const SOCIALS: any = [
  {
    id: "youtube",
    icon: YoutubeIcon,
    link: "https://www.youtube.com/channel/UCVbpETcXaPRZkL2HACUXOsA",
  },
  {
    id: "discord",
    icon: DiscordIcon,
    link: "https://discord.com/invite/VvXvQfa3Za",
  },
  {
    id: "github",
    icon: GithubIcon,
    link: "https://github.com/CONUN-Global",
  },
];

function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.Info}>
        <ConunLogo className={styles.ConunLogo} />
        <div className={styles.Links}>
          {LINKS.map((link) => (
            <a
              key={link.link}
              className={styles.Link}
              href={link.link}
              target="_blank"
              rel="noreferrer"
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className={styles.Socials}>
          {SOCIALS.map((social: any) => {
            const Icon = social?.icon;
            console.log(`Icon`, Icon);
            return (
              <a
                key={social.id}
                className={styles.Social}
                href={social.link}
                target="_blank"
                rel="noreferrer"
              >
                <Icon className={styles.SocialIcon} />
              </a>
            );
          })}
        </div>
      </div>
      <div className={styles.Copyright}>
        <p className={styles.Year}>© {DATE.getFullYear()} CONUN</p>
        <p className={styles.Motto}>
          <Trans id="Connecting on Universal Networks" />
        </p>
      </div>
    </div>
  );
}

export default Footer;
