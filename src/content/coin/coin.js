import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export const Coin = () => {
  const [coin, setCoin] = useState();
  //const { key } = useParams();
  const { id } = useParams();
  const { name } = useParams();
  const getCoin = async () => {
    const url = `https://api.coingecko.com/api/v3/coins/${id}`;
    const response = await fetch(url);
    const coinData = await response.json();
    setCoin(coinData);
  };
  useEffect(() => {
    getCoin();
    console.log(coin);
    //console.log(coin.market_data.price_change_percentage_24h);
    console.log(name);
  }, []);
  if (coin !== undefined) {
    return (
      <p>
        hello this is {id} and the price is{" "}
        {coin.market_data.price_change_percentage_24h}
      </p>
    );
  } else {
    return <p>hello</p>;
  }
};

export default Coin;
