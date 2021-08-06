import React, { useState, useEffect } from "react";
import "./crypto-table.css";
const CryptoTable = ({ exchange, searchValue }) => {
  const [currencies, setCurrencies] = useState([]);
  console.log(searchValue);
  const getCurrencies = async () => {
    const url = exchange[0];
    console.log(url);
    console.log(typeof url);
    const response = await fetch(url);
    const apiCurrencies = await response.json();
    setCurrencies(apiCurrencies);
    if (searchValue.length > 0) {
      const updatedCurrencies = apiCurrencies.filter(
        (currency) =>
          currency.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          currency.symbol.toLowerCase().includes(searchValue.toLowerCase())
      );
      setCurrencies(updatedCurrencies);
      console.log(updatedCurrencies);
    }
    //console.log(apiCurrencies);
  };

  useEffect(() => {
    getCurrencies();
  }, [exchange, searchValue]);

  if (exchange.length !== 0) {
    return (
      <div>
        {currencies.map((currency) => {
          const {
            id,
            image,
            name,
            symbol,
            current_price,
            price_change_24h,
            price_change_percentage_24h,
            market_cap,
            total_volume,
            circulating_supply,
          } = currency;
          return (
            <div className="coin-container" key={id}>
              <div className="coin-row">
                <div className="coin">
                  <img class="image" src={image} alt="" />
                  <h1>{name}</h1>
                  <p className="symbol">{symbol.toUpperCase()}</p>
                </div>

                <div className="coin-data">
                  <p className="coin-price">${current_price}</p>
                  <p className="coin-volume">
                    ${total_volume.toLocaleString()}
                  </p>

                  <p className="coin-percent">{price_change_percentage_24h}%</p>

                  <p className="coin-marketcap">
                    ${market_cap.toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        ;
      </div>
    );
  } else {
    return <p></p>;
  }
};

export default CryptoTable;
