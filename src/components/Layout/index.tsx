import useIsMobile from "@/hooks/useIsMobile";
import React from "react";

import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

import styles from "./Layout.module.scss";

interface Layout {
  children: React.ReactNode;
}

function Layout({ children }: Layout) {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile && <Sidebar />}
      <div className={styles.Layout}>
        <Navbar />
        {children}
      </div>
    </>
  );
}

export default Layout;
