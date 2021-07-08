import React from "react";

import LandingPage from "./LandingPage";
import About from "./About";
import Roadmap from "./Roadmap";
import Announcements from "./Announcements";
import Footer from "./Footer";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <LandingPage />
      <About />
      <Roadmap />
      <Announcements />
      <Footer />
    </div>
  );
}
