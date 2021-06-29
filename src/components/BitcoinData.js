import { useState, useEffect } from "react";

const BitcoinData = ({ currency }) => {
  const [bitcoinData, setBitcoinData] = useState();

  const getBitcoinData = () => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then((res) => res.json())
      .then((data) => setBitcoinData(data.bpi[currency]));
  };

  useEffect(getBitcoinData, [currency])

  return (
    <div>
      {bitcoinData && `${bitcoinData.rate} : ${bitcoinData.description}`}
    </div>
  );
};

export default BitcoinData;
