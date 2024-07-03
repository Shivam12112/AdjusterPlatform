import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <>
      <div
        className="relative pt-4"
        style={{
          paddingRight: "6rem",
          paddingLeft: "6rem",

        }}
      >
        <div className="w-full border-b border-gray-800"></div>
      </div>
      <footer className={styles.footer}>
        <p>CloudClaim. 2024 CloudClaim. All rights reserved.</p>
        <nav className={styles.nav}>
          <a href="/data-usage">Data Usage</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-service">Terms of Service</a>
          <a href="/cookies-settings">Cookies Settings</a>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
