import React from "react";
import COIN, { Coin } from "../coin/coin";
import { BrowserRouter, Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./crypto-row.css";
export const CryptoRow = ({
  id,
  name,
  price,
  symbol,
  marketCap,
  volume,
  image,
  priceChange,
}) => {
  //console.log(key);
  CryptoRow.propTypes = {
    key: PropTypes.string.isRequired,
  };
  return (
    <div>
      <Link className="link-container" to={{ pathname: `/${id}` }}>
        <div className="coin-container" key={id}>
          <div className="coin-row">
            <div className="coin regular">
              <img class="image" src={image} alt="" />
              <h1>{name}</h1>
              <p className="symbol">{symbol.toUpperCase()}</p>
            </div>
            <div className="coin-data">
              <p className="coin-price regular">${price}</p>
              {priceChange < 0 ? (
                <p className="coin-percent red">{priceChange}%</p>
              ) : (
                <p className="coin-percent green">{priceChange}%</p>
              )}
              <p className="coin-volume regular">${volume.toLocaleString()}</p>

              <p className="coin-marketcap regular">${marketCap}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CryptoRow;
