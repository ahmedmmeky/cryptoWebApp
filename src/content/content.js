import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CryptoTable2 from "../crypto-table-2/crypto-table-2";
import { exchanges } from "../crypto-table/exchanges";
import * as exchangeCurrencies from "../exchanges/exchangeCurrencies";

const Content = () => {
  const [dropDownExchange, setDropdownExchange] = useState();
  const [exchange, setExchange] = useState([]);

  const getDropdownExchange = async (e, { value }) => {
    setDropdownExchange(value);
    const chosenExchange = exchangeCurrencies[value];
    setExchange(chosenExchange);
    //console.log(exchange);
  };

  /*useEffect(() => {
    getExchange();
  }, [exchange]);*/

  return (
    <div>
      <Dropdown
        placeholder="Select Exchange"
        fluid
        search
        selection
        options={exchanges}
        onChange={getDropdownExchange}
      />
      <ul className="table-header">
        <li>Name</li>
        <li>Price</li>
        <li>24h %</li>
        <li>7d %</li>
        <li>Market Cap</li>
        <li>Volume (24h)</li>
        <li>Circulating Supply</li>
      </ul>

      <CryptoTable2 exchange={exchange} />
    </div>
  );
};

export default Content;
