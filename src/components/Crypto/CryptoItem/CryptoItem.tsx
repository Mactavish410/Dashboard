import React, { useState } from "react";
import styles from "./CryptoItem.module.scss";

interface CryptoItemProps {
  symbol: string;
  name: string;
  priceUsd: string; // Приходит из API как строка
  changePercent24Hr: string; // Также строка
}

const CryptoItem: React.FC<CryptoItemProps> = ({
  symbol,
  priceUsd,
  changePercent24Hr,
}) => {
  //   const [displayName, setDisplayName] = useState(symbol);

  //   const handleSwapName = () => {
  //     setDisplayName((prev) => (prev === symbol ? name : symbol));
  //   };
  return (
    <li className={styles.cryptoItem_main}>
      <p className={styles.cryptoItem_name}>{symbol}</p>
      <div>
        <p>{Number(priceUsd).toFixed(3)}$</p>
        <p>{Number(changePercent24Hr).toFixed(2)}%</p>
      </div>
    </li>
  );
};

export default CryptoItem;

// changePercent24Hr
// :
// "0.4047709339606607"
// explorer
// :
// "https://blockchain.info/"
// id
// :
// "bitcoin"
// marketCapUsd
// :
// "1955425863200.4696977848928130"
// maxSupply
// :
// "21000000.0000000000000000"
// name
// :
// "Bitcoin"
// priceUsd
// :
// "98828.6060605317811230"
// rank
// :
// "1"
// supply
// :
// "19786031.0000000000000000"
// symbol
// :
// "BTC"
// volumeUsd24Hr
// :
// "24578082619.8766189926998233"
// vwap24Hr
// :
// "98810.1091804162898135"
