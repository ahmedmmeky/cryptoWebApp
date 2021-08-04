import React, { useState, useEffect } from "react";
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
      <section className="table-header">
        <h4>Name</h4>
        <h4>Price</h4>
        <h4>24h %</h4>
        <h4>7d %</h4>
        <h4>Market Cap</h4>
        <h4>Volume (24h)</h4>
        <h4>Circulating Supply</h4>
      </section>

      {currencies.map((currency) => {
        const { id, name } = currency;
        return (
          <li key={id}>
            <div>
              <p>{name}</p>
            </div>
          </li>
        );
      })}
    </div>
  );
};

export default CryptoTable;
