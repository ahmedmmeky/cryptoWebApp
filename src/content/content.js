import React, { useState, useEffect } from "react";
import { Dropdown } from "semantic-ui-react";
import CryptoTable from "./crypto-table/crypto-table";
import { exchanges } from "../exchanges/exchanges";
import * as exchangeCurrencies from "../exchanges/exchangeAPIs";
import "./content.css";
import { Link } from "react-router-dom";

const Content = () => {
  /*window.addEventListener("scroll", function () {
    if (this.document.location.pathname === "/") {
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
    }
  });*/
  /*useEffect(() => {
    getExchange();
  }, [exchange]);*/

  return <CryptoTable className="crypto-table" />;
};

export default Content;
