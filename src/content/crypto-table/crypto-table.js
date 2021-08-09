import React, { useState, useEffect } from "react";
import CryptoRow from "../crypto-row/crypto-row";
import "./crypto-table.css";
const CryptoTable = ({ exchange, searchValue }) => {
  const [currencies, setCurrencies] = useState([]);
  //console.log(searchValue);
  const getCurrencies = async () => {
    const url = exchange[0];
    //console.log(url);
    //console.log(typeof url);
    const response = await fetch(url);
    const apiCurrencies = await response.json();
    setCurrencies(apiCurrencies);

    if (searchValue) {
      const updatedCurrencies = apiCurrencies.filter(
        (currency) =>
          currency.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          currency.symbol.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCurrencies(updatedCurrencies);
      //console.log(updatedCurrencies);
    }
    //console.log(apiCurrencies);
  };

  useEffect(() => {
    getCurrencies();
  }, [exchange, searchValue]);

  if (exchange.length !== 0) {
    return (
      <div>
        {currencies.map((coin) => {
          return (
            <CryptoRow
              id={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketCap={coin.market_cap}
              volume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          );
          <p>Hello</p>;
        })}
      </div>
    );
  } else {
    return <p></p>;
  }
};

export default CryptoTable;
