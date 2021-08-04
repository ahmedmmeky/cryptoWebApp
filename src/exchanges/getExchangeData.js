import React, { useState } from "react";

export default function getExchangeData() {
  const [returnValue, setReturnValue] = useState([]);
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const data = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });

  //const willBeReturned = [];

  const getData = async () => {
    //const d = await data;
    //console.log(d);
    //willBeReturned = d;
    //return d;
    data.then((a) => {
      setReturnValue(a);
      return a;
    });
  };
  return <div></div>;
}
