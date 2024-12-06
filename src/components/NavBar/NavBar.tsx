import React from "react";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar_main}>
      <ul>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Page</a>
        </li>
        <li>
          <a href="">Setting</a>
        </li>
        <li>
          <a href=""></a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
