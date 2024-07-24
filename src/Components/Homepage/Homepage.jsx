import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CoinContext } from "../Context/CoinContext";
import "./Homepage.css";
import CoinPage from "../CoinPage/CoinPage";
import bitcoinImage from '../../assets/bitcoin.png'
import etherImage from "../../assets/ether.jpg";


function Homepage() {
  const {
    cryptoData,
    currency,
    searchTerm,
    setSearchTerm,
    setFilteredData,
    filteredData,
    coinData,
    setCoinData,
    coinClicked,
    setCoinClicked,
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

  const handleReset = () => {
    setSearchTerm("");
  };

  const handleCryptoClick = (crypto) => {
    setCoinData(crypto);
    setCoinClicked(true);
    console.log(coinData);
  };

  if (coinClicked) {
    return <CoinPage />;
  }

  return (
    <div className="home-wrapper">
      <div className="content-container">
        <div
          className="header-background"
          style={{
            marginTop: "10px",           
             minHeight: "600px",            
             backgroundImage: `url(${etherImage})`,
            backgroundSize: "1000px 1000px", 
            //  backgroundSize: "auto",

            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            // width: "850px",
            // height: "auto",
          }}
        >
          <div className="img">{/* <img src={bitcoinImage} /> */}</div>
          <h1>
            Largest <br /> Crypto Marketplace
          </h1>
          <Form
            className="d-flex justify-content-center"
            onSubmit={handleSearch}
          >
            <Form.Control
              onChange={handleInput}
              value={searchTerm}
              type="search"
              placeholder="Search"
              className="me-2 form-control"
              aria-label="Search"
            />
            <div className="button-wrapper">
              <Button
                onClick={handleReset}
                variant="light"
                type="button"
                className="btn"
                style={{ color: "red", borderColor: "red" }}
              >
                Reset
              </Button>
            </div>
          </Form>
        </div>

        <div className="crypto-table-container">
          <table className="crypto-table">
            <thead
              className={
                searchTerm && filteredData.length === 0 ? "hidden" : ""
              }
            >
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Symbol</th>
                <th>Price</th>
                <th>All Time High</th>
                <th>24h %</th>
                <th>24h Change</th>
                <th>Market Cap</th>
                {/* <th>Volume (24h)</th> */}
                <th>Circulating Supply</th>
                {/* <th>Total Supply</th> */}
              </tr>
            </thead>
            <tbody>
              {searchTerm && filteredData.length > 0 ? (
                filteredData
                  .slice(startIndex, startIndex + 10)
                  .map((crypto, index) => (
                    <tr key={index} onClick={() => handleCryptoClick(crypto)}>
                      <td>{startIndex + index + 1}</td>
                      <td className="d-flex">
                        <img
                          src={crypto.image}
                          alt="crypto"
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
                          crypto.price_change_percentage_24h > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td
                        className={
                          crypto.price_change_24h > 0 ? "green" : "red"
                        }
                      >
                        {currency.symbol}
                        {crypto.price_change_24h.toFixed(2)}
                      </td>
                      <td>
                        {currency.symbol}
                        {crypto.market_cap.toLocaleString()}
                      </td>
                      {/* <td>
                        {currency.symbol}
                        {crypto.total_volume.toLocaleString()}
                      </td> */}
                      <td>
                        {crypto.circulating_supply.toLocaleString()}{" "}
                        {crypto.symbol.toUpperCase()}
                      </td>
                      {/* <td>
                        {crypto.total_supply} {crypto.symbol.toUpperCase()}
                      </td> */}
                    </tr>
                  ))
              ) : searchTerm && filteredData.length === 0 ? (
                <tr>
                  <td colSpan="11" style={{ textAlign: "center" }}>
                    No results found. Try another crypto.
                  </td>
                </tr>
              ) : (
                cryptoData
                  .slice(startIndex, startIndex + 10)
                  .map((crypto, index) => (
                    <tr key={index} onClick={() => handleCryptoClick(crypto)}>
                      <td>{startIndex + index + 1}</td>
                      <td className="d-flex">
                        <img
                          src={crypto.image}
                          alt="crypto"
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
                          crypto.price_change_percentage_24h > 0
                            ? "green"
                            : "red"
                        }
                      >
                        {crypto.price_change_percentage_24h.toFixed(2)}%
                      </td>
                      <td
                        className={
                          crypto.price_change_24h > 0 ? "green" : "red"
                        }
                      >
                        {currency.symbol}
                        {crypto.price_change_24h.toFixed(2)}
                      </td>
                      <td>
                        {currency.symbol}
                        {crypto.market_cap.toLocaleString()}
                      </td>
                      {/* <td>
                        {currency.symbol}
                        {crypto.total_volume.toLocaleString()}
                      </td> */}
                      <td>
                        {crypto.circulating_supply.toLocaleString()}{" "}
                        {crypto.symbol.toUpperCase()}
                      </td>
                      {/* <td>
                        {crypto.total_supply} {crypto.symbol.toUpperCase()}
                      </td> */}
                    </tr>
                  ))
              )}
            </tbody>
          </table>
        </div>
        <div
          className={
            searchTerm && filteredData.length === 0 ? "hidden" : "pagination"
          }
        >
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
    </div>
  );
}

export default Homepage;
