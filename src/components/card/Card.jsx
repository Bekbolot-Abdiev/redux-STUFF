import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, images, category, price }) => {
  return (
    <div className={styles.card}>
      <div className="card d-flex" style={{ width: "15rem" }}>
        <img src={images[0]} className="card-img-top" alt="..." />
        <div className={styles.cardBody}>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <h6 className="card-text">{category.name}</h6>
            {/* <a href="#" className="btn btn-primary">
              Go somewhere
            </a> */}
            <h3>{price}$</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
