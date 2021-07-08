import { Trans } from "@lingui/react";

import Section from "./Section";
import Card from "./Card";

import Buildings from "@/assets/icons/buildings.svg";
import CompWalletCoin from "@/assets/icons/comp-wallet-coin.svg";
import Coins from "@/assets/icons/coins.svg";
import Transaction from "@/assets/icons/transaction.svg";
import Wallet from "@/assets/icons/wallet.svg";
import Finance from "@/assets/icons/finance.svg";
import Network from "@/assets/icons/network.svg";
import WhitePaper from "@/assets/icons/white-paper.svg";

import styles from "./About.module.scss";

const SECTIONS = [
  {
    id: "about",
    title: <Trans id="01 About CONUN" />,
    description: (
      <Trans id="With the idle processing powers of personal computers and smartphones CONUN provides a horizontal, distributed computing power sharing platform that is open to all application requesters and operators who need computing power. With focus on ease-of use and efficiency CONUN’s goal is to link our platform with on and offline services to provide users with broad benefits as we continue to dream and create from project to project. " />
    ),
    isIconLeft: false,
    icon: Buildings,
  },
  {
    id: "distributed-super-computing",
    title: <Trans id="02 Distributed Super Computing" />,
    description: (
      <Trans id="Based on desktop grid computing technology, CONUN's Distributed Super Computing Platform operates by agreement between participants and users that supports a horizontal revenue ecosystem. Participants agree to share available space with users, and users access the available space for their personal computing needs - thus creating a mutually beneficial relationship." />
    ),
    isIconLeft: true,
    icon: CompWalletCoin,
  },
  {
    id: "drive",
    title: <Trans id="03 DRIVE" />,
    description: (
      <Trans id="Conun Drive is a decentralized content sharing system. It means there is no centralized server that stores all contents. All content will be stored by Conun Drive network participants (peer nodes). As soon as a user connects to the Conun Drive network his/her computer will become a Conun Drive network participant. And participants will choose which files to store or publish. Content publishers will be rewarded by the network participants. In addition, all actions that occur on the Conun Drive network will be stored on the Conun Private Blockchain, meaning all actions are immutable and secure." />
    ),
  },
  {
    id: "decentralized-finance",
    title: <Trans id="04 DECENTRALIZED FINANCE" />,
    description: (
      <Trans id="Decentralized finance operates through the decentralized blockchain on a distributed public ledger, it makes all transactions transparent and trackable. With peer-to peer exchanges it eliminates the middle-man present in centralized finance and allows for more control over personal information and of finances." />
    ),

    icon: Finance,
  },
];
const GET_STARTED_CARDS = [
  {
    id: "wallet",
    title: <Trans id="connect with manager" />,
    description: (
      <Trans id="Our new cryptocurrency manager keeps your existing wallets together securely." />
    ),
    icon: Wallet,
  },
  {
    id: "transaction",
    title: <Trans id="explore drive" />,
    description: (
      <Trans id="A peer-to-peer, decentralized  file sharing service built on our blockchain network." />
    ),
    isIconLeft: true,
    icon: Transaction,
  },
  {
    id: "coins",
    title: <Trans id="conun finance" />,
    description: (
      <Trans id="Easily swap, exchange, and buy with CON coin through our wallet application." />
    ),
    icon: Coins,
  },
];
function About() {
  return (
    <>
      <div className={styles.AboutConun}>
        {SECTIONS.map((section) => (
          <Section key={section.id} section={section} />
        ))}
      </div>
      <section id="get-started" className={styles.GetStarted}>
        <div className={styles.GetStartedContainer}>
          <div className={styles.GetStartedText}>
            <p className={styles.Title}>
              <Trans id="05 Get Started" />
            </p>

            <p className={styles.Description}>
              <Trans id="CONUN’s projects are based on blockchain technology, making them more secure and also giving you more freedom. Currently we have our wallet, drive, and coin available for public use." />
            </p>
          </div>
          <div className={styles.GetStartedCards} id="get-started">
            {GET_STARTED_CARDS.map((card) => (
              <Card key={card.id} card={card} />
            ))}
          </div>
          <Network className={styles.AboutBottomIcon} />
        </div>
      </section>
      <section id="white-paper" className={styles.WhitePaper}>
        <div className={styles.WhitePaperText}>
          <p className={styles.Title}>
            <Trans id="06 White Paper" />
          </p>
          <p className={styles.Description}>
            <Trans id="Explore our white paper to learn more about CONUN as a business, our motivations, and our current and future products." />
          </p>
          <p className={styles.LearnMore}>
            <a
              href="https://conun.io/whitepaper"
              target="_blank"
              rel="noreferrer"
            >
              <Trans id="Learn More" />
            </a>
          </p>
        </div>
        <div className={styles.WhitePaperImage}>
          <WhitePaper />
        </div>
      </section>
    </>
  );
}

export default About;
