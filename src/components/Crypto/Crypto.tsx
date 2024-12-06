import React, { useState } from "react";
import styles from "./Crypto.module.scss";
import CryptoItem from "./CryptoItem/CryptoItem";

const Crypto = (crypto: object) => {
  // console.log(crypto);

  const [currentIndex, setCurrentIndex] = useState(0);

  // Функция для перехода на следующий слайд
  //   const nextSlide = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === cryptoArray.length - 1 ? 0 : prevIndex + 1
  //     );
  //   };

  //   // Функция для перехода на предыдущий слайд
  //   const prevSlide = () => {
  //     setCurrentIndex((prevIndex) =>
  //       prevIndex === 0 ? cryptoArray.length - 1 : prevIndex - 1
  //     );
  //   };

  const chunkArray = <T,>(arr: T[], cnt: number) => {
    const mainArr = [];
    let a = [];
    for (let i = 0; i < arr.length; i++) {
      if (a.length <= cnt - 1) {
        a.push(arr[i]);
      } else {
        mainArr.push(a);
        a = [];
      }
    }
    return mainArr;
  };

  const cryptoArray = chunkArray(Object.values(crypto), 8);

  //   console.log(chunkArray(Object.values(crypto), 10)[currentIndex]);

  return (
    <section className={styles.crypto_main}>
      <ul>
        {cryptoArray[currentIndex].map((item) => (
          <CryptoItem key={item.id} {...item} />
        ))}
      </ul>
      <div className={styles.crypto_nav}>
        {/* <button className={styles.crypto_button} onClick={prevSlide}>
          ❮
        </button> */}
        <ul className={styles.crypto_indicators}>
          {cryptoArray.map((_, index) => (
            <li
              key={index}
              className={`${
                index === currentIndex
                  ? `${styles.crypto_pagination_active}`
                  : `${styles.crypto_pagination}`
              }`}
              onClick={() => setCurrentIndex(index)}
            ></li>
          ))}
        </ul>
        {/* <button className={styles.crypto_button} onClick={nextSlide}>
          ❯
        </button> */}
      </div>
    </section>
  );
};

export default Crypto;
