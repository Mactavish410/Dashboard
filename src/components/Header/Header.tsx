import React from "react";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header_main}>
      <nav>
        <ul>
          <li>Меню</li>
          <li>
            <input type="text" />
          </li>
          <li>Тема</li>
          <li>Настройки</li>
          <li></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
