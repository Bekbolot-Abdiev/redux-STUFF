import React from "react";
import styles from "./Header.module.css";
import logoH from "../../assets/logoH.svg";
import monkey from "../../assets/monkey.svg";


const Header = () => {
  return (
    <div>
      <div className={styles.header}>
        <div>
          <img src={logoH} alt="" />
        </div>

        <div className={styles.signUp}>
          <img width={25} src={monkey} alt="" />
          <p>Yana Tamkovich</p>
        </div>
        <div className={styles.inputs}>
          <form>
            <button>
              <i className="bi bi-search"></i>
            </button>
            <input type="text" placeholder="Search for anything..." />
          </form>
        </div>
        <div>
          <button className={styles.languageBtns}>KG</button>
          <button className={styles.languageBtns}>RU</button>
        </div>
        <div className={styles.likeCart}>
          <h5>
            <i className="bi bi-heart"></i>
          </h5>
          <h5>
            <i className="bi bi-bag"></i>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Header;
