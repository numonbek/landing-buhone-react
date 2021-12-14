import React from "react";
import styles from "./Footer.module.scss";

const Footer = (props) => {
  return (
    <div className={styles.Footer}>
      <div className="container center">
        <div className={styles.Footer__container}>
          <div className={styles.Inc}>
            2019 (с) Все права защищены. БухОне.ру
          </div>
          <div className={styles.Company}>Разработано: BuhOne</div>
        </div>
      </div>
    </div>
  );
};

export { Footer };
