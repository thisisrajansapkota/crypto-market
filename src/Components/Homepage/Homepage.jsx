import React, { useContext, useEffect, useState } from "react";
import "./Homepage.css";
import { Button, Form } from "react-bootstrap";
import { CoinContext } from "../Context/CoinContext";

function Homepage() {
  const {
    cryptoData,
    currency,
    searchTerm,
    setSearchTerm,
    setFilteredData,
    filteredData,
  } = useContext(CoinContext);
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    const newIndex = startIndex + 10;
    if (newIndex < cryptoData.length) {
      setStartIndex(newIndex);
    }
  };

  const handlePrev = () => {
    const newIndex = startIndex - 10;
    if (newIndex >= 0) {
      setStartIndex(newIndex);
    }
  };

  const handleInput = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setFilteredData(
      cryptoData.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  };

  return (
    <div className="home-wrapper">
      <h1>
        Largest <br /> Crypto Marketplace
      </h1>
      <p>Welcome to your favourite cryptocurrency Marketplace.</p>

      <Form className="d-flex" onSubmit={handleSearch}>
        <Form.Control
          onChange={handleInput}
          type="search"
          placeholder="Search"
          className="me-2 form-control"
          aria-label="Search"
        />
        <Button variant="light" type="submit">
          Search
        </Button>
      </Form>

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
          {filteredData.length > 0
            ? filteredData
                .slice(startIndex, startIndex + 10)
                .map((crypto, index) => (
                  <tr key={index}>
                    <td>{startIndex + index + 1}</td>
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
                    <td>
                      {currency.symbol}
                      {crypto.current_price.toFixed(2)}
                    </td>
                    <td>
                      {currency.symbol}
                      {crypto.ath.toFixed(2)}
                    </td>
                    <td
                      className={
                        crypto.price_change_percentage_24h.toFixed(2) > 0
                          ? "green"
                          : "red"
                      }
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td
                      className={
                        crypto.price_change_24h.toFixed(2) > 0 ? "green" : "red"
                      }
                    >
                      {currency.symbol}
                      {crypto.price_change_24h.toFixed(2)}
                    </td>
                    <td>
                      {currency.symbol}
                      {crypto.market_cap.toLocaleString()}
                    </td>
                    <td>
                      {currency.symbol}
                      {crypto.total_volume.toLocaleString()}
                    </td>
                    <td>
                      {crypto.circulating_supply.toLocaleString()}
                      {crypto.symbol.toUpperCase()}
                    </td>
                    <td>
                      {crypto.total_supply}
                      {crypto.symbol.toUpperCase()}
                    </td>
                  </tr>
                ))
            : cryptoData
                .slice(startIndex, startIndex + 10)
                .map((crypto, index) => (
                  <tr key={index}>
                    <td>{startIndex + index + 1}</td>
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
                    <td>
                      {currency.symbol}
                      {crypto.current_price.toFixed(2)}
                    </td>
                    <td>
                      {currency.symbol}
                      {crypto.ath.toFixed(2)}
                    </td>
                    <td
                      className={
                        crypto.price_change_percentage_24h.toFixed(2) > 0
                          ? "green"
                          : "red"
                      }
                    >
                      {crypto.price_change_percentage_24h.toFixed(2)}%
                    </td>
                    <td
                      className={
                        crypto.price_change_24h.toFixed(2) > 0 ? "green" : "red"
                      }
                    >
                      {currency.symbol}
                      {crypto.price_change_24h.toFixed(2)}
                    </td>
                    <td>
                      {currency.symbol}
                      {crypto.market_cap.toLocaleString()}
                    </td>
                    <td>
                      {currency.symbol}
                      {crypto.total_volume.toLocaleString()}
                    </td>
                    <td>
                      {crypto.circulating_supply.toLocaleString()}
                      {crypto.symbol.toUpperCase()}
                    </td>
                    <td>
                      {crypto.total_supply}
                      {crypto.symbol.toUpperCase()}
                    </td>
                  </tr>
                ))}
        </tbody>
      </table>
      <div className="pagination">
        <Button onClick={handlePrev} disabled={startIndex === 0}>
          Prev
        </Button>{" "}
        <Button
          onClick={handleNext}
          disabled={startIndex + 10 >= cryptoData.length}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default Homepage;
