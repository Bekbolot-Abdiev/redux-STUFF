import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productsSlices";
import styles from "./AboutCard.module.css";

const AboutCard = () => {
  const [productsPrices, setProductsPrices] = useState([]);
  const { productsData, isLoading, error } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  useEffect(() => {
    if (productsData) {
      const filteredPrices = productsData.filter((el) => el.price < 100);
      setProductsPrices(filteredPrices.slice(0, 4));
    }
  }, [productsData]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <div className={styles.aboutCards}>
      <h3>Less than 100$</h3>
      {productsPrices.length > 0 ? (
        <ul className={styles.aboutCard}>
          {productsPrices.map((el) => (
            <li key={el.id}>
              <div className="card" style={{ width: "15rem" }}>
                <img src={el.images[0]} className="card-img-top" alt="..." />
                <div className={styles.aboutBody}>
                  <div className="card-body">
                    <h5 className="card-title">{el.title}</h5>
                    <h6 className="card-text">{el.category.name}</h6>
                    {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                    <h2>{el.price}$</h2>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No products found with price less than 100$.</p>
      )}
      <button>See more</button>
    </div>
  );
};

export default AboutCard;
