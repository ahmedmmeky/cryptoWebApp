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
      <div classs="coin-specific-data">
        <div className="coin-intro-container">
          <div className="coin-heading">
            <div className="coin-identity">
              <img className="coin-image" src={coin.image.large} alt="" />
              <h2 className="coin-specific-name">{coin.name}</h2>
              <h2 className="coin-specific-symbol">
                {coin.symbol.toUpperCase()}
              </h2>
            </div>

            <div className="coin-specific-important">
              <div class="coin-price-cointainer">
                <h2 className="coin-specific-price">
                  ${coin.market_data.current_price.usd.toLocaleString()}
                </h2>
              </div>
              {coin.market_data.price_change_24h < 0 ? (
                <div className="price-change-container background-red">
                  <h2 className="coin-specific-change">
                    {" "}
                    {coin.market_data.price_change_percentage_24h
                      .toFixed(2)
                      .toLocaleString()}{" "}
                    %
                  </h2>
                </div>
              ) : (
                <div className="price-change-container background-green">
                  <h2 className="coin-specific-change">
                    {coin.market_data.price_change_percentage_24h
                      .toFixed(2)
                      .toLocaleString()}{" "}
                    %
                  </h2>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="whole-thing">
          <div className="whole">
            <div className="coin-detailed-data">
              <div className="percentage-change-container">
                <div className="percentage-change">
                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>7d%</h3>
                    <h3 className="description-data">
                      {coin.market_data.price_change_percentage_7d.toLocaleString()}{" "}
                      %
                    </h3>
                  </div>

                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>14d%</h3>
                    <h3 className="description-data">
                      {coin.market_data.price_change_percentage_14d.toLocaleString()}{" "}
                      %
                    </h3>
                  </div>

                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>30d%</h3>
                    <h3 className="description-data">
                      {coin.market_data.price_change_percentage_30d.toLocaleString()}{" "}
                      %
                    </h3>
                  </div>
                </div>

                <div className="percentage-change">
                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>Low (24h)</h3>
                    <h3 className="description-data">
                      ${coin.market_data.low_24h.usd.toLocaleString()}
                    </h3>
                  </div>

                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>High (24h)</h3>
                    <h3 className="description-data">
                      ${coin.market_data.high_24h.usd.toLocaleString()}
                    </h3>
                  </div>
                </div>
                <div className="percentage-change">
                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>Market Cap</h3>
                    <h3 className="description-data">
                      ${coin.market_data.market_cap.usd.toLocaleString()}
                    </h3>
                  </div>

                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>Volume</h3>
                    <h3 className="description-data">
                      ${coin.market_data.total_volume.usd.toLocaleString()}
                    </h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="coin-detailed-data">
              <div className="percentage-change-container">
                <div className="percentage-change">
                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>Circulating Supply</h3>
                    <h3 className="description-data">
                      {coin.market_data.circulating_supply.toLocaleString()}
                    </h3>
                  </div>
                  <div className="description">
                    <h3 style={{ color: "#9289bd" }}>Total Supply</h3>
                    {coin.market_data.total_supply !== null ? (
                      <h3 className="description-data">
                        {coin.market_data.total_supply.toLocaleString()}
                      </h3>
                    ) : (
                      <p>Currently Unavailable</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="article-container">
              <h2 className="about-header">About {coin.name}</h2>
              <div className="coin-about">
                <article>
                  <h3 className="parg-article">{parse(coin.description.en)}</h3>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
  }
};

export default Coin;
