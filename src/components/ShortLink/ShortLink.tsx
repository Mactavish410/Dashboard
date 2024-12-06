import React, { ChangeEvent, useState } from "react";
import styles from "./ShortLink.module.scss";

const ShortLink = () => {
  const [inputvalue, setInputValue] = useState<string>("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    console.log(inputvalue);
    setInputValue("");
  };

  return (
    <section className={styles.shortlink_main}>
      <input type="text" value={inputvalue} onChange={handleChange} />
      <button onClick={handleSubmit}>Укоротить</button>
      <div>
        <p>Укороченная ссылка</p>
        <p></p>
      </div>
    </section>
  );
};

export default ShortLink;
