import React, { useState, useEffect } from "react";
import CryptoRow from "../crypto-row/crypto-row";
import "./crypto-table.scss";
const CryptoTable = () => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getCurrencies = async () => {
    const url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=1000&page=1&sparkline=false";
    const response = await fetch(url);
    const apiCurrencies = await response.json();
    setCurrencies(apiCurrencies);
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrencies();
    }, 3000);
  }, []);

  const updatedCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(search.toLowerCase()) ||
      currency.symbol.toLowerCase().includes(search.toLowerCase())
  );

  window.addEventListener("scroll", function () {
    const headerContainer = document.querySelector(".header-container");
    if (headerContainer !== undefined && headerContainer !== null) {
      const headerContainerHeight = headerContainer.offsetTop;
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > headerContainerHeight) {
        headerContainer.classList.add("scrolling");
      } else {
        headerContainer.classList.remove("scrolling");
      }
    }
  });

  if (!loading) {
    return (
      <div className="crypto-table-background" style={{}}>
        <div class="above-table">
          <div class="search-container">
            <div class="search-bar">
              <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setSearch(e.target.value)}
              ></input>
              <div class="search"></div>
            </div>
          </div>
        </div>

        <div class="header-container">
          <ul className="table-header">
            <div className="name">
              <li>Name</li>
            </div>
            <div className="coin-data-header">
              <div className="price-header">
                <li>Price</li>
              </div>
              <div className="percent-change-header">
                <li>24h %</li>
              </div>
              <div className="volume-header">
                <li>Volume</li>
              </div>
              {/*<li>24h</li>*/}
              <div className="market-cap-header">
                <li>Market Cap</li>
              </div>
            </div>

            {/*<li>Circulating Supply</li>*/}
          </ul>
        </div>
        <div className="all-row">
          {updatedCurrencies.length !== 0 ? (
            updatedCurrencies.map((coin) => {
              return (
                <CryptoRow
                  id={coin.id}
                  name={coin.name}
                  price={coin.current_price}
                  symbol={coin.symbol}
                  marketCap={coin.market_cap}
                  volume={coin.total_volume}
                  image={coin.image}
                  priceChange={coin.price_change_percentage_24h}
                />
              );
            })
          ) : (
            <div className="no-coins">
              <h2>No Coins Were Found</h2>
            </div>
          )}
        </div>
      </div>
    );
  } else if (loading) {
    return (
      <div class="loading-container">
        <figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
      </div>
    );
  } else {
    return (
      <div style={{ backgroundColor: "rgba(28, 27, 36, 255)" }}>
        <figure>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </figure>
      </div>
    );
  }
};

export default CryptoTable;
