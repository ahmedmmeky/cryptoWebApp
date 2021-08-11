import React, { useState, useEffect } from "react";
import CryptoRow from "../crypto-row/crypto-row";
import "./crypto-table.css";
const CryptoTable = ({ exchange }) => {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const getCurrencies = async () => {
    const url = exchange[0];
    const response = await fetch(url);
    const apiCurrencies = await response.json();
    setCurrencies(apiCurrencies);
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getCurrencies();
    }, 3000);
  }, [exchange]);

  const updatedCurrencies = currencies.filter(
    (currency) =>
      currency.name.toLowerCase().includes(search.toLowerCase()) ||
      currency.symbol.toLowerCase().includes(search.toLowerCase())
  );

  if (exchange.length !== 0 && !loading) {
    return (
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={(e) => setSearch(e.target.value)}
        />
        {updatedCurrencies.map((coin) => {
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
        })}
      </div>
    );
  } else if (exchange.length !== 0 && loading) {
    return (
      <div>
        <div class="loader"></div>
      </div>
    );
  } else {
    return (
      <div>
        <h2>Select an Exchange!</h2>
      </div>
    );
  }
};

export default CryptoTable;
