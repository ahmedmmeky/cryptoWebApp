import React, { useState } from "react";
import { Dropdown } from "semantic-ui-react";
import { cryptoData } from "./cryptoData";
import { exchanges } from "./exchanges";

const CryptoTable = () => {
  const [currencies, setCurrencies] = useState(cryptoData);
  return (
    <div>
      <Dropdown
        placeholder="Select Exchange"
        fluid
        search
        selection
        options={exchanges}
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
        console.log(currencies);
        console.log(currency);
        const { id, name } = currency;
        console.log(name);
        console.log(id);
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
