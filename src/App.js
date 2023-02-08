import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import React from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
      console.log(coins);
    });
  }, [])
  return(
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
        <select>
          {coins.map((coin) => (
          <option id="op">{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>
          ))}
        </select>
      }
      <div>
        {open.name}
      </div>
    </div>
  );
}

export default App;
