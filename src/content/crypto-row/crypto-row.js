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
      <Link to={{ pathname: `/${id}` }}>
        <div className="coin-container" key={id}>
          <div className="coin-row">
            <div className="coin">
              <img class="image" src={image} alt="" />
              <h1>{name}</h1>
              <p className="symbol">{symbol.toUpperCase()}</p>
            </div>
            <div className="coin-data">
              <p className="coin-price">${price}</p>
              <p className="coin-volume">${volume.toLocaleString()}</p>
              <p className="coin-percent">{priceChange.toFixed(2)}%</p>

              <p className="coin-marketcap">${marketCap}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CryptoRow;
