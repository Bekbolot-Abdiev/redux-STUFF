import React from "react";
import styles from "./Footer.module.css";
import logoH from "../../assets/logoH.svg";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.listFooter}>
        <div>
          <img src={logoH} alt="" />
        </div>

        <div>
          <p>
            Developed by <span>Tomkovich</span>
          </p>
        </div>

        <div className={styles.sosSet}>
          <h4>
            <i class="bi bi-youtube"></i>
          </h4>
          <h4>
            <i class="bi bi-facebook"></i>
          </h4>
          <h4>
            <i class="bi bi-instagram"></i>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
