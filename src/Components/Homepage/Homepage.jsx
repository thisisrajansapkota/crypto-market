import React from "react";
import "./Homepage.css";

function Homepage({ cryptoData }) {
  return (
    <div className="home-wrapper">
      {/* Normal div */}
      {/* <div>
          <h2>{cryptoData[0].name}</h2>
          <p>Symbol: {cryptoData[0].symbol.toUpperCase()}</p>
          <p>Current Price: ${cryptoData[0].current_price}</p>
          <p>Market Cap: ${cryptoData[0].market_cap}</p>
          <img src={cryptoData[0].image} alt={cryptoData[0].name} width="100" height="100" />
        </div> */}

      {/* Mapped Div */}
      <div>
        {cryptoData.map((crypto, index) => (
          <div key={index}>
            <ul className="d-flex justify-content-between">
              <li>
                <img
                  src={crypto.image}
                  alt={crypto.name}
                  width="50"
                  height="50"
                />
              </li>
              <li>
                <h4>{crypto.name}</h4>
              </li>
              <li>
                <p>Symbol: {crypto.symbol.toUpperCase()}</p>
              </li>
              <li>
                <p>Current Price: ${crypto.current_price}</p>
              </li>

              <li>
                <p>Market Cap: ${crypto.market_cap}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Homepage;
