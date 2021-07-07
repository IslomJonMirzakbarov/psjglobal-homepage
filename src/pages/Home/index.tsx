import React from "react";

import LandingPage from "./LandingPage";
import About from "./About";
import Footer from "./Footer";

import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.Home}>
      <LandingPage />
      <About />
      <Footer />
    </div>
  );
}
