import React from "react";
import "./Homepage.css";

function Homepage({ cryptoData }) {
 

  return (
    <div className="home-wrapper">
     
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>All Time High</th>
            <th>24h %</th>
            <th>24h Change</th>
            <th>Market Cap</th>
            <th>Volume (24h)</th>
            <th>Circulating Supply</th>
            <th>Total Supply</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td className="d-flex">
                <img
                  src={crypto.image}
                  alt="crypto image"
                  width="50"
                  height="50"
                />
                <h5>{crypto.name}</h5>
              </td>
              <td>{crypto.symbol.toUpperCase()}</td>
              <td>${crypto.current_price.toFixed(2)}</td>
              <td>${crypto.ath.toFixed(2)}</td>

              <td>{crypto.price_change_percentage_24h.toFixed(2)}%</td>
              <td>${crypto.price_change_24h.toFixed(2)}</td>
              <td>${crypto.market_cap.toLocaleString()}</td>
              <td>${crypto.total_volume.toLocaleString()}</td>
              <td>
                {crypto.circulating_supply.toLocaleString()}
                {crypto.symbol.toUpperCase()}
              </td>
              <td>
                {crypto.total_supply}
                {crypto.symbol.toUpperCase()}
              </td>
              {/* <td>${crypto.id/market_chart/range}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Homepage;
