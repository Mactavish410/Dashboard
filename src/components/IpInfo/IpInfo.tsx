import React from "react";
import styles from "./IpInfo.module.scss";

const IpInfo = (ipinfo) => {
  // console.log(ipinfo);
  return (
    <section className={styles.ipinfo_main}>
      <ul>
        <li>{ipinfo.type}</li>
        <li>Ip: {ipinfo.ip}</li>
        <li>
          Провайдер: <span>{ipinfo.isp}</span>
        </li>
        <li>Город: {ipinfo.city}</li>
        <li>Широта: {ipinfo.latitude}</li>
        <li>Долгота: {ipinfo.longitude}</li>
      </ul>
    </section>
  );
};

export default IpInfo;
