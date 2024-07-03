import React from "react";
import styles from "../styles/Home.module.css";
import { appName } from "@/lib/variables";

const NavBar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>{appName}</div>
        <div className={styles.navLinks}>
          <a href="#features">Features</a>
          <a href="#how-to-use">How to Use</a>
          <a href="#gallery">Gallery</a>
          {/* <a href="#pricing">Pricing</a> */}
          {/* <a href="#ux-case-study" className={styles.ctaButton}>
            Join WaitList
          </a> */}
        </div>
      </nav>
    </>
  );
};

export default NavBar;
