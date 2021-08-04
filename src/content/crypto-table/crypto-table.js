import React, { useState, useEffect } from "react";
import "./crypto-table.css";
const CryptoTable2 = ({ exchange }) => {
  const [currencies, setCurrencies] = useState([]);

  const getCurrencies = async () => {
    const url = exchange[0];
    console.log(url);
    console.log(typeof url);
    const response = await fetch(url);
    const apiCurrencies = await response.json();
    setCurrencies(apiCurrencies);
    console.log(apiCurrencies);
  };

  useEffect(() => {
    getCurrencies();
  }, [exchange]);

  if (exchange.length !== 0) {
    return (
      <div>
        {currencies.map((currency) => {
          const {
            id,
            image,
            name,
            current_price,
            price_change_24h,
            price_change_percentage_24h,
            market_cap,
            total_volume,
            circulating_supply,
          } = currency;
          return (
            <div>
              <ul className="currency-list">
                <li>
                  <img class="image" src={image} alt="" />
                </li>
                <li key={id}>
                  <p>{name}</p>
                </li>
                <li>
                  <p>{current_price}</p>
                </li>
                <li>
                  <p>{price_change_24h}</p>
                </li>
                <li>
                  <p>{price_change_percentage_24h}</p>
                </li>
                <li>
                  <p>{market_cap}</p>
                </li>
                <li>
                  <p>{total_volume}</p>
                </li>
                <li>
                  <p>{circulating_supply}</p>
                </li>
              </ul>
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

export default CryptoTable2;
