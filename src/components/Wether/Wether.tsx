// import React from "react";
import styles from "./Wether.module.scss";
import WetherIcons from "../../assets/Icons/WetherIcons.tsx";

const Wether = (wether) => {
  // console.log(wether);
  return (
    <section className={styles.wether_main}>
      <div className={styles.wether_left}>
        <div>
          <h2>{wether.nearest_area[0].areaName[0].value}</h2>
          <h4>{wether.weather[0].date.split("-").reverse().join(".")}</h4>
        </div>
        <WetherIcons iconName={wether.current_condition[0].lang_ru[0].value} />
      </div>
      <div className={styles.wether_right}>
        <h3>Rain</h3>
        <h1>24°</h1>
        <div>
          <p>Max: {wether.weather[0].maxtempC}°</p>
          <p>Min: {wether.weather[0].mintempC}°</p>
        </div>
        <div className={styles.wether_info}>
          {/* <WetherIcons iconName={"rain"} /> */}
          <div>
            <p>Pressure</p>
            <h4>768 mmHg</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wether;
