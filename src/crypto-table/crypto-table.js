/*import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import { COIN } from "../exchanges/COIN";
import { cryptoData } from "./cryptoData";
import { exchanges } from "./exchanges";
import * as exchangeCurrencies from "../exchanges/exchangeCurrencies";

const CryptoTable = () => {
  const [currencies, setCurrencies] = useState(exchangeCurrencies.BNB);
  console.log(currencies);
  const [currentExchange, setCurrentExchange] = useState();

  const getExchange = (e, { value }) => {
    console.log("being called");
    console.log(value);
    setCurrentExchange(value);
    console.log(currentExchange);
  };

  useEffect(() => {
    console.log("exchange changed to " + currentExchange);
    const chosenExchange = exchangeCurrencies[currentExchange];
    console.log(chosenExchange);
    if (currentExchange !== undefined) {
      setCurrencies(chosenExchange);
    }
  }, [currentExchange]);

  return (
    <div>
      <Dropdown
        placeholder="Select Exchange"
        fluid
        search
        selection
        options={exchanges}
        onChange={getExchange}
      />
      <br />
      <ul className="table-header">
        <li>Name</li>
        <li>Price</li>
        <li>24h %</li>
        <li>7d %</li>
        <li>Market Cap</li>
        <li>Volume (24h)</li>
        <li>Circulating Supply</li>
      </ul>

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
    </div>
  );
};

export default CryptoTable;*/
