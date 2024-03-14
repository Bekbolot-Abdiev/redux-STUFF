import React from "react";
import styles from "./About.module.css";
import santa from "../../assets/santa.svg";
import cross from "../../assets/cross.svg";
import sony from "../../assets/sony.svg";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div>
      <div className={styles.about}>
        <img className={styles.cross} src={cross} alt="" />
        <img className={styles.sony} src={sony} alt="" />
        <div className={styles.aboutLeft}>
          <p>NEW YEAR</p>
          <h2>SALE</h2>
          <button>See more</button>
        </div>
        <div className={styles.aboutRight}>
          <img src={santa} alt="" />
        </div>
      </div>

      <div>
        <AboutCard />
      </div>
    </div>
  );
};

export default About;
