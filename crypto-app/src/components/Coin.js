import React from "react";

function Coin({ name, icon, price, symbol }) {
  return (
    <div className="coin">
      <h1> {name}</h1>
      <img src={icon} />
      <h3>Current Price: {price}</h3>
      <h3> Ticker: {symbol}</h3>
    </div>
  );
}

export default Coin;