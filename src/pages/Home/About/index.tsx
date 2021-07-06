import React from "react";
import { Trans } from "@lingui/react";

import styles from "./About.module.scss";

function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Left}>
        <p className={styles.Title}>
          <Trans id="01 About CONUN" />
        </p>
        <p className={styles.Description}>
          <Trans id="With the idle processing powers of personal computers and smartphones CONUN provides a horizontal, distributed computing power sharing platform that is open to all application requesters and operators who need computing power. With focus on ease-of use and efficiency CONUN’s goal is to link our platform with on and offline services to provide users with broad benefits as we continue to dream and create from project to project. " />
        </p>
      </div>
    </div>
  );
}

export default About;
