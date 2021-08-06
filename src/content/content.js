import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CryptoTable from "./crypto-table/crypto-table";
import { exchanges } from "../exchanges/exchanges";
import * as exchangeCurrencies from "../exchanges/exchangeAPIs";
import "./content.css";

const Content = () => {
  const [dropDownExchange, setDropdownExchange] = useState();
  const [exchange, setExchange] = useState([]);
  const [searchValue, setSearchValue] = useState();

  const getDropdownExchange = async (e, { value }) => {
    setDropdownExchange(value);
    const chosenExchange = exchangeCurrencies[value];
    setExchange(chosenExchange);
    //console.log(exchange);
  };

  window.addEventListener("scroll", function () {
    const headerContainer = document.querySelector(".header-container");
    const scrollHeight = window.pageYOffset;
    const nameListItem = document.querySelector(".name");
    const priceListItem = document.querySelector(".price");
    const volumeListItem = document.querySelector(".volume");
    const percentListItem = document.querySelector(".percent-change");
    const marketListItem = document.querySelector(".market-cap");
    const headerContainerHeight =
      headerContainer.getBoundingClientRect().height;
    if (scrollHeight > headerContainerHeight) {
      headerContainer.classList.add("scrolling");
      nameListItem.classList.add("scrolling-heading-value");
      priceListItem.classList.add("scrolling-heading-value");
      volumeListItem.classList.add("scrolling-heading-value");
      percentListItem.classList.add("scrolling-heading-value");
      marketListItem.classList.add("scrolling-heading-value");
    } else {
      headerContainer.classList.remove("scrolling");
      nameListItem.classList.remove("scrolling-heading-value");
      priceListItem.classList.remove("scrolling-heading-value");
      volumeListItem.classList.remove("scrolling-heading-value");
      percentListItem.classList.remove("scrolling-heading-value");
      marketListItem.classList.remove("scrolling-heading-value");
    }
  });

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
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <div class="header-container">
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
      </div>

      <CryptoTable
        exchange={exchange}
        searchValue={searchValue}
        className="crypto-table"
      />
    </div>
  );
};

export default Content;
