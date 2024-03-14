import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/slices/productsSlices";
import styles from "./Hero.module.css";
import heroL from "../../assets/heroL.svg";
import Card from "../card/Card";

const Hero = () => {
  const [filterData, setFilterData] = useState(null);
  const { productsData, isLoading, error } = useSelector(
    (state) => state.products
  );
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getProducts());
  }, []);
  // console.log(productsData);

  if (productsData === null) {
    return <h1>Loading...</h1>;
  }

  let newCategory = [];

  const rezult = productsData.filter((el) => {
    if (!newCategory.includes(el.category.name)) {
      newCategory.push(el.category.name);
    }
  });

  const filterProductsByCategory = (e) => {
    console.log(e.target.innerText);
    const filterProducts = productsData.filter(
      (el) => el.category.name === e.target.innerText
    );
    setFilterData(filterProducts.slice(0, 4));
    console.log(filterData);
  };

  return (
    <div>
      <div className={styles.hero}>
        <img src={heroL} alt="" />
        <div className={styles.category}>
          <h3>CATEGORIES</h3>
          <div className={styles.categoriesList}>
            {newCategory.map((el) => (
              <p onClick={filterProductsByCategory} key={el}>
                {el}
              </p>
            ))}
          </div>
          <div className={styles.sos}>
            <h6>Help</h6>
            <h6>Terms & Conditions</h6>
          </div>
        </div>

        <div className={styles.heroAbout}>
          <h1>BIG SALE 20%</h1>
          <div>
            <p>THE BESTSELLER OF 2022 </p>
            <h2>LENNON R2D2 WITH NVIDIA 5090 TI</h2>
            <button>Shop Now</button>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <h4>Trending</h4>
        <div className={styles.card}>
          {filterData?.map((el) => (
            <Card {...el} />
          ))}
        </div>
        <button>See more</button>
      </div>
    </div>
  );
};

export default Hero;
