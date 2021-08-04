import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CryptoTable2 from "./crypto-table/crypto-table";
import { exchanges } from "../exchanges/exchanges";
import * as exchangeCurrencies from "../exchanges/exchangeAPIs";
import "./content.css";

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
        <div className="name">
          <li>Name</li>
        </div>
        <div className="price">
          <li className>Price</li>
        </div>
        <div className="volume">
          <li>Volume</li>
        </div>
        <div className="percent-change">
          <li>24h %</li>
        </div>
        {/*<li>24h</li>*/}
        <div className="market-cap">
          <li>Market Cap</li>
        </div>

        {/*<li>Circulating Supply</li>*/}
      </ul>

      <CryptoTable2 exchange={exchange} />
    </div>
  );
};

export default Content;
