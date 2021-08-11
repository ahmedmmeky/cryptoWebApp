import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import parse from "html-react-parser";
import "./coin.css";

export const Coin = () => {
  const [coin, setCoin] = useState();
  const [firstLoad, setFirstLoad] = useState(true);
  //const { key } = useParams();
  const { id } = useParams();
  const getCoin = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const response = await fetch(url);
    const coinData = await response.json();
    setCoin(coinData);
  };

  useEffect(() => {
    if (firstLoad) {
      getCoin();
      setFirstLoad(false);
    }
    const interval = setInterval(() => {
      getCoin();
    }, 5000);
    //console.log(coin.market_data.price_change_percentage_24h);
  }, []);
  if (coin !== undefined) {
    return (
      <div>
        <div className="coin-heading">
          <img className="coin-image" src={coin.image.large} alt="" />
          <div className="coin-identity">
            <h1>{coin.name}</h1>
            <h1>{coin.symbol.toUpperCase()}</h1>
            {coin.market_data.price_change_24h < 0 ? (
              <h2 className="red">
                {" "}
                {coin.market_data.price_change_percentage_24h
                  .toFixed(2)
                  .toLocaleString()}{" "}
                %
              </h2>
            ) : (
              <h2 className="green">
                {coin.market_data.price_change_percentage_24h
                  .toFixed(2)
                  .toLocaleString()}{" "}
                %
              </h2>
            )}
          </div>
        </div>
        <div>
          <h2>Current Price</h2>
          <h3>${coin.market_data.current_price.usd}</h3>
          <h2>Price Change (24h)</h2>
          <h3>${coin.market_data.price_change_24h.toLocaleString()}</h3>
          <h2>Price Change (7d)</h2>
          <h3>
            ${coin.market_data.price_change_percentage_7d.toLocaleString()}
          </h3>
          <h2>Price Change (14d)</h2>
          <h3>
            ${coin.market_data.price_change_percentage_14d.toLocaleString()}
          </h3>
          <h2>Price Change (30d)</h2>
          <h3>
            ${coin.market_data.price_change_percentage_30d.toLocaleString()}
          </h3>
          <h2>Price Change (60d)</h2>
          <h3>
            ${coin.market_data.price_change_percentage_60d.toLocaleString()}
          </h3>
          <h2>Price Change (200d)</h2>
          <h3>
            ${coin.market_data.price_change_percentage_200d.toLocaleString()}
          </h3>
          <h2>Low (24h)</h2>
          <h3>${coin.market_data.low_24h.usd}</h3>
          <h2>High (24h)</h2>
          <h3>${coin.market_data.high_24h.usd}</h3>
          <h2>Market Cap</h2>
          <h3>${coin.market_data.market_cap.usd.toLocaleString()}</h3>
          <h2>Volume</h2>
          <h3>${coin.market_data.total_volume.usd.toLocaleString()}</h3>
          <h2>Circulating Supply</h2>
          <h3>{coin.market_data.circulating_supply.toLocaleString()}</h3>
          <h2>Total Supply</h2>
          {coin.market_data.total_supply !== null ? (
            <h3>{coin.market_data.total_supply.toLocaleString()}</h3>
          ) : (
            <p>Currently Unavailable</p>
          )}
          <div>
            <h2>About {coin.name}</h2>
            {parse(coin.description.en)}
          </div>
        </div>
      </div>
    );
  } else {
    return <div class="loader"></div>;
  }
};

export default Coin;
