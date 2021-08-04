import React, { useState, useEffect } from "react";
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
          const { id, name, price } = currency;
          return (
            <div>
              <ul className="currency-list">
                <li key={id}>
                  <div>
                    <p>{name}</p>
                  </div>
                </li>
                <li>
                  <p>{price}</p>
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
